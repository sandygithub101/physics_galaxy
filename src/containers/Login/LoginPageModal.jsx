import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./LoginPageModal.css";
import toast from "react-hot-toast";
import { sendVerificationOtpService, userLoginService } from "../../services";
import { jwt_decode, resHandler, throttle } from "../../../helper";
import useInput from "../../components/useInput";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import OTPInput from 'react-otp-input';
import "react-phone-input-2/lib/style.css";
import VerificationForm from '../../components/VerificationForm/VerificationForm'
import { useEffect } from "react";
import Button5 from "../../components/Buttons/Button5/Button5";
import ChangePassModal from "../Profile/ChangePassModal";
import ForgetPassModal from "./ForgetPassModal";
export default function LoginPageModal({ ModalOpen, CloseModal, OpenModal }) {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  // const {
  //   value: number,
  //   bind: bindPhoneNumber,
  //   setValue: setNumber,
  // } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    setValue: setPassword,
  } = useInput("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState();
  const [showPassword, setShowPassword] = useState(false)
  const [MobileNumberError, setMobileNumberError] = useState(false);
  const [InvalidPatternError, setInvalidPatternError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordlengthError, setPasswordlengthError] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false)
  const navigate = useNavigate();
  const handleSentOtpClick = () => {
    setOtpSent(!otpSent);
  };

  // const [otpSent, setOtpSent] = useState(false);
  const initialTime = 30; // 3 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  // const [otp, setOtp] = useState('')
  const [otpVerified, setOtpVerfied] = useState(false);
  const [mobileError, setMobileError] = useState(false)
  const [otpError, setOtpError] = useState(false);
  const [otpErrorEmpty, setOtpErrorEmpty] = useState(false);
  const invalidPattern = /^0000000000$/;
  const [isOpenForgetModal, setIsOpenForgetModal] = useState(false);
  // const [MobileNumberError, setMobileNumberError] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    let interval;
    if (otpSent) {
      if (!isActive && timeRemaining > 0) {
        interval = setInterval(() => {
          setTimeRemaining(prevTime => prevTime - 1);
        }, 1000);
      }
      else if (timeRemaining === 0) {
        setIsActive(true)
      }
    }

    return () => clearInterval(interval);

  }, [timeRemaining, otpSent]);

  const handlePhoneChange = (value, country) => {
    setMobileError(false)
    const phoneNumberWithoutCountry = value.replace(`${country.dialCode}`, '');
    setPhoneNumber(phoneNumberWithoutCountry);
    setCountryCode(country.dialCode)

  }

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
  }
  const hankdk = (e) => {

    if (e.key === 'Enter') {
      handleLoginSubmit(e)
    }
  }

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const handleSendOtpClick = (e) => {
    e.preventDefault();
    setMobileNumberError(false);
    setInvalidPatternError(false);
    // const phoneNumberWithoutPrefix = phoneNumber ? phoneNumber.slice(2) : '';
    if (!invalidPattern.test(phoneNumber)) {
      if (phoneNumber.length >= 7 && phoneNumber.length <= 15) {
        setMobileError(false);
        setOtpError(false);
        const formData = new FormData();

        formData.append('mobile', phoneNumber)
        formData.append('resend', 0)
        formData.append('is_registration', 1)
        formData.append('c_code', `+${countryCode}`)
        // console.log(countryCode, phoneNumber, "country")
        sendVerificationOtpService(formData).then(res => {
          const { status, data, message } = resHandler(res);
          !status && message && toast.error(message)
          status && toast.success(message);
          status && setOtpSent(!otpSent);
          status && setTimeRemaining(30);
          status && setIsActive(false);
        }).catch(err => console.log(err))
      } else {
        setMobileNumberError(true)
      }
    }
    else {
      setInvalidPatternError(true);
    }
  }
  const handleVerifyOtpClick = async () => {
    setOtpError(false)

    if (otp == undefined) {
      setOtpErrorEmpty(true);
      return false;
    }
    if (otp.length >= 6) {
      const formData = new FormData();
      const phoneNumberWithoutPrefix = phoneNumber.slice(2)
      formData.append('mobile', phoneNumber)
      formData.append('resend', 0)
      formData.append('is_registration', 1)
      formData.append('c_code', countryCode)
      formData.append('otp', otp);
      await sendVerificationOtpService(formData).then(res => {

        const { status, data, message } = resHandler(res);
        !status && message && toast.error(message)
        status && toast.success(message);
        status && setOtpVerfied(true);;
        !status && message && (message == 'OTP expired') && location.reload();
      }).catch(err => console.log(err))
    } else {
      setOtpError(true)
      setOtpErrorEmpty(false)
    }
    // setOtpSent(!otpSent)
    // setOtpVerfied(true);
  }
  const handleResendOtp = async (e) => {
    setOtpError(false)
    setOtpErrorEmpty(false)
    e.preventDefault();
    const formData = new FormData();
    const phoneNumberWithoutPrefix = phoneNumber.slice(2)
    formData.append('mobile', phoneNumber)
    formData.append('resend', 1)
    formData.append('is_registration', 1);
    formData.append('c_code', countryCode)
    // formData.append('otp',otp);
    await sendVerificationOtpService(formData).then(res => {
      const { status, data, message } = resHandler(res);
      !status && message && toast.error(message)
      if (status) {
        toast.success(message);
        setIsActive(false);
        setTimeRemaining(30);
        setOtp();
      }

    }).catch(err => console.log(err))

  }


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMobileNumberError(false);
    setInvalidPatternError(false);
    setPasswordError(false);
    setPasswordlengthError(false);
    // const phoneNumberWithoutPrefix = phoneNumber ? phoneNumber.slice(2) : '';
    if (!invalidPattern.test(phoneNumber)) {
      if (phoneNumber.length > 7 && phoneNumber.length <= 15 && password.length >= 8) {
        const formData = new FormData();
        formData.append("device_id", "0");
        formData.append("mobile", phoneNumber);
        formData.append("is_social", 0);
        formData.append('c_code', countryCode)
        formData.append("password", password);
        // formData.append('device_token', 'd-6FfgbdS0WftqwxNauZ0p:APA91bFj3kXEosEzhuE3ZSDLRiJ3OI-WQyX7XaeZkV5NPatBl9mH7ULQVRJOOCFxL-QUQ9n6KyCYRmOrCjvC6nXbARpHFVWNH_P1UkVMk0J8JcEvtNO1GlaF29SsqKGEFrApakdLokbX');

        await userLoginService(formData)
          .then((res) => {
            let { status, data, message } = resHandler(res);
            status && localStorage.setItem('jwt', data.jwt);
            // status && localStorage.setItem('user_id', data.)
            // const redirectUrl = localStorage.getItem('redirect') 
            status && jwt_decode(data.jwt);
            // status && (redirectUrl ? (window.location.href = redirectUrl) : (window.location.href = '/'));
            // status && navigate('/')
            status && toast.success(message);
            !status && message && toast.error(message);
            // status && localStorage.removeItem('redirect');
            // status && (window.location.href = '/');
            status && setTimeout(() => {
              location.reload();
            }, 1000)
          })
          .catch((err) => console.log(err));
      }
      else {
        if (!password.length) {
          setPasswordError(true)
        }
        else if (password.length < 8) {
          setPasswordlengthError(true)
        }
        if (phoneNumber.length < 7 || phoneNumber.length > 15) {
          setMobileNumberError(true)
        }
      }
    }
    else {
      setInvalidPatternError(true);
    }
    // const data = {};
    // // setOtpSent(!otpSent)
  };

  const handleChangePhoneNumber = (value, country) => {
    // if(!phoneNumber?.length){
    //   setPhoneNumber(91)
    // }
    // else{
    setMobileError(false)
    const phoneNumberWithoutCountry = value.replace(`${country.dialCode}`, '');
    setPhoneNumber(phoneNumberWithoutCountry);
    setCountryCode(country.dialCode);
    // setPhoneNumber(phone)
    // }

  }

  return (
    <>
      {isOpenForgetModal && <ForgetPassModal backToLogin={() => { setIsOpenForgetModal(false); OpenModal(); }} ModalOpen={isOpenForgetModal}
        CloseModal={() => {
          setIsOpenForgetModal(false);
        }} />}
      <Modal isOpen={ModalOpen} onClose={() => { CloseModal(); setIsSignUpModal(false); }}>
        {isSignUpModal ?
          <>
            {otpVerified ? <VerificationForm phoneno={phoneNumber} countryCode={countryCode} otp={otp} /> : <>
              <div className="widthModal">
                <div className="text-center login_content">
                  {/* <div className="d-flex align-items-center justify-content-center "> */}
                  {/* <!-- Left side content --> */}


                  {!otpSent ? <h2 className=" fw-bold">Let’s get started!</h2>
                    :
                    <h2 className=" fw-bold">OTP Verification</h2>}

                  {!otpSent ? <h6 className="text-muted px-3">Signup with your mobile number to get started.</h6>
                    :
                    <h6 className="text-muted">A verification code has been sent to your mobile +91 {phoneNumber}</h6>}
                </div>
                <div className="py-3 ">

                  <form className='form-init signuppage-sec'>
                    {!otpSent ? <> <PhoneInput countryCodeEditable={false} country='in' value={countryCode + phoneNumber} onChange={handlePhoneChange} inputProps={{
                      autoFocus: true,
                      required: true
                    }}
                      onEnterKeyPress={throttle((e) => handleSendOtpClick(e), 2000)}

                    />
                      {/* {mobileError && <p className='error'>Please enter a valid 10-digit mobile number. </p>} */}
                      {InvalidPatternError && <p>Example: 1234567890</p>}
                      {MobileNumberError && <p className="error">Mobile number should be 7 to 10 digits long.</p>}
                    </>
                      : <div className="verification-code--inputss shadow-none">
                        <OTPInput value={otp} shouldAutoFocus={true}
                          onChange={handleOtpChange} inputType='number' numInputs={6}
                          renderInput={(props) => <input {...props} />} />

                        {otpErrorEmpty && <p className='error otpErrorSen mb-0'>Please Enter OTP.</p>}
                        {otpError && <p className='error otpErrorSen mb-0'>Please Enter a Valid OTP.</p>}
                      </div>}
                    <div className='text-center pg-termcondition my-0 mt-2'>
                      {!otpSent && <h6 className='text-muted'>By continuing, I agree to <Link to='/termcondition' target='blank'>   Terms and Conditions</Link> & <Link to='/privacypolicy' target='blank'>Privacy Policy</Link></h6>}
                    </div>
                    {otpSent && <div className='my-2'>
                      {!isActive ? <p className='text-end countTimerOtp'><p>Resend OTP: {formatTime(timeRemaining)} </p></p> : <p className='text-end'> <button className='resendotp' type="button" disabled={!isActive} onClick={handleResendOtp}>Resend OTP</button></p>}
                    </div>}
                    <div className="text-center my-3">
                      {/* onButtonClick={throttle(handleSendOtpClick,2000)} */}
                      {!otpSent ? <Button5 type='button' name={"Send OTP"}
                        onButtonClick={throttle((e) => handleSendOtpClick(e), 2000)} /> :
                        <Button5 type='button' name={"Verify OTP"} onButtonClick={throttle(handleVerifyOtpClick, 2000)} />}
                    </div>

                    <div className="mt-3 gobacklink text-center">
                      {!otpSent && <p>
                        Have an account?{" "}
                        <button
                          className="forgetpassword"
                          onClick={() => setIsSignUpModal(false)}
                        >
                          Login
                        </button>
                      </p>}
                    </div>
                    {otpSent && <div className='mt-3 gobacklink text-center'>
                      <button type="button" className='changemobile fw-bold' onClick={() => { setOtpSent(false); setOtp(); setPhoneNumber(); }}>Change Mobile Number</button>
                    </div>}
                  </form>
                </div>
              </div>
            </>}
          </>

          :
          <div className="widthModal">
            {/* <!-- Left side content --> */}

            <div className="login_content accountContent">
              <h2 className="text-center fw-bold">Login to your account!</h2>
              <p className="text-center">
                Login with your data that you entered during<br />registration.
              </p>
              <div className="py-3">
                <form className="form-init" onSubmit={throttle(handleLoginSubmit, 2000)}>
                  <div className="text-center">
                    <div className="input-group verification-code--inputs mx-auto mb-2">
                      {/* <span className="input-group-text bg-warning"><i className="fa fa-phone text-white" aria-hidden="true"></i></span> */}
                      <PhoneInput countryCodeEditable={false} country='in' value={countryCode + phoneNumber} onChange={handleChangePhoneNumber} inputProps={{
                        required: true,
                        autoFocus: true
                      }} />
                      {/* <input
                  type="tel"
                  className="form-control shadow-none"
                  placeholder="Enter Mobile Number"
                  {...bindPhoneNumber}
                /> */}
                      {InvalidPatternError && <p>Example: 5551234567</p>}
                      {MobileNumberError && <p className="error">Please enter valid mobile number.</p>}
                    </div>
                    <div className="input-group verification-code--inputs inputs-pwd mx-auto ">
                      {/* <span className="input-group-text bg-warning"><i className="fa fa-lock text-white" aria-hidden="true"></i></span> */}
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control inputs-pwd shadow-none w-100 pwd"
                        placeholder="Password"
                        maxLength={20}
                        {...bindPassword}
                        onKeyDown={(e) => { hankdk(e) }}
                      />
                      <span className="cursor" onClick={() => setShowPassword(!showPassword)}> <i className={`bi bi-eye${showPassword ? '-slash' : ''}`} id="togglePassword"></i></span>
                      <br />
                      {passwordError && <p className="error">Please enter your password.</p>}
                      {passwordlengthError && <p className="error">Password must be at least 8 characters long.</p>}
                    </div>

                  </div>
                  <div className="text-end">
                    <button
                      type="button"
                      className="forgetpassword"
                      onClick={() => { setIsOpenForgetModal(true); CloseModal(); }}
                    // onClick={() => navigate("/forget_password")}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="text-center my-3">
                    <button type="button" className="btn btn-5 border-0 shadow-none" onClick={throttle(handleLoginSubmit, 2000)}><span>Login</span></button>
                  </div>
                  <div className="mt-3 gobacklink text-center">
                    <p>
                      Don’t have an account?{" "}
                      <button
                        type="button"
                        className="forgetpassword"
                        onClick={() => setIsSignUpModal(true)}
                      >
                        Signup
                      </button>
                    </p>
                  </div>
                </form>
              </div>
              <div>

              </div>
            </div>
          </div>}
      </Modal>
    </>
  );
}