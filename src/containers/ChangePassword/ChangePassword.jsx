import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
// import Button4 from "../../components/Buttons/Button4/Button4";
import "./ChangePassword.css";
import OTPInput from "react-otp-input";
import AuthSection from "../../components/AuthSection/AuthSection";
import { Link, useNavigate } from "react-router-dom";
import { resHandler, throttle } from "../../../helper";
import {
  sendVerificationOtpService,
  updatePasswordService,
} from "../../services";
import { toast } from "react-hot-toast";
import useInput from "../../components/useInput";
import Button5 from "../../components/Buttons/Button5/Button5";
export default function ChangePassword() {
  const [otpVerified, setOtpVerfied] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const initialTime = 30; // 3 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [otp, setOtp] = useState("");
  const {
    value: password,
    bind: bindPassword,
    setValue: setPassword,
  } = useInput("");
  const {
    value: confirmPassword,
    bind: bindConfirmPassword,
    setValue: setConfirmPassword,
  } = useInput("");
  const [InvalidPatternError, setInvalidPatternError] = useState(false);
  const [MobileNumberError, setMobileNumberError] = useState(false);
  const [OTPError, setOTPError] = useState(false);
  const [PasswordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let interval;
    if (!isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsActive(true);
    }

    return () => clearInterval(interval);
  }, [timeRemaining]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const invalidPattern = /^0000000000$/;

  const handleSentOtpClick = async () => {
    setMobileNumberError(false);
    setInvalidPatternError(false);
    const phoneNumberWithoutPrefix = phoneNumber ? phoneNumber.slice(2) : "";
    if (!invalidPattern.test(phoneNumberWithoutPrefix)) {
      if (
        phoneNumberWithoutPrefix.length > 7 &&
        phoneNumberWithoutPrefix.length <= 15
      ) {
        const formData = new FormData();

        formData.append("mobile", phoneNumberWithoutPrefix);
        formData.append("resend", 0);
        formData.append("is_registration", 0);

        await sendVerificationOtpService(formData)
          .then((res) => {
            const { status, data, message } = resHandler(res);
            status && toast.success(message);
            status && setOtpSent(!otpSent);
            !status && message && toast.error(message);
          })
          .catch((err) => console.log(err));
      } else {
        if (
          phoneNumberWithoutPrefix.length < 7 ||
          phoneNumberWithoutPrefix.length > 15
        ) {
          setMobileNumberError(true);
        }
      }
    } else {
      setInvalidPatternError(true);
    }
    // setOtpSent(!otpSent)}
  };
  const handleVerifyOtpClick = async () => {
    setOTPError(false);
    if (otp.length == 6) {
      const formData = new FormData();
      const phoneNumberWithoutPrefix = phoneNumber.slice(2);
      formData.append("mobile", phoneNumberWithoutPrefix);
      formData.append("resend", 0);
      formData.append("is_registration", 0);
      formData.append("otp", otp);
      await sendVerificationOtpService(formData)
        .then((res) => {
          const { status, data, message } = resHandler(res);
          status && toast.success(message);
          !status && message && toast.error(message);
          status && setOtpVerfied(true);
        })
        .catch((err) => console.log(err));
    } else {
      setOTPError(true);
    }
    // setOtpSent(!otpSent)
    // setOtpVerfied(true);
  };
  const handleResendOtp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const phoneNumberWithoutPrefix = phoneNumber.slice(2);
    formData.append("mobile", phoneNumberWithoutPrefix);
    formData.append("resend", 1);
    formData.append("is_registration", 0);
    // formData.append('otp',otp);
    await sendVerificationOtpService(formData)
      .then((res) => {
        const { status, data, message } = resHandler(res);
        console.log(res, "resend");
        if (status) {
          toast.success(message);
          setIsActive(false);
          setTimeRemaining(60);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleUpdatePasswordClick = async (e) => {
    setPasswordError("");
    if (password.length >= 8) {
      if (password == confirmPassword) {
        e.preventDefault();
        const formData = new FormData();
        const phoneNumberWithoutPrefix = phoneNumber.slice(2);
        formData.append("mobile", phoneNumberWithoutPrefix);
        formData.append("otp", otp);
        formData.append("password", password);
        await updatePasswordService(formData)
          .then((res) => {
            let { data, status, message } = resHandler(res);
            !status && message && toast.error(message);
            status && message && toast.success(message);
            status && navigate("/user-profile");
          })
          .catch((err) => console.log(err));
      } else {
        setPasswordError("Password mismatch.");
      }
    } else {
      setPasswordError("Password length should be greater than 7.");
    }
  };

  const handleOtpChange = (newOtp) => {
    if (/^[0-9]*$/.test(newOtp)) {
      setOtp(newOtp);
      // alert(newOtp);
    }
  };
  return (
    <AuthSection>
      {otpVerified ? (
        <div className="text-center">
          <h2 className="text-warning fw-bold mb-3">Create New Password </h2>
          <form id="form-init">
            <div className="text-center">
              <div className="input-group verification-code--inputs mb-3 mx-auto ">
                {/* <span className="input-group-text bg-warning"><i className="fa fa-lock text-white" aria-hidden="true"></i></span> */}
                <input
                  type="password"
                  className="form-control shadow-nonwe"
                  placeholder="Password"
                  {...bindPassword}
                />
              </div>
              <div className="input-group verification-code--inputs mb-3 mx-auto ">
                {/* <span className="input-group-text bg-warning"><i className="fa fa-lock text-white" aria-hidden="true"></i></span> */}
                <input
                  type="password"
                  className="form-control shadow-nonwe"
                  placeholder="Confirm Password"
                  {...bindConfirmPassword}
                />
              </div>

              {PasswordError && <p className="error">{PasswordError}</p>}
            </div>

            <div className="text-center my-3">
              <Button5
                type="button"
                name={"Continue"}
                onButtonClick={handleUpdatePasswordClick}
              />
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className="text-center">
            {!otpSent ? (
              <h2 className="text-warning fw-bold">Change your Password</h2>
            ) : (
              <>
                <h2 className="text-warning fw-bold">Enter OTP</h2>
                <h6 className="text-muted">
                  Please enter the OTP to Verify Your Account!
                </h6>
              </>
            )}
          </div>
          <div className="py-3 ">
            <form id="form-init">
              {!otpSent ? (
                <>
                  <PhoneInput
                    countryCodeEditable={false}
                    country="in"
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                  />
                  {InvalidPatternError && <p>Example: 5551234567</p>}
                  {MobileNumberError && (
                    <p className="error">Please enter your mobile number.</p>
                  )}
                </>
              ) : (
                <div className="verification-code--inputss text-center">
                  <OTPInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={6}
                    shouldAutoFocus={true}
                    renderInput={(props) => <input {...props} />}
                  />
                  {OTPError && <p className="error">Please enter valid OTP.</p>}
                </div>
              )}
              {otpSent && (
                <div className="my-2">
                  {!isActive && (
                    <div id="countdown">{formatTime(timeRemaining)}</div>
                  )}
                  <p className="text-center">
                    Didn’t Receive OTP?{" "}
                    <button
                      className="resendotp"
                      type="button"
                      disabled={!isActive}
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                  </p>
                </div>
              )}
              <div className="text-center my-3">
                {!otpSent ? (
                  <Button5
                    type="button"
                    name={"Send OTP"}
                    onButtonClick={throttle(handleSentOtpClick, 2000)}
                  />
                ) : (
                  <Button5
                    type="button"
                    name={"Verify OTP"}
                    onButtonClick={throttle(handleVerifyOtpClick, 2000)}
                  />
                )}
              </div>
              {/* <div className='mt-3 gobacklink text-center'>
                    <button type="button" className='changemobile fw-bold' onClick={() => navigate('/login')}> Back To Login</button>  
                  </div> */}

              {otpSent && (
                <div className="mt-3 gobacklink text-center">
                  <button
                    className="changemobile fw-bold"
                    onClick={() => setOtpSent(false)}
                  >
                    {" "}
                    Change mobile number
                  </button>
                </div>
              )}
            </form>
          </div>
        </>
      )}
    </AuthSection>
  );
}
