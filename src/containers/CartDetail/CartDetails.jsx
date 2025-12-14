import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import Header from "../../components/Header/Header";
import LinkSend from "../../components/LinkSend/LinkSend";
import Footer from "../../components/Footer/Footer";
import CartCard from "./CartCard";
import {
  calculateTotalCoursePrice,
  calculateTotalDeliveryCharge,
  calculateTotalTaxCharge,
  courseBulkArray,
  isLogin,
  resHandler,
} from "../../../helper";
import { deleteUserAddressService, getFPaymentService, getPayGateWayService, removeCartItemService, showCartService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import CartMobileCart from "./CartMobileCart";
import { cart_Action } from "../Home/masterContentSlice";
import AddressModal from "./AddressModal2";
import AddressModal2 from "./AddressModal2";
import { useNavigate } from "react-router-dom/dist";
import PaymentConfirmtionModal from "./PaymentConfirmationModal";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

export default function CartDetails() {
  const Cart_Data = useSelector((state) => state.allCategory.cart);
  const saved_Address = useSelector((state) => state.allCategory);
  const [cartData, setCartData] = useState();
  const [saved_Address_List, setSave_Address_List] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShowPaymentConfirm, setIsShowPaymentConfirm] = useState(false);
  const [orderDetails, setOrderDetails] = useState()
  useEffect(() => {
    if (typeof Cart_Data !== "undefined") {
      setCartData(Cart_Data);
    } else {
      showCartData();
    }
  }, [Cart_Data]);
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  useEffect(() => {
    if (saved_Address?.address) {
      console.log(saved_Address.address, "saved_Address");
      setSave_Address_List(saved_Address.address);
    } else {
      showCartData();
    }
  }, [saved_Address]);

  const findDefaultAddress = (data) => {
    const defaultAddress = data.find((obj) => obj.is_default === "1");
    return defaultAddress && JSON.parse(defaultAddress?.address);
  };

  const showCartData = async () => {
    if (isLogin) {
      showCartService()
        .then((res) => {
          let { status, data, message } = resHandler(res);
          status && setCartData(data) && dispatch(cart_Action(data));
          !status && setCartData();
          console.log(data, "showcart");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleRemoveItemFromCart = async (value) => {
    let formData = new FormData();
    formData.append("item_id", value);
    await removeCartItemService(formData).then((res) => {
      let { status, data, message } = resHandler(res);
      status && message && toast.success(message);
      !status && message && toast.error(message);
      status && showCartData();
    });
  };

  const handleSelectAddress = (value) => {
    const updatedAddresses = saved_Address_List.map((address) => ({
      ...address,
      is_default: address.id === value ? '1' : '0',
    }));
    setSave_Address_List(updatedAddresses);
    // setShowCart(true)
    dispatch(address_Action())

  }

  const handleDeleteAddress = (id) => {
    const formData = new FormData()
    formData.append("id", id)
    deleteUserAddressService(formData).then(res => {
      let { status, data, message } = resHandler(res);
      status && toast.success(message);
      // status && dispatch(address_Action())
    })
  }

  const findDefaultStringAddress = (data) => {
    console.log('tktktktktktk', data)
    const defaultAddress = data.find((obj) => obj.is_default == 1);
    return defaultAddress && defaultAddress?.address;
  };

  const handlePlaceOrder = async () => {

    const formData = new FormData();
    formData.append('type', 5);
    formData.append('course_bulk', JSON.stringify(courseBulkArray(cartData.cartdata)));
    formData.append('address', findDefaultStringAddress(saved_Address_List));
    // formData.append('pre_transaction_id', courseId);

    // formData.append('course_id', courseId);
    // formData.append('course_price', stringToFloat(detail.course_sp));
    // formData.append('tax',stringToFloat(detail.tax));
    formData.append('pay_via', 9);
    formData.append('coupon_applied', 0);

    //  await getPayGateWayService().then(res =>{
    //   let {status, data, message} = resHandler(res);
    //   console.log(data, "paygate")
    // //   setPaymentGatewayList(data); 
    //  })

    await getFPaymentService(formData).then(res => {
      let { data, status, message } = resHandler(res);
      console.log(data)
      let key = import.meta.env.VITE_MID;
      status && paymentGateWay(data.txnToken, key);

    }).catch(err => {
      console.log(err)
    })
  }


  const paymentGateWay = async (acc_key, key) => {
    // '2PBP7IABZ2'
    var easebuzzCheckout = new EasebuzzCheckout(key, import.meta.env.VITE_TYPE);
    var options = {
      access_key: acc_key, // access key received via Initiate Payment
      onResponse: (response) => {
        console.log(response);
        // post_transaction_id
        const order_details = {
          orderid: response.txnid,
          transactionId: response.easepayid

        }
        let status = response.status == 'success' ? 1 : 0
        const formData = new FormData();
        formData.append('type', 6);
        formData.append('course_bulk', JSON.stringify(courseBulkArray(cartData.cartdata)))
        //   formData.append('course_price', stringToFloat(detail.course_sp));
        //   formData.append('tax',stringToFloat(detail.tax));
        formData.append('pay_via', 9);
        formData.append('coupon_applied', 0);
        formData.append('address', findDefaultStringAddress(saved_Address_List))
        formData.append('pre_transaction_id', response.txnid);
        formData.append('transaction_status', status);
        formData.append('post_transaction_id', response.easepayid);
        getFPaymentService(formData).then(res => {
          let { data, status, message } = resHandler(res);
          status && console.log(data)
          status && setIsShowPaymentConfirm(true)
          status && setOrderDetails(order_details)

        }).catch(err => {
          console.log(err)
        })
      },
      theme: "#123456" // color hex
    }

    await easebuzzCheckout.initiatePayment(options);
    // console.log(JSON.stringify(selectedPaymentGateway))

  }
  return (
    <>
      {isShowPaymentConfirm ?
        <SuccessMessage order_detail={orderDetails} course_name={'Books'} />

        : <>
          <Header />
          <section className=" card_main py-4">
            <div className="container">
              <div className="row product_card_box">
                <div className="col-lg-8 col-md-12 ">
                  {/*for dekstop,laptop,tab card */}
                  <table className="table product_table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData &&
                        cartData.cartdata.map((item, i) => {
                          console.log(item, "mycart");
                          return (
                            <CartCard
                              value={item}
                              removeItem={handleRemoveItemFromCart}
                              key={i}
                            />
                          );
                        })}
                      {/* <CartCard/> */}
                    </tbody>
                  </table>

                  {/*for mobile card */}
                  <div className="mobile_card">
                    {cartData &&
                      cartData.cartdata.map((item, i) => {
                        console.log(item, "mycart");
                        return (
                          <CartMobileCart
                            value={item}
                            removeItem={handleRemoveItemFromCart}
                            key={i}
                          />
                        );
                      })}
                  </div>

                  <div className="card_btn">
                    <button onClick={() => navigate('/books')}>CONTINUE SHOPPING</button>
                    {/* <button onClick={handlePlaceOrder}>Place Order</button> */}
                  </div>
                </div>

                {/* summary_card */}
                <div className="col-lg-4 col-md-12 summary_card ">
                  <div className="summary_card_box border">
                    <div className="p-2">
                      <h3 className="text-light">Summary</h3>
                    </div>

                    <div className="d-flex justify-content-between p-2">
                      <span>Sub-Total</span>
                      <span>
                        ₹ {calculateTotalCoursePrice(cartData).toFixed(2)}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                      <span>Tax-Total</span>
                      <span>₹ {calculateTotalTaxCharge(cartData).toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                      <span>Delivery-Total</span>
                      <span>
                        ₹ 50.00
                        {/* {calculateTotalDeliveryCharge(cartData).toFixed(2)} */}
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between p-2  total-amount">
                      <h5>Total Amount</h5>
                      <h5>₹ {cartData && Number(cartData.total) + 50.00}</h5>
                    </div>
                  </div>

                  <div className="bg-white pg-delivery-add mt-3 p-1">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6>Delivery Address</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="me-2">
                          {saved_Address_List && findDefaultAddress(saved_Address_List)?.city}
                        </p>
                        <AddressModal2 AddressList={saved_Address_List} changeSelectAddress={handleSelectAddress} deleteAddress={handleDeleteAddress} />
                      </div>
                    </div>
                  </div>
                  <div className="text-center card_btn">
                    <button onClick={handlePlaceOrder} className="w-100">Place Order</button>
                  </div>


                  {/* <button className='change-btn' on onClick={() => setShowCart(false)}>Add Address</button> */}

                </div>
              </div>
            </div>
          </section>
          <LinkSend />
          <Footer />
        </>}
    </>
  );
}
