import React from "react";
import "./LandingPage.css";
import galaxylogo from "./images/galaxy-logo.png";
import pglogo from "./images/pg-logo.png";
import videoImg from "./images/video-img.jpg";
import offerImg from "./images/offer-img.png";
import ashishImg from "./images/ashish.png";
import thankyou from "./images/thankyou-gif.gif";
import vedio_app from "../../assets/images/videocourse.jpg";
import useRazorpay from "react-razorpay";
import "owl.carousel";
import { useState } from "react";
import {
  emailRegex,
  jwt_decode,
  resHandler,
  stringToFloat,
  throttle,
} from "../../../helper";
import {
  cityListService,
  couponVerifyService,
  getCouponService,
  getCourse_Detail_Service,
  getFPaymentService,
  sendVerificationOtpService,
  stateListService,
} from "../../services";
import PhoneInput from "react-phone-input-2";
import toast from "react-hot-toast";
import { useEffect } from "react";
import PaymentGatewayModal from "../../components/PaymentGatewayModal/PaymentGatewayModal";

import SweetAlert2 from "react-sweetalert2";
import TestLoading from "../TestLoading/TestLoading";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ThankyouModal from "./ThankyouModal";
import { razorpayGateway } from "../../services/paymentGateways";
import { useRef } from "react";

