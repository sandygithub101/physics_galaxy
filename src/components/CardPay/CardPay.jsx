import React, { useEffect, useState } from "react";
import "./CardPay.css";
import CopanImage from "../../assets/images/copan.png";
import Button4 from "../Buttons/Button4/Button4";
import { Link } from "react-router-dom";
import {
  couponVerifyService,
  getCouponService,
  getFPaymentService,
  getPayGateWayService,
} from "../../services";
import { resHandler, stringToFloat } from "../../../helper";
// import Modal from '../Modal/Modal'
import Button5 from "../Buttons/Button5/Button5";
import Discounticon from "../../assets/images/discount (4) 1.png";
import PaymentGatewayModal from "../PaymentGatewayModal/PaymentGatewayModal";
import TestLoading from "../../containers/TestLoading/TestLoading";
import useRazorpay from "react-razorpay";
import toast from "react-hot-toast";
export default function CardPay({
  detail,
  id,
  sendDataToParent,
  loading,
}) {
  const [Razorpay] = useRazorpay();
  const [openModal, setOpenModal] = useState(false);
  const [checkData, setCheckData] = useState(false);
  const [paymentGatewayList, setPaymentGatewayList] = useState();
  const [selectedPaymentGateway, setSelectedPaymentGateway] = useState();
  const [paymentLoading, setPaymentLoading] = useState(true);
  const [coupanCode, setCoupanCode] = useState("");
  const [couponApplied, setCoupanApplied] = useState(false);
  const [couponFetched, setCouponFetched] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState();
  const [courseId, setCourseId] = useState();
  const handleCheckBox = (e) => {
    setCheckData(e.target.checked);
    // console.log(e.target.checked)
  };
  useEffect(() => {
    if (typeof id != 'undefined') {
      const stringWithoutUnderscore = id.replace(/_/g, '');
      getCoupons(stringWithoutUnderscore);
      setCourseId(stringWithoutUnderscore);
    }
  }, [id])
  const handleButtonClick = async () => {
    // e.preventDefault();
    // handlePayment();
    setOpenModal(true);
    //  await getPayGateWayService().then(res =>{
    //   let {status, data, message} = resHandler(res);
    //   console.log(data)
    //   setPaymentGatewayList(data);
    //  })
  };
  const handleSelectedPaymentGateway = (value) => {
    // console.log(value, "selectedPayemtn");
    handlePayment(value);
    // handlePayment()
    // console.log(e.target.value)
    // setSelectedPaymentGateway(e.target.value)
  };

  const getCoupons = async (value) => {
    const formData = new FormData();
    formData.append("course_id", value);
    formData.append("parent_id", "");
    await getCouponService(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);

        if (status) {

          const coupon = data.find(item => item.coupon.coupon_type == "2");
          const coupon_detail = {
            coupon: coupon && coupon.coupon.coupon_tilte,
            course_id: coupon && coupon.id
          }
          if (status && coupon) {
            applyCoupon(coupon_detail);
            setPreAppliedCoupon(true);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const applyCoupon = async (value) => {
    const formData = new FormData();
    // setCouponError(false);
    if (value.coupon.length) {
      formData.append("coupon_code", value.coupon);
      formData.append("course_id", value.course_id);
      await couponVerifyService(formData)
        .then((res) => {
          const { status, data, message } = resHandler(res);
          if (status) {
            setCoupanApplied(true);

            setCouponDiscount(data[0]);
            return true;
          } else {
            // 'The coupon code field is required.'
            message && toast.error(message);
            setCoupanApplied(false);
            setCoupanCode("");
            setCouponFetched(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCouponError(true);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handlePayment = async (value) => {
    loading(true);
    const formData = new FormData();
    formData.append("type", 1);
    formData.append("course_id", courseId);
    formData.append("course_price", stringToFloat(detail.mrp));
    formData.append("tax", stringToFloat(detail.tax));
    {
      value.meta_name == "RZP_DETAIL" && formData.append("pay_via", 3);
    }
    {
      value.meta_name == "EASEBUZZ_DETAIL" && formData.append("pay_via", 9);
    }
    formData.append(
      "coupon_applied",
      couponApplied ? couponDiscount.coupon.id : 0
    );

    await getFPaymentService(formData)
      .then((res) => {
        let { data, status, message } = resHandler(res);
        let key = value.mid;
        if (status) {
          // console.log(value, "value")
          if (value.meta_name == "RZP_DETAIL") {
            // let key = value.mid;
            loading(false);
            // razorpayGateway(data.txnToken, key)
            const options = {
              key: value.key,
              // amount: `${courseDetail}`,
              // currency: "INR",
              // name: "PHYSICS GALAXY",
              // description: "Test Transaction",
              // image: pglogo,
              order_id: data.pre_transaction_id,
              handler: (res) => {
                // console.log(res, "res");
                const order_details = {
                  txnid: res.razorpay_order_id,
                  payid: res.razorpay_payment_id,
                  pay_via: 3,
                };
                let status = 1;
                payemntConfirmation(status, order_details);
              },
              theme: {
                color: "#3399cy",
              },
            };

            const rzp1 = new Razorpay(options);

            rzp1.on("payment.failed", function (response) {
              toast.error("Payment failed!");
              //  localStorage.clear()
            });
            rzp1.open();
          }
          if (value.meta_name == "EASEBUZZ_DETAIL") {
            paymentGateWay(data.txnToken, key);
          }
        }
        else {
          loading(false);
          toast.error(message)
        }
        // paymentGateWay(data.txnToken,key);
        status && loading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const paymentGateWay = async (acc_key, key) => {
    var easebuzzCheckout = new window.EasebuzzCheckout(
      key,
      import.meta.env.VITE_TYPE
    );
    var options = {
      access_key: acc_key, // access key received via Initiate Payment
      onResponse: (response) => {
        console.log(response);
        // post_transaction_id
        const order_details = {
          txnid: response.txnid,
          payid: response.easepayid,
          pay_via: 9,
        };
        let status = response.status == "success" ? 1 : 0;
        loading(true);
        payemntConfirmation(status, order_details);
        //   const formData = new FormData();
        //   formData.append('type', 2);
        //   formData.append('course_id', courseId);
        //   formData.append('course_price', stringToFloat(detail.mrp));
        //   formData.append('tax',stringToFloat(detail.tax));
        //   formData.append('pay_via', 9);
        //   formData.append('coupon_applied', 0);
        //   formData.append('pre_transaction_id',response.txnid);
        //   formData.append('transaction_status', status);
        //   formData.append('post_transaction_id', response.easepayid);
        //    getFPaymentService(formData).then(res =>{
        //     let {data, status, message} = resHandler(res);
        //   //  status && console.log(data)
        //    status && sendDataToParent(order_details);
        //    loading(false)

        // }).catch(err =>{
        //   console.log(err)
        // })
      },
      theme: "#123456", // color hex
    };

    await easebuzzCheckout.initiatePayment(options);
    // console.log(JSON.stringify(selectedPaymentGateway))
  };

  const payemntConfirmation = (status, data) => {
    // let status = response.status == "success" ? 1 : 0;
    loading(true)
    setPaymentLoading(true);
    const formData = new FormData();
    formData.append("type", 2);
    formData.append("course_id", courseId);
    {
      couponApplied
        ? formData.append("course_price", stringToFloat(couponDiscount.mrp))
        : formData.append("course_price", stringToFloat(detail.mrp));
    }

    {
      couponApplied
        ? formData.append("tax", stringToFloat(couponDiscount.tax))
        : formData.append("tax", stringToFloat(detail.tax));
    }

    formData.append("pay_via", data.pay_via);
    formData.append(
      "coupon_applied",
      couponApplied ? couponDiscount.coupon.id : 0
    );
    formData.append("pre_transaction_id", data.txnid);
    formData.append("transaction_status", status);
    formData.append("post_transaction_id", data.payid);

    getFPaymentService(formData)
      .then((res) => {
        let { status, message } = resHandler(res);
        setPaymentLoading(false);
        loading(false)
        if (status) {
          // console.log(data, 'data')
          status && sendDataToParent(data);
          loading(false);
        }
        //  localStorage.clear();
        else {
          loading(false);
          message && toast.error("Payment Failed!, Please try again!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sum = (num1, num2) => {
    return (num1 + num2).toFixed(2);
  };
  return (
    <div className="text-center vjed_sub_all card-order ">
      {/* {paymentLoading && <TestLoading/>} */}
      {openModal && (
        <PaymentGatewayModal
          isOpen={openModal}
          isClose={() => setOpenModal(false)}
          selectedGateway={handleSelectedPaymentGateway}
        />
      )}

      <div className="card vjed-card border-0 shadow radious_all">
        <div className="vjed-order-heading">
          <h5 className="text-center mt-2">Order Summary</h5>
        </div>
        {/* <div className="vjed-copan-card m-2  px-2 rounded">
                            <div className="d-flex align-items-center">
                                <img src={CopanImage} className=" me-2"/>
                                <h6 className="text-center mt-2"><b>Have Coupan?</b></h6>
                            </div>
                            <div className="text-center">
                              <h6 className="mt-2"> |&nbsp;&nbsp;<b>Add Coupan</b></h6>
                            </div>
                         </div>  */}

        <div className="vjed-price m-2 px-1">
          <div className="couponalldiv d-flex align-items-center justify-content-between">
            <div className="frstcoupon d-flex px-2">
              <img className="hvecoupnimg mt-1 me-3" src={Discounticon} />
              <input
                type="text"
                value={coupanCode}
                className="hvecoupn"
                placeholder="Have Coupon?"
                onChange={(e) => setCoupanCode(e.target.value)}
              />
            </div>
            <div
              className="px-1"
              onClick={() =>
                applyCoupon({ coupon: coupanCode, course_id: courseId })
              }
            >
              <h6 className="addcouponh mt-2"> Add Coupon</h6>
            </div>
          </div>
          {couponApplied &&
            <div className="d-flex align-items justify-content-center">
              <div className="coupnappl text-center">
                <h6 className="mt-2">
                  <b>Coupon Applied</b>
                </h6>
              </div>
            </div>}
          <div className="d-flex align-items justify-content-between">
            <div className="text-center">
              <h6 className="mt-2">
                <b>Package Price</b>
              </h6>
            </div>
            <div className="text-center">
              <h6 className="mt-2">
                {" "}
                <h6 className="mt-2">
                  {" "}
                  <b>
                    RS{" "}
                    {couponApplied && couponDiscount
                      ? couponDiscount.mrp
                      : detail.mrp}
                    /-
                  </b>
                </h6>
              </h6>
            </div>
          </div>
          <div className="d-flex align-items justify-content-between">
            <div className="text-center">
              <h6 className="mt-2">
                <b>GST</b>
              </h6>
            </div>
            <div className="text-center">
              <h6 className="mt-2">
                {" "}
                <b>
                  RS{" "}
                  {couponApplied && couponDiscount
                    ? couponDiscount.tax
                    : detail.tax}
                  /-
                </b>
              </h6>
            </div>
          </div>
          <div className="d-flex align-items justify-content-between">
            <div className="text-center">
              <h6 className="mt-2">
                <b>Total Price</b>
              </h6>
            </div>
            <div className="text-center">
              <h6 className="mt-2">
                {" "}
                <b>
                  RS{" "}
                  {couponApplied && couponDiscount
                    ? sum(
                      Number(couponDiscount.mrp),
                      Number(couponDiscount.tax)
                    )
                    : sum(Number(detail.mrp), Number(detail.tax))}
                  /-
                </b>
              </h6>
            </div>
          </div>

          <div className="vjed-check">
            <div className="my-1">
              <input
                type="checkbox"
                className="form-check-input shadow-none me-2"
                id="exampleCheck1"
                onChange={handleCheckBox}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I have read all<Link to={"/"}> Terms & Conditions</Link>
              </label>
            </div>
          </div>
        </div>
        {/* <a href="#" className="btn btn-outline shadow-none">Proceed To Pay</a> */}
        <div className="text-center mb-3 p-2">
          {detail.is_purchased === `1` ? (
            <Button5 disabled name={"PURCHASED"} />
          ) : (
            <Button5
              name={"Proceed To Pay"}
              onButtonClick={handleButtonClick}
              disabled={!checkData || detail.validity === "0 Days"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
