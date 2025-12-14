import React from 'react'
import { useState } from 'react'
import { jwt_decode, resHandler, throttle } from '../../../helper';
import { getFPaymentService, sendVerificationOtpService } from '../../services';
import PhoneInput from 'react-phone-input-2';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import PaymentGatewayModal from '../../components/PaymentGatewayModal/PaymentGatewayModal';
const course_id = 12962;
export default function Form() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('')
  const [email, setEmail] = useState();
  const [openModal, setOpenModal] = useState(false)

  const handleName = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^A-Za-z\s'-.]/g, '');
    setName(sanitizedValue)
  }
  const handlePhoneChange = (value, country) => {
    const phoneNumberWithoutCountry = value.replace(`${country.dialCode}`, '');
    setPhoneNumber(phoneNumberWithoutCountry);
    setCountryCode(country.dialCode)

  }
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('mobile', phoneNumber)
    formData.append('resend', 0)
    formData.append('is_registration', 1)
    formData.append('device_id', 'ADXS')
    formData.append('device_token', 'ADXS')
    // formData.append('c_code', countryCode)
    formData.append('otp', 124421);
    await sendVerificationOtpService(formData).then(res => {

      const { status, data, message } = resHandler(res);
      !status && message && toast.error(message);
      status && localStorage.setItem('jwt', data.jwt);
      status && jwt_decode(data.jwt);
      status && setTimeout(() => {
        setOpenModal(true)
      }, 500);
      //   status && toast.success(message);
      //   status && setOtpVerfied(true);;
      //   !status && message &&( message == 'OTP expired') && location.reload();
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  const handleSelectedPaymentGateway = (value) => {
    // console.log(value, "selectedPayemtn");
    handlePayment(value)
    // handlePayment()
    // console.log(e.target.value)
    // setSelectedPaymentGateway(e.target.value)

  }

  const handlePayment = async (value) => {
    const formData = new FormData();
    formData.append('type', 1);
    formData.append('course_id', 3366);
    // formData.append('course_price', '10.00');
    // formData.append('tax','0.00');
    formData.append('pay_via', 9);
    formData.append('coupon_applied', 0);

    await getFPaymentService(formData).then(res => {
      let { data, status, message } = resHandler(res);
      console.log(data)
      let key = value.mid;
      status && paymentGateWay(data.txnToken, key);

    }).catch(err => {
      console.log(err)
    })
  }

  const paymentGateWay = async (acc_key, key) => {
    var easebuzzCheckout = new EasebuzzCheckout(key, import.meta.env.VITE_TYPE);
    var options = {
      access_key: acc_key, // access key received via Initiate Payment
      onResponse: (response) => {
        // post_transaction_id
        const order_details = {
          orderid: response.txnid,
          transactionId: response.easepayid

        }
        let status = response.status == 'success' ? 1 : 0
        const formData = new FormData();
        formData.append('type', 2);
        formData.append('course_id', 3366);
        //   formData.append('course_price', '10.00');
        //   formData.append('tax','0.00');
        formData.append('pay_via', 9);
        formData.append('coupon_applied', 0);
        formData.append('pre_transaction_id', response.txnid);
        formData.append('transaction_status', status);
        formData.append('post_transaction_id', response.easepayid);
        getFPaymentService(formData).then(res => {
          let { data, status, message } = resHandler(res);
          status && console.log(data)
          status && sendDataToParent(order_details)



        }).catch(err => {
          console.log(err)
        })
      },
      theme: "#123456" // color hex
    }

    await easebuzzCheckout.initiatePayment(options);
    // console.log(JSON.stringify(selectedPaymentGateway))

  }

  return (<>{openModal && <PaymentGatewayModal isOpen={openModal} isClose={() => setOpenModal(false)} selectedGateway={handleSelectedPaymentGateway} />}
    <form onSubmit={throttle(handleSubmit, 2000)}>
      <label>Name </label>
      <input type="text" pattern="^[A-Za-z\s]+$" value={name} onChange={handleName} placeholder='Enter name' />
      <label>Ph No. </label>
      <PhoneInput countryCodeEditable={false} country='in' value={countryCode + phoneNumber} onChange={handlePhoneChange} />
      <label>Email </label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type='button' onClick={throttle(handleSubmit, 2000)}>Submit</button>
    </form></>
  )
}