export default function LandingPage() {
  const [Razorpay] = useRazorpay();
  const selectStateRef = useRef(null);
  const selectCityRef = useRef(null);
  const phoneRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParam, setSearchParam] = useSearchParams();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [courseDetail, setCourseDetail] = useState();
  const [swalProps, setSwalProps] = useState({});
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [seconds, setSeconds] = useState(60); // Initial timer value in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [coupanCode, setCoupanCode] = useState("");
  const [preAppliedCoupon, setPreAppliedCoupon] = useState(false);
  const [couponApplied, setCoupanApplied] = useState(false);
  const [couponFetched, setCouponFetched] = useState(false);
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState();
  const [stateList, setStateList] = useState();
  const [cityList, setCityList] = useState();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [couponError, setCouponError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getCourseDetails(import.meta.env.VITE_COURSEID);
    // getCoupons(import.meta.env.VITE_COURSEID);
    getStateList(101);
  }, []);

  // const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-MJXVRNVM1V`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-MJXVRNVM1V');

    return () => {
      // Clean up function if necessary
    };
  }, []);

  //   return null; // This component doesn't render anything to the DOM
  // };

  // useEffect(() =>{
  //   if(coupanCode && coupanCode.length >= 8){
  //     const data = {
  //       coupon : coupanCode,
  //       course_id : import.meta.env.VITE_COURSEID
  //     }
  //     applyCoupan(data)
  //   }
  // },[coupanCode])
  const startTimer = () => {
    setTimerActive(true);
    setSeconds(60); // Reset the timer to the initial value
  };

  useEffect(() => {
    if (searchParam.get("utm_content") && typeof searchParam !== "undefined") {
      setCoupanCode(searchParam.get("utm_content"));
      const data = {
        coupon: searchParam.get("utm_content"),
        course_id: import.meta.env.VITE_COURSEID,
      };
      setPreAppliedCoupon(false);
      const value = applyCoupan(data);
      setCouponFetched(value);
    } else {
      setCoupanCode(null);
    }
  }, [searchParam]);

  useEffect(() => {
    let intervalId;
    if (timerActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          setTimerActive(false);
          clearInterval(intervalId);
        }
      }, 1000);
    }

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds, timerActive]);

  const handleName = (e) => {
    setNameError(false);
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^A-Za-z\s'-.]/g, "");
    setName(sanitizedValue);
  };
  const handlePhoneChange = (e) => {
    setPhoneError(false);
    const value = e.target.value;
    // const numericValue = inputValue.replace(/\D/g, '');
    const sanitizedValue = value.replace(/\D/g, "");

    // const phoneNumberWithoutCountry = value.replace(`${country.dialCode}`, '');
    setPhoneNumber(sanitizedValue);
    // setCountryCode(country.dialCode)
    if (sanitizedValue.length == 10) {
      if (sanitizedValue != "0000000000") {
        sendOtp(sanitizedValue);
      } else {
        setPhoneError(true);
      }
    }
  };

  const sendOtp = async (value) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", value);
    formData.append("resend", 0);
    formData.append("is_promotional", 1);
    formData.append("is_registration", 1);
    formData.append("device_id", "WEB");
    formData.append("device_token", "WEB");
    formData.append("email", email);
    formData.append("course_id", import.meta.env.VITE_COURSEID);
    formData.append("coupon_code", coupanCode ? coupanCode : "");
    formData.append("app_id", import.meta.env.VITE_APP_ID);
    // setState("");
    // setCity("");
    // formData.append('c_code', countryCode)
    // formData.append('otp',otp);
    await sendVerificationOtpService(formData).then((res) => {
      const { status, data, message } = resHandler(res);

      // console.log(res, "data");
      if (status) {

        if (data) {
          // setName(data.name)
          if (data.state && data.state.length) {
            const stateId = stateList.find((item) => item.name == data.state);
            setTimeout(() => {
              if (stateId) {
                setState(stateId.id);
                setCity(data.city);
                getcity(stateId.id, data.city);
              }
            }, 1000);
          }
        }
        message && toast.success(message);
        setOtpSent(true);
        startTimer();
      }
    });
  };

  const getStateList = async (params) => {
    const formData = new FormData();
    formData.append("country_id", params);
    await stateListService(formData)
      .then((res) => {
        let { data, status, message } = resHandler(res);
        status && setStateList(data);
      })
      .catch((err) => console.log(err));
  };
  const getcity = async (params, city) => {
    const formData = new FormData();
    formData.append("state_id", params);
    await cityListService(formData)
      .then((res) => {
        let { data, status, message } = resHandler(res);
        status && setCityList(data);
        if (city) {
          const cityId = data.find(
            (item) => item.name == city
          );
          console.log(cityId, "city")

          setCity(cityId.id);
        }
      })
      .catch((err) => console.log(err));
  };

  const findStateName = (id) => {
    return stateList.find((item) => item.id == id);
  };
  const findCityName = (id) => {
    return cityList.find((item) => item.id == id);
  };

  const handleState = (e) => {
    setState(e.target.value);
    getcity(e.target.value);
    setStateError(false);
  };

  const handleCity = (e) => {
    const value = JSON.parse(e.target.value);
    setCity(e.target.value);
    setCityError(false);
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", phoneNumber);
    formData.append("resend", 1);
    formData.append("is_registration", 1);
    formData.append("is_promotional", 1);
    formData.append("course_id", import.meta.env.VITE_COURSEID);
    formData.append("coupon_code", coupanCode ? coupanCode : "");
    formData.append("app_id", import.meta.env.VITE_APP_ID);
    // formData.append('otp',otp);
    await sendVerificationOtpService(formData)
      .then((res) => {
        const { status, data, message } = resHandler(res);

        if (status) {
          toast.success(message);
          startTimer();
        }
      })
      .catch((err) => console.log(err));
  };

  const getCourseDetails = async (value) => {
    const formData = new FormData();
    formData.append("course_id", value);
    formData.append("parent_id", value);
    await getCourse_Detail_Service(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        console.log(data.course_detail, "courseD");
        status && setCourseDetail(data.course_detail);
        // status && setTimeout(() =>{
        //   setOpenModal(true)
        // }, 1000);
        !status && setPaymentLoading(false);
        !status && message && toast.error(message);
      })
      .catch((err) => console.log(err));
  };

  const getCoupons = async (value) => {
    const formData = new FormData();
    formData.append("course_id", value);
    formData.append("parent_id", "");
    await getCouponService(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        //  const coupon = data.find(coupon => coupon.coupon.target_type === "2");
        //  const coupon_detail = {
        //   coupon : coupon.coupon.coupon_tilte,
        //   course_id : coupon.id
        //  }
        //  if(status && coupon){
        //   applyCoupan(coupon_detail);
        //   setPreAppliedCoupon(true);
        //  }
      })
      .catch((err) => console.log(err));
  };

  const applyCoupan = async (value) => {
    const formData = new FormData();
    setCouponError(false);
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

  const handleSubmit = async () => {
    const closeButton = document.querySelector('[data-bs-dismiss="modal"]');

    setNameError(false);
    setPhoneError(false);
    setEmailError(false);
    setOtpError(false);
    if (
      phoneNumber.length >= 10 &&
      emailRegex.test(email) &&
      otp.length >= 6 &&
      name.trim().length >= 3 &&
      city.length &&
      state.length
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("mobile", phoneNumber);
      formData.append("resend", 0);
      formData.append("is_promotional", 1);
      formData.append("is_registration", 1);
      formData.append("device_id", "WEB");
      city && formData.append("city", findCityName(city)?.name);
      state && formData.append("state", findStateName(state)?.name);
      formData.append("device_token", "WEB");
      formData.append("email", email);
      formData.append("course_id", import.meta.env.VITE_COURSEID);
      formData.append("coupon_code", coupanCode ? coupanCode : "");
      formData.append("app_id", import.meta.env.VITE_APP_ID);
      // formData.append('c_code', countryCode)
      formData.append("otp", otp);
      await sendVerificationOtpService(formData)
        .then((res) => {
          const { status, data, message } = resHandler(res);
          !status && message && toast.error(message);
          status && localStorage.setItem("jwt", data.jwt);
          !status && message && setOtp("");
          // status && message && setOtpSent(false);
          status && jwt_decode(data.jwt);

          status &&
            setTimeout(() => {
              setPaymentLoading(true);
              // setTimeout(() =>{
              setOpenModal(true);
              // }, 1000);
              // getCourseDetails(import.meta.env.VITE_COURSEID);
              closeButton && closeButton.click();
            }, 500);

          //   status && toast.success(message);
          //   status && setOtpVerfied(true);;
          //   !status && message &&( message == 'OTP expired') && location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      if (phoneNumber.length < 10) {
        setPhoneError(true);
      }
      if (!email.length || !emailRegex.test(email)) {
        setEmailError(true);
      }
      if (otp.length < 6) {
        otpSent && setOtpError(true);
      }
      if (name.trim().length < 3) {
        setNameError(true);
      }
      if (!city.length) {
        setCityError(true);
      }
      if (!state.length) {
        setStateError(true);
      }
    }
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js";
    script.async = true;
    // script.src =
    //   "https://checkout.razorpay.com/v1/checkout.js";
    // script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSelectedPaymentGateway = (value) => {
    // console.log(value, "selectedPayemtn");
    // console.log(value, "value");
    handlePayment(value);
    // console.log(e.target.value)
    // setSelectedPaymentGateway(e.target.value)
  };
  const handleOTP = (e) => {
    setOtpError(false);
    const numericValue = e.target.value.replace(/\D/g, "");
    setOtp(numericValue);
  };
  const handlePayment = async (value) => {

    setPaymentLoading(true);
    const formData = new FormData();
    formData.append("type", 1);
    formData.append("course_id", import.meta.env.VITE_COURSEID);
    formData.append("is_promotional", 1);
    {
      couponApplied
        ? formData.append("course_price", stringToFloat(couponDiscount.mrp))
        : formData.append("course_price", stringToFloat(courseDetail.mrp));
    }
    {
      couponApplied
        ? formData.append("tax", stringToFloat(couponDiscount.tax))
        : formData.append("tax", stringToFloat(courseDetail.tax));
    }
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
        // console.log(data)
        let key = value.mid;
        if (status) {
          alert('Open Pop Up ON')

          if (value.meta_name == "RZP_DETAIL") {
            // console.log(data, value, key, "key")
            setPaymentLoading(false);
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
                console.log(res, "res");
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
              // alert(response.error.code);
              // alert(response.error.description);
              // alert(response.error.source);
              // alert(response.error.step);
              // alert(response.error.reason);
              // alert(response.error.metadata.order_id);
              // alert(response.error.metadata.payment_id);
              //               razorpay_order_id
              // :
              // "order_MulbYNln4GNoPh"
              // razorpay_payment_id
              // :
              // "pay_MulcQNOe63Z34A"
              // razorpay_signature
              // :
              alert('run')

            });
            rzp1.open();
          }
          if (value.meta_name == "EASEBUZZ_DETAIL") {
            paymentGateWay(data.txnToken, key);
            alert('try')

          }
        }
        // status &&
        !status && localStorage.clear();
        !status && message && toast.error(message);
        !status && setPaymentLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const paymentGateWay = async (acc_key, key) => {
    setPaymentLoading(false);
    var easebuzzCheckout = new window.EasebuzzCheckout(
      key,
      import.meta.env.VITE_TYPE
    );
    var options = {
      access_key: acc_key, // access key received via Initiate Payment
      onResponse: (response) => {
        // post_transaction_id
        const order_details = {
          txnid: response.txnid,
          easepayid: response.easepayid,
          pay_via: 9,
        };
        let status = response.status == "success" ? 1 : 0;
        payemntConfirmation(status, order_details);
      },
      theme: "#123456", // color hex
    };

    await easebuzzCheckout.initiatePayment(options);
    // console.log(JSON.stringify(selectedPaymentGateway))
  };

  const payemntConfirmation = (status, data) => {
    // let status = response.status == "success" ? 1 : 0;
    const closeButton = document.querySelector('[data-bs-dismiss="modal"]');
    closeButton && closeButton.click();
    const modalTrigger = document.querySelector('[data-bs-target="#buynow"]');
    setPaymentLoading(true);
    const formData = new FormData();
    formData.append("type", 2);
    formData.append("course_id", import.meta.env.VITE_COURSEID);
    {
      couponApplied
        ? formData.append("course_price", stringToFloat(couponDiscount.mrp))
        : formData.append("course_price", stringToFloat(courseDetail.mrp));
    }
    {
      couponApplied
        ? formData.append("tax", stringToFloat(couponDiscount.tax))
        : formData.append("tax", stringToFloat(courseDetail.tax));
    }
    formData.append("pay_via", data.pay_via);
    formData.append(
      "coupon_applied",
      couponApplied ? couponDiscount.coupon.id : 0
    );
    formData.append("pre_transaction_id", data.txnid);
    formData.append("transaction_status", status);
    formData.append("post_transaction_id", data.payid);
    formData.append("is_promotional", 1);
    getFPaymentService(formData)
      .then((res) => {
        let { data, status, message } = resHandler(res);
        console.log(res.data, "payment confirm");
        setPaymentLoading(false);
        if (status) {

          setName("");
          setPhoneNumber("");
          setEmail("");
          setState("");
          setCity("");
          setOtp("");

          // openButton && openButton.click()
          setOtpSent(false);
          setIsOpenVideoModal(true);
        } else {
          modalTrigger && modalTrigger.click();

          //         const modal = new bootstrap.Modal(openButton);
          // modal.show();
        }
        localStorage.clear();
        !status && message && toast.error("Payment Failed!, Please try again!");

        // status &&
        //   setSwalProps({
        //     show: true,
        //     title:
        //       "Your course details will be sent directly to your email id. Don't forget to check your spam folder as well.",
        //     icon: "success",
        //   });
        //  status && sendDataToParent(order_details)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
    });
  }, []);
  useEffect(() => {
    $(".testi-carousel").owlCarousel({
      loop: true,
      dots: true,
      responsiveClass: true,
      autoplayTimeout: 4000,
      smartSpeed: 800,
      nav: true,
      margin: 10,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }, []);
  useEffect(() => {
    // Simulate an async operation, e.g., fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const handleOpenVideo = () => {
    setIsOpenVideoModal(true);
  };

  const handleStateFocus = () => {
    // console.log("first", selectStateRef);
    // document.getElementById('state').click();
    selectStateRef.current.click();
  };
  return (
    <>
      <SweetAlert2
        {...swalProps}
        onConfirm={(result) => {
          location.reload();
          localStorage.clear();
        }}
      />
      {paymentLoading && <TestLoading />}
      {openModal && (
        <PaymentGatewayModal
          isOpen={openModal}
          isClose={() => {
            setOpenModal(false);
            setPaymentLoading(false);
            var enrollButton = document.getElementById('enrollnow');
            if (enrollButton) {
              enrollButton.click();
            }
          }}
          selectedGateway={handleSelectedPaymentGateway}
        />
      )}
      <div></div>
      <ThankyouModal
        ModalOpen={isOpenVideoModal}
        CloseModal={() => {
          setIsOpenVideoModal(false);
          navigate("/");
        }}
      />
      <section className="page-section-1 pb-4">
        <div className="page-header shadow bg-black">
          <div className="container">
            <div className="header-title p-1">
              <img src={galaxylogo} alt="Physics Galaxy" />
            </div>
          </div>
        </div>

        <div className="mt-5 page-section-1-logo-effect">
          <div className="container">
            <div className="p-sec-1-clr">
              <div className="row">
                <div className="col-lg-6">
                  <div className="leftside-col6 ">
                    <div className="page-logo ">
                      <img src={pglogo} alt="Physics Galaxy Logo" />
                    </div>
                    <div className="leftside-heading pb-2">
                      <h2>
                        LEARN HOW TO STUDY EFFECTIVELY FOR NEET & JEE
                        EXAMINATIONS
                      </h2>
                    </div>
                    <div className="leftside-heading">
                      <p>
                        This video course is designed to allow the students to
                        maximize learning and improve their preparation for the
                        NEET & JEE examinations.
                      </p>
                    </div>

                    <div className="leftside-btn">
                      <a
                        type="button"
                        className="btn btn-lg btn-enroll "
                        data-bs-toggle="modal"
                        data-bs-target="#buynow"
                        id='enrollnow'
                      //data-bs-target="#thankyou"
                      >
                        Enroll NOW
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className=" rightside-img mt-4">
                    <div>
                      <iframe
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/6XtZUBPNlf4?si=cVPZxOQxm1iTI6Ga"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#video1">
                      <img src={videoImg} className="w-100" />

                    </a> */}
                    {/* <!-- <p className=" p-1">text</p> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="buynow"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content popupform-content">
              <div className="d-flex justify-content-between popupform-btn-close">
                <div className="headingfrm">
                  <h5>PHYSICS GALAXY - Mentorship Course</h5>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="modal-body popupform-body">
                <form>
                  <div className="row mb-1">
                    <label htmlFor="name" className=" col-form-label">
                      Name<span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <input
                        type="text"
                        pattern="^[A-Za-z\s]+$"
                        value={name}
                        onChange={handleName}
                        maxLength={30}
                        className="form-control shadow-none"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                      {nameError && (
                        <p className="landingperror">
                          {" "}
                          Please enter valid name
                          {/* Name field must contain 3 to 30 characters. */}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-1">
                    <label htmlFor="email" className=" col-form-label">
                      Email ID<span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                          setEmailError(false);
                          setEmail(e.target.value);
                        }}
                        className="form-control shadow-none"
                        id="email"
                        placeholder="Enter Your Email ID"
                      />
                      {emailError && (
                        <p className="landingperror">
                          {" "}
                          Please enter valid email id
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <label htmlFor="phone" className="col-form-label">
                        Mobile No.<span className="text-danger">*</span>
                      </label>
                      {otpSent && (
                        <div className="row">
                          <div className="d-flex justify-content-end align-items-center">
                            <button
                              className="forgetpassword"
                              type="button"
                              onClick={() => {
                                setOtpSent(false);
                                setOtp("");
                                setCity('');
                                setState('')
                                phoneRef.current && phoneRef.current.focus();
                              }}
                            >
                              <i className="fas fa-edit"></i>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="">
                      <input
                        type="text"
                        ref={phoneRef}
                        className="form-control shadow-none"
                        id="phone"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        disabled={otpSent}
                        placeholder="Mobile No."
                      />
                      {phoneError && (
                        <p className="landingperror">
                          {" "}
                          Please enter valid mobile number
                        </p>
                      )}
                    </div>
                  </div>

                  {otpSent && (
                    <div className="row">
                      <div className="">
                        <label htmlFor="otp-verify" className="col-form-label">
                          OTP<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="otp-verify"
                          maxLength={6}
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => handleOTP(e)}
                        />
                        {otpError && (
                          <p className="landingperror">
                            {" "}
                            Please enter valid OTP
                          </p>
                        )}
                      </div>
                      <div className="d-flex justify-content-end align-items-center mt-2">
                        {timerActive ? (
                          <p>Resend OTP in : {seconds} secs</p>
                        ) : (
                          <button
                            className="forgetpassword"
                            type="button"
                            onClick={throttle(handleResendOtp, 2000)}
                          >
                            Resend OTP
                          </button>
                        )}
                      </div>
                      <div className="d-flex">
                        <div className="col-lg-6 slctstate">
                          <div className="row mb-1">
                            <label htmlFor="state" className="col-form-label">
                              State<span className="text-danger">*</span>
                            </label>
                            <div className="">
                              <select
                                id="state"
                                name="state"
                                className="form-control shadow-none"
                                value={state}
                                onFocus={handleStateFocus}
                                ref={selectStateRef}
                                onChange={handleState}
                              >
                                <option value="">Select State</option>
                                {stateList &&
                                  stateList.map((item, i) => {
                                    return (
                                      <option value={item.id} key={i}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                              </select>
                              {stateError && (
                                <p className="landingperror">
                                  Please select state
                                </p>
                              )}{" "}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="row mb-1">
                            <label htmlFor="email" className=" col-form-label">
                              City<span className="text-danger">*</span>
                            </label>
                            <div className="">
                              <select
                                id="city"
                                name="city"
                                className="form-control shadow-none"
                                value={city}
                                onChange={handleCity}
                              >
                                <option value="" disabled>
                                  Select City
                                </option>
                                {cityList &&
                                  cityList.map((item, i) => {
                                    return (
                                      <option value={item.id} key={i}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                              </select>
                              {cityError && (
                                <p className="landingperror">
                                  Please select city
                                </p>
                              )}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {coupanCode != null && (
                    <div className="row mb-3">
                      <label htmlFor="refrcode" className="col-form-label">
                        Coupon code
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control inputformcnt shadow-none"
                          aria-describedby="button-addon2"
                          placeholder="Enter Your Coupon Code"
                          onChange={(e) => {
                            setCoupanCode(e.target.value);
                            setCoupanApplied(false);
                          }}
                          value={coupanCode}
                          disabled={couponFetched}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          disabled={couponFetched}
                          onClick={() =>
                            applyCoupan({
                              coupon: coupanCode,
                              course_id: import.meta.env.VITE_COURSEID,
                            })
                          }
                        >
                          {couponFetched || couponApplied ? "Applied" : "Apply"}
                        </button>
                      </div>
                      <div>
                        {couponError && (
                          <p className="landingperror">
                            {" "}
                            Please enter coupon code
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="totlpriceee mt-2 mb-4">
                    <div className="d-flex justify-content-between">
                      Course Price :{" "}
                      {courseDetail && courseDetail.course_sp == 0 ? (
                        <span>{`₹${Number(courseDetail.mrp) + Number(courseDetail.tax)
                          }/-`}</span>
                      ) : (
                        <span
                          className={`text-muted ms-2 ${!couponApplied &&
                            courseDetail &&
                            Number(courseDetail.course_sp) !=
                            Number(courseDetail.mrp) +
                            Number(courseDetail.tax) &&
                            "last-price"
                            }`}
                        >
                          {couponDiscount && courseDetail
                            ? `₹${Number(courseDetail.mrp) +
                            Number(courseDetail.tax)
                            }/-`
                            : courseDetail && `₹${courseDetail.course_sp}/-`}
                        </span>
                      )}
                    </div>
                    {couponApplied && (
                      <div className="d-flex justify-content-between">
                        Coupon Discount:{" "}
                        <span className="text-dark current-price">
                          {couponDiscount && `-₹${couponDiscount.discount}/-`}
                        </span>
                      </div>
                    )}
                    {/*  Number(courseDetail.course_sp) != Number(courseDetail.mrp) + Number(courseDetail.tax) && */}
                    {courseDetail && courseDetail.course_sp != 0 && (
                      <div className="d-flex justify-content-between">
                        {Number(courseDetail.course_sp) !=
                          Number(courseDetail.mrp) + Number(courseDetail.tax) ? (
                          <>
                            {couponApplied ? (
                              <p>
                                Final Price:{" "}
                                <span className="gstp">(Inclusive of GST)</span>
                              </p>
                            ) : (
                              <p>
                                Offer Price:{" "}
                                <span className="gstp">(Inclusive of GST)</span>
                              </p>
                            )}
                            <span className="text-dark current-price">
                              {couponApplied && couponDiscount
                                ? `₹${Number(couponDiscount.mrp) +
                                Number(couponDiscount.tax)
                                }/-`
                                : `₹${Number(courseDetail.mrp) +
                                Number(courseDetail.tax)
                                }/-`}
                            </span>
                          </>
                        ) : (
                          couponDiscount &&
                          Number(courseDetail.course_sp) !=
                          Number(couponDiscount.mrp) +
                          Number(couponDiscount.tax) && (
                            <>
                              {couponApplied ? (
                                <p>
                                  Final Price:{" "}
                                  <span className="gstp">
                                    (Inclusive of GST)
                                  </span>
                                </p>
                              ) : (
                                <p>
                                  Offer Price:{" "}
                                  <span className="gstp">
                                    (Inclusive of GST)
                                  </span>
                                </p>
                              )}
                              <span className="text-dark current-price">
                                {couponApplied && couponDiscount
                                  ? `₹${Number(couponDiscount.mrp) +
                                  Number(couponDiscount.tax)
                                  }/-`
                                  : `₹${Number(courseDetail.mrp) +
                                  Number(courseDetail.tax)
                                  }/-`}
                              </span>
                            </>
                          )
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={throttle(handleSubmit, 2000)}
                      className="btn  btn-enrollnw w-100"
                    // onClick={handleOpenVideo}
                    >
                      Enroll Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Video Modal --> */}

        <div className="modal" tabIndex="-1" id="video1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content video-modal-content">
              <div className="modal-body">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/6XtZUBPNlf4?si=cVPZxOQxm1iTI6Ga"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                type="button"
                className="btn-close p-3 shadow-none btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>

        {/* <!-- mobile and tab view --> */}
        <div className="mt-4 page-section-1-mobile">
          <div className="container">
            <div className="p-sec-mob">
              <div className="pg-logo-mb text-center mb-4">
                <img src={pglogo} alt="Physics Galaxy Logo" className="w-50" />
              </div>
              <div className=" rightside-img mt-4 mb-4">
                <div>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/6XtZUBPNlf4?si=cVPZxOQxm1iTI6Ga"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* <a href="#"  data-bs-toggle="modal" data-bs-target="#video1">
                  {" "}
                  <img src={videoImg} className="w-100"  />
                </a> */}
                {/* <!-- <p className=" p-1">text</p> --> */}
              </div>

              <div className="pg-sec-mb-text ">
                <div className="leftside-heading pb-2 text-center">
                  <h2>
                    LEARN HOW TO STUDY EFFECTIVELY FOR NEET & JEE EXAMINATIONS
                  </h2>
                </div>
                <div className="leftside-heading text-center">
                  <p>
                    This video course is designed to allow the students to
                    maximize learning and improve their preparation for the NEET
                    & JEE examinations.
                  </p>
                </div>

                <div className="leftside-btn">
                  <a
                    type="button"
                    href="#"
                    className="btn btn-lg btn-enroll "
                    data-bs-toggle="modal"
                    data-bs-target="#buynow"
                  >
                    ENROLL NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className=" offer">
                <div className="card offer-card">
                  <div className="row g-0">
                    <div className="col-xl-6">
                      <div className="p-3">
                        <img
                          src={offerImg}
                          data-bs-toggle="modal"
                          data-bs-target="#buynow"
                          className="img-fluid rounded-start w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-3 offer-card-body">
                        <p className="card-text">
                          <i
                            className="fa fa-check me-2 text-warning"
                            aria-hidden="true"
                          ></i>
                          Pre-Recorded Video Course
                        </p>
                        <p className="card-text">
                          <i
                            className="fa fa-check me-2 text-warning"
                            aria-hidden="true"
                          ></i>
                          Self Evaluation Chart For Each Episode
                        </p>
                        <p className="card-text">
                          <i
                            className="fa fa-check me-2 text-warning"
                            aria-hidden="true"
                          ></i>
                          5 Masterclass by Ashish Arora Sir
                        </p>
                        <p className="card-text">
                          <i
                            className="fa fa-check me-2 text-warning"
                            aria-hidden="true"
                          ></i>
                          Access To Bonus Content
                        </p>
                        <p className="card-text">
                          <i
                            className="fa fa-check me-2 text-warning"
                            aria-hidden="true"
                          ></i>
                          Plan Validity is 12 Months
                        </p>
                        <p className="card-text">
                          <i
                            className="fa fa-check me-2 text-warning"
                            aria-hidden="true"
                          ></i>
                          2 Complimentary Video Courses
                        </p>
                        <p className="mb-0 card-text d-flex">
                          <i
                            className="fa fa-star me-2 text-warning"
                            aria-hidden="true"
                          ></i>{" "}
                          Purchase this course and enjoy exclusive discounts on
                          every future purchase
                        </p>
                        <div className="leftside-btn mt-3">
                          <a
                            type="button"
                            href="#"
                            className="btn btn-lg btn-enroll "
                            data-bs-toggle="modal"
                            data-bs-target="#buynow"
                          >
                            Enroll NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- thank you modal --> */}
        <div
          className="modal fade"
          id="thankyou"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content thankyou-content">
              <div className="text-end popupform-btn-close">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body thankyou-body">
                <div className="row d-flex align-items-center justify-content-center">
                  {/* <!-- Left side content --> */}
                  <div className="col-lg-7 col-md-7">
                    <div className="video_app_content">
                      <img src={thankyou} className="w-50" />

                      <h3 className="text-black">Thank You! </h3>
                      <p>
                        Your course details will be sent directly to your email
                        id. Don't forget to check your spam folder as well.
                      </p>
                      <h2>Videos available on app</h2>
                      <p>
                        You can watch on Physics Galaxy App only so download app
                        to kickstart your exam preparation with the Dream Team
                      </p>
                      <h5>Anytime, Any where Access to Learning</h5>
                      <h4>Available on all platforms</h4>
                      <div className="row">
                        <div className="col-md-10">
                          <div className="downl_btn marg_con d-flex justify-content-between  text-center">
                            <a
                              onClick={() =>
                                window.open(
                                  "https://play.google.com/store/search?q=physics+galaxy&c=apps&hl=en-IN&pli=1"
                                )
                              }
                              target="_blank"
                              className="app-img p-1"
                            >
                              <img
                                src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-android-app.png"
                                alt="app-edu-android-app"
                                className="img-fluid"
                              />
                            </a>
                            <a
                              onClick={() =>
                                window.open(
                                  "https://d2qxo9rqhf0w5j.cloudfront.net/427/admin_v1/test_management/question_bank/47415510_Physics%20Galaxy.exe"
                                )
                              }
                              target="_blank"
                              className="app-img p-1"
                            >
                              <img
                                src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                                alt="app-edu-windows-app"
                                className="img-fluid"
                              />
                            </a>
                            {/* <a target="_blank" className="app-img p-1">
                                            <img
                                                src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                                                alt="app-edu-windows-app"
                                                className="img-fluid"
                                            />
                                        </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right side image --> */}
                  <div className="col-lg-5 col-md-5 mx-auto">
                    <div className="video_app_image text-center">
                      <img src={vedio_app} alt="app_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-4 page-section-1-card">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-file-video-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      PRE-RECORDED
                      <br />
                      VIDEOS
                    </span>
                  </h3>
                  <p>Get immediate access to the full course upon purchase.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-hourglass-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      INSIGHTFUL
                      <br />
                      EPISODES
                    </span>
                  </h3>
                  <p>
                    Embark on a journey toward excellence in NEET & JEE
                    preparation through these insightful videos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-th-list" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      AFFORDABLE
                      <br />
                      COURSES
                    </span>
                  </h3>
                  <p>
                    Education is everyone’s right, which is why our video course
                    is available at an affordable price.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      FREE VIDEO
                      <br />
                      COURSE
                    </span>
                  </h3>
                  <p>
                    Access two additional video courses worth INR 399 for free
                    with the purchase of this course.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-leanpub" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      FLEXIBLE
                      <br />
                      LEARNING
                    </span>
                  </h3>
                  <p>
                    Enroll in a pre-recorded video course and watch it anytime
                    or anywhere from any device (mobile, laptop, and tablet).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-television" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      HIGH-QUALITY
                      <br />
                      VIDEOS
                    </span>
                  </h3>
                  <p>
                    Make learning interactive and engaging with high-quality
                    videos available in this course.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      LEARN AND
                      <br />
                      RE-LEARN
                    </span>
                  </h3>
                  <p>
                    Unlike offline learning, a student can play, pause, rewind
                    and replay our video course at their own pace.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <div className="page-card-effct-sec">
                <div className="pt-4 pb-2  card-icons">
                  <div className="font-icons ">
                    <i className="fa fa-window-restore" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-3 card-icon-heading">
                  <h3>
                    <span>
                      100% SATISFACTION
                      <br />
                      GUARANTEE
                    </span>
                  </h3>
                  <p>
                    Your satisfaction is paramount to us, and we are committed
                    to delivering on that promise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-2 py-4">
        <div className="container">
          <div className="mb-2">
            <div className="page-sect-2-title text-center">
              <h1>THIS VIDEO COURSE IS FOR YOU IF YOU</h1>
            </div>
            <div className="smallline mx-auto mb-3"></div>
          </div>

          <div className="mt-4">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course">
                  <div className="d-flex">
                    <span>
                      <i
                        className="fa fa-play-circle-o mt-1 me-2"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p className="mb-0">
                      Unable to make a <b>proper learning strategy</b> for the
                      JEE & NEET examination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course">
                  <div className="d-flex">
                    <span>
                      <i
                        className="fa fa-play-circle-o mt-1 me-2"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p className="mb-0">
                      Struggle to crack the JEE & NEET examination due to{" "}
                      <b>lack of time management</b>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course">
                  <div className="d-flex">
                    <span>
                      <i
                        className="fa fa-play-circle-o mt-1 me-2"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p className="mb-0">
                      Willing to get <b>valuable tips and tricks</b> to go on
                      the <b>correct way to study</b>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course">
                  <div className="d-flex">
                    <span>
                      <i
                        className="fa fa-play-circle-o mt-1 me-2"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p className="mb-0">
                      Wonder how to{" "}
                      <b>
                        cover the vast syllabus of JEE & NEET in a limited time
                      </b>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course">
                  <div className="d-flex">
                    <span>
                      <i
                        className="fa fa-play-circle-o mt-1 me-2"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p className="mb-0">
                      Do not want to study for long hours{" "}
                      <b>without getting on-time and fruitful results</b>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course">
                  <div className="d-flex">
                    <span>
                      <i
                        className="fa fa-play-circle-o mt-1 me-2"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p className="mb-0">
                      Don’t have the right guidance to show you how you{" "}
                      <b>can ace the competitive exams</b>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="row">
              <div className="">
                <div className="page-sec-2-card">
                  <div className="page-sec-2-card-text text-center  p-4">
                    <h3>
                      {" "}
                      Is there a connection between you and any of the
                      descriptions mentioned earlier?
                    </h3>
                    <p>
                      This mentorship video course is designed for you so that
                      you can unlock your complete learning potential and
                      prepare for the JEE & NEET exams!
                    </p>
                  </div>
                </div>

                <div className="page-sec-2-card-btn mt-5 text-center">
                  <a
                    type="button"
                    href="#"
                    className="btn btn-lg btn-enroll "
                    data-bs-toggle="modal"
                    data-bs-target="#buynow"
                  >
                    ENROLL NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-3 py-4">
        <div className="container">
          <div className="page-sec-3-text text-center">
            <h3 className="pb-3">
              Maximize your learning with an expert-led video course designed
              for students
            </h3>
            <h2 className="pb-3 animate-charcter">
              LEAVE PROCRASTINATION
              <br />
              LEAVE STRESS
              <br />
              LEAVE OVERTHINKING
            </h2>
            <h3>
              Enhance your goal of preparing for the NEET & JEE Exam with video
              course
            </h3>
          </div>
        </div>
      </section>

      <section className="page-section-4 py-4">
        <div className="container">
          <div>
            <div className="page-sect-2-title text-center">
              <h1>EXPLORE WHAT’S INSIDE THIS VIDEO COURSE</h1>
            </div>
            <div className="smallline mx-auto mb-3"></div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">ORIENTATION</div>
                    </div>
                  </div>

                  <p>
                    Hello, and a warm welcome to our mentorship course! To
                    begin, we'll address common areas of confusion that students
                    often encounter while preparing for NEET & JEE exams.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">HOW TO START</div>
                    </div>
                  </div>

                  <p>
                    Get valuable tips to explore to create an optimal study
                    environment that helps you level up your preparation. Get
                    started with the quality study materials for NEET & JEE
                    preparation and don’t forget to resolve your doubts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">
                        STRONG FOUNDATION
                      </div>
                    </div>
                  </div>

                  <p>
                    A strong foundation is always necessary to build anyone’s
                    career and we have also laid down some major points using
                    which a student can build a proper strategy so that he/she
                    can start walking towards a bright future and crack the JEE
                    & NEET exam.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">
                        CLASS FOLLOWING
                      </div>
                    </div>
                  </div>

                  <p>
                    Our goal is to help the students develop a constructive and
                    effective study method.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">
                        RESOURCE MANAGEMENT
                      </div>
                    </div>
                  </div>

                  <p>
                    Effectively managing study resources is crucial for
                    nurturing a student's mindset during JEE and NEET exam
                    preparation, as it directly contributes to their growth and
                    success.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">
                        Effective Notes Making
                      </div>
                    </div>
                  </div>

                  <p>
                    Making notes is the key that will help you clear the
                    competitive exams with flying colours. It’ll sharpen your
                    memory so you can retain the important concepts during the
                    day of the exam.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">
                        STRATEGIC PRACTICE IS THE KEY
                      </div>
                    </div>
                  </div>

                  <p>
                    Students can ensure their success in exams by continuous
                    practice. It helps the student to recall these concepts on
                    the exam day and build confidence that he/she is able to
                    pass the examination.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">
                        KEEPING TRACK & REVISION STRATEGIES
                      </div>
                    </div>
                  </div>

                  <p>
                    You can measure your performance by tracking the time spent
                    to learn and master the crucial study concepts. Moreover,
                    you can also use best-in-class revision strategies to
                    sharpen your knowledge.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  mb-4">
                <div className="page-sec-4-card">
                  <div className="main-box customborder p-2 py-3 ">
                    <div className="row d-flex align-items-center">
                      <div className="col-2  buttonsubpart d-flex justify-content-center align-items-center">
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="col-9 buttonsubpart3">
                        GETTING READY FOR FINALS
                      </div>
                    </div>
                  </div>

                  <p>
                    Prepare yourself to tackle the exam with confidence and
                    determination, gearing up for that final push that will lead
                    you to victory. Revisit your study materials and enhance
                    your understanding by working through past years' question
                    papers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-2 py-4">
        <div className="container">
          <div>
            <div className="page-sect-2-title text-center">
              <h1>THIS VIDEO COURSE WILL HELP YOU TO</h1>
            </div>
            <div className="smallline mx-auto mb-3"></div>
          </div>

          <div className="mt-4">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course span-icons">
                  <div className="d-flex align-items-center">
                    <span className="me-2">
                      <i className="fa fa-leanpub " aria-hidden="true"></i>
                    </span>
                    <p className="mb-0">
                      <b>Level up your learning strategy</b> for the NEET & JEE
                      exams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course span-icons">
                  <div className="d-flex align-items-center">
                    <span className="me-2">
                      <i className="fa fa-book " aria-hidden="true"></i>
                    </span>
                    <p className="mb-0">
                      Begin preparing for the exams through a{" "}
                      <b>proactive approach</b>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course span-icons">
                  <div className="d-flex align-items-center">
                    <span className="me-2">
                      <i className="fa fa-tasks " aria-hidden="true"></i>
                    </span>
                    <p className="mb-0">
                      <b>Prioritize learning tasks</b> and{" "}
                      <b>properly manage the time</b>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course span-icons">
                  <div className="d-flex align-items-center">
                    <span className="me-2">
                      <i
                        className="fa fa-graduation-cap "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p className="mb-0">
                      <b>Reduce the stress</b> you take while studying for
                      exams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course span-icons">
                  <div className="d-flex align-items-center">
                    <span className="me-2">
                      <i className="fa fa-file-text-o " aria-hidden="true"></i>
                    </span>
                    <p className="mb-0">
                      <b>Conquer your fear of failure</b> in the NEET & JEE
                      examinations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="sec-2-page-viso-course span-icons">
                  <div className="d-flex align-items-center">
                    <span className="me-2">
                      <i className="fa fa-adjust " aria-hidden="true"></i>
                    </span>
                    <p className="mb-0">
                      <b>Manage the stress</b> of attempting competitive exams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-5 py-4">
        <div className="container">
          <div>
            <div className="page-sect-2-title text-center">
              <h1>
                MEET YOUR MENTOR
                <br />
                <strong> ASHISH ARORA</strong>
              </h1>
            </div>
            <div className="smallline mx-auto mb-3"></div>
          </div>

          <div className="mt-4">
            <div className="row">
              <div className="col-xl-4">
                <div className="page-sec-5-img mb-4 text-center">
                  <img src={ashishImg} />
                </div>
              </div>
              <div className="col-xl-8">
                <div className="pafe-sec-5-text">
                  <p>
                    Hi, I am Ashish Arora, founder and chief mentor at Physics
                    Galaxy and my goal is to put Physics at the top of students’
                    list of favourite subjects.{" "}
                  </p>

                  <p>
                    {" "}
                    I have taught thousands of students so they can achieve
                    their goal of cracking the NEET & JEE examinations. I was
                    born in Jaipur and started teaching Physics at 18 years of
                    age.{" "}
                  </p>

                  <p>
                    I authored a popular book series in 1998 having 4 volumes
                    which covers Physics and helps students prepare for both
                    academic and competitive examinations.{" "}
                  </p>

                  <p>
                    {" "}
                    Apart from this, I have republished 11 books on Physics and
                    Mental Ability focusing on other competitive exams and many
                    students preparing for JEE & NEET exams are leveraging these
                    books.{" "}
                  </p>

                  <p>
                    {" "}
                    Many of the students I mentored have secured the best AIRs
                    and secured a place in IITs. I know that students are facing
                    a lot of challenges these days when they prepare for the
                    NEET and JEE examinations.{" "}
                  </p>

                  <p>
                    {" "}
                    With my multiple years of experience, I have come up with
                    this mentorship video course in which I’ll teach you
                    how you can elevate your studies and crack NEET and JEE
                    examinations in this competitive age.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 page-section-testimonials text-center">
        <div className="container">
          <div className="row">
            <div>
              <div className="page-sect-2-title text-center">
                <h1>SEE WHAT MY STUDENTS WANT TO SAY</h1>
              </div>
              <div className="smallline mx-auto mb-3"></div>
            </div>

            <div className="col-lg-8 col-md-12 col-12 mx-auto">
              <div className="testi-slide  text-center">
                <div className="owl-carousel owl-theme testi-carousel">
                  <div className="item">
                    <div className="testimonial4_slide1 ">
                      <p>
                        " Sir is a great teacher and mentor of all NEET and JEE
                        students. I followed sir last 1 year. Streetgy and
                        motivation of Aashish sir give me a confidence "
                      </p>
                      <h4>- by Lokesh kumawat (Sikar)</h4>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial4_slide1">
                      <p>
                        " For me Ashish sir is the best and there is no
                        competition of him. Because of him i have made exam
                        memory maps and short notes of all chapters. He is
                        great. Thank you so much sir "{" "}
                      </p>
                      <h4>- by Mayank Dutt (Chhatarpur)</h4>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial4_slide1">
                      <p>
                        " A very very inspiring person as well as a fantastic
                        teacher "
                      </p>
                      <h4>- by Prabhupada sitikantha (Puri)</h4>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial4_slide1">
                      <p>
                        " The man who only thinks about students.
                        Amazing???????? "
                      </p>
                      <h4> - by Ahsan Raza (Purnea)</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 page-section-6">
        <div className="container">
          <div className="row">
            <div>
              <div className="page-sect-2-title text-center">
                <h1>Frequently Asked Questions (FAQs) </h1>
              </div>
              <div className="smallline mx-auto mb-3"></div>
            </div>
            <div className="mt-4">
              <div className="accordion accordion-flush" id="faqlist">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      Q: Why is this mentorship program significant for JEE &
                      NEET preparations?
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse accrdbtn"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: Ashish Arora Sir is the mentor behind 130+ top 100
                      rankers and five national toppers of JEE & NEET. His
                      mentorship program provides invaluable guidance and
                      strategies for success.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      Q: How long will it take to get access to the course?
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: You can expect to receive the video course credentials
                      directly to your inbox within 5-10 minutes after making a
                      purchase. Don't forget to check your promotions/updates
                      tab and spam folder as well. The email will be sent from
                      the email address – admin@physicsgalaxy.com.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      Q: How can Ashish Sir's mentorship program benefit my JEE
                      & NEET preparations?
                    </button>
                  </h2>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: Ashish Sir's program is designed to unlock your full
                      learning potential. With his guidance, You'll navigate
                      every step of your preparation journey effectively.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      Q: Are there any added benefits with this course?
                    </button>
                  </h2>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: Yes, You will also be getting the “Habit Building
                      course” & “Micro Schedular for Self Assessment” bundled
                      for free with this course.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      Q: How do I enroll in Ashish Arora Sir's mentorship
                      program?
                    </button>
                  </h2>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: To enroll, simply click the “Enroll Now” at the top of
                      this page and follow the easy registration process.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      Q: Does this course come with any live guidance from
                      Ashish Arora Sir?
                    </button>
                  </h2>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: Yes, 5 Masterclasses are included in this course, where
                      Ashish Arora Sir will provide guidance to all the
                      students.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      Q: Is there a group that I will join, after purchasing
                      this course?
                    </button>
                  </h2>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: Yes, You will be provided a link for a telegram group
                      after the purchase of this course. In this group, you will
                      be provided with Notifications and Additional Resources
                      related to the course.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      Q: Is this course in Hindi or English?
                    </button>
                  </h2>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: This course will be in Hinglish
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                      Q: What is the validity of this course?
                    </button>
                  </h2>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      A: This course will be valid for the full 12 months after
                      the purchase.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="page-footer shadow bg-black p-2">
          <div className="footer-title text-center p-1 ">
            Copyrights© 2023{" "}
            <Link to="/" target="blank">
              {" "}
              Physics Galaxy
            </Link>
            . All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
