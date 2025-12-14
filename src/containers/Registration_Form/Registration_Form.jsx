import React, { useEffect, useRef, useState } from "react";
import "./registration.css";
import profile from "../../assets/images/icons/profile.png";
import Circle from "../../assets/images/icons/circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faWallet } from "@fortawesome/free-solid-svg-icons";
import { cityListService, download_Ticket_Service, event_registration_Service, event_registration_for_dummyUser_Service, freeTransactionService, getMyProfileService, stateListService } from "../../services";
import { formatOnlyTime, isLogin, resHandler } from "../../../helper";
import useInput from "../../components/useInput";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../Profile/profileSlice";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import toast from "react-hot-toast";


const Registration_Form = ({ value, onClose }) => {
  const { value: name, bind: bindName, setValue: setName } = useInput("");
  const { value: email, bind: bindEmail, setValue: setEmail } = useInput("");
  const {
    value: mobileNumber,
    bind: bindMobileNumber,
    setValue: setMobileNumber,
  } = useInput("");
  const dispatch = useDispatch();
  const [checkMail, setCheckMail] = useState(false);
  const [clickMail, setClickMail] = useState(null);
  const [stateList, setStateList] = useState();
  const [cityList, setCityList] = useState();
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [profession, setProfession] = useState('student');
  const [seatCount, setSeatCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState();
  const [nameError, setNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const profileData = useSelector((state) => state.profileDetail.profile);
  const [isShowConfirmation, setIsShowConfirmation] = useState(false);
  const [password, setPassword] = useState();
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [txnId, setTxnId] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    getStateList(101);
    if (profileData.name) {
      // console.log(profileData)
      // getCountryList();
      setName(profileData.name);
      setEmail(profileData.email)
      setMobileNumber(profileData.mobile);
      // setAddress(profileData.address);
      setCity(profileData.city);
      setState(profileData.state);
      // setPinCode(profileData.pin_code);
      // setCountry(profileData.country)
      // getCountryList()
      // getStateList(profileData.country);
      // getcity(profileData.state);
    }
    else {
      getMyProfile()
    }
  }, []);

  const getMyProfile = async () => {
    await getMyProfileService().then(res => {
      let { status, data, message } = resHandler(res);
      if (status && data.name) {
        dispatch(profileAction(data));
        setName(data.name);
        setEmail(data.email)
        setMobileNumber(data.mobile);
        //  setAddress(data.address);
        //  setCity(data.city);
        //  setState(data.state);
        //  setPinCode(data.pin_code);
        //  setCountry(data.country);
        //  getCountryList();
        //  getStateList(data.country);
        getcity(data.state)

      }


    }).catch(err => console.log(err))
  }

  useState(() => {
    console.log(state, 'state')
    if (state) {
      getcity(state)
    }
  }, [state])

  const handleEmail = (e) => {
    const inputValue = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(inputValue);
    setCheckMail(isValidEmail);
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
  const getcity = async (params) => {
    const formData = new FormData();
    formData.append("state_id", params);
    await cityListService(formData)
      .then((res) => {
        let { data, status, message } = resHandler(res);
        status && setCityList(data);
      })
      .catch((err) => console.log(err));
  };

  const close = (e) => {
    e.preventDefault();
    console.log("first");
    onClose();
  };
  const handleNameInput = (e) => {
    // const regex = /[^A-Za-z\s]/g;
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^A-Za-z\s'-.]/g, "");
    // if(regex.test(e.target.value)){
    setName(sanitizedValue);
    // }
  };

  const handleMobileChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9\s'+]/g, "");
    setMobileNumber(newValue);
  };
  const handleState = (e) => {
    // console.log(JSON.parse(e.target.value), "sate")
    // const value = JSON.parse(e.target.value);
    setState(e.target.value);
    getcity(e.target.value);
    // console.log(state.name)
  };

  const handleCity = (e) => {
    const value = JSON.parse(e.target.value);
    setCity(e.target.value);
  };

  const handleClick = () => {
    // Programmatically trigger a click event on the input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0])
    setSelectedImage(e.target.files[0])
  }

  const findStateName = (id) => {
    return stateList.find(item => item.id == id)
  }
  const findCityName = (id) => {
    return cityList.find(item => item.id == id)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("auto")
    setNameError(false);
    setEmailError(false);
    setMobileError(false)
    setCityError(false);
    setStateError(false);
    setPasswordError(false);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // const isValidEmail = emailRegex.test(inputValue);
    if (name.length >= 2 && emailRegex.test(email) && mobileNumber.length > 7 && city.length && state.length) {
      if (isLogin) {
        const formData = new FormData();
        formData.append('event_id', value.id);
        formData.append('name', name);
        formData.append('mobile', mobileNumber);
        formData.append('email', email);
        formData.append('city', findCityName(city)?.name);
        formData.append('state', findStateName(state)?.name);
        formData.append('profession', profession);
        formData.append('guest_no', seatCount);
        formData.append('user_image', selectedImage);

        event_registration_Service(formData).then(res => {
          let { status, data, message } = resHandler(res);
          console.log(res);

          status && handleAddtoLibary(value.id);
          !status && message && toast.error(message)
          // !status && setShowPasswordField(true);
          // !status && toast.error('User not Registered, Please fill password field also!!')
        })
      }
      else {
        // if(showPasswordField && password.length >= 8){
        const formData = new FormData();
        formData.append('event_id', value.id);
        formData.append('name', name);
        formData.append('mobile', mobileNumber);
        formData.append('email', email);
        formData.append('city', findCityName(city)?.name);
        formData.append('profession', profession);
        formData.append('guest_no', seatCount);
        formData.append('state', findStateName(state)?.name);
        // formData.append('user_image', selectedImage);
        // formData.append('password', password);

        await event_registration_for_dummyUser_Service(formData).then(res => {
          let { status, data, message } = resHandler(res);
          console.log(res);
          if (status) {
            message && toast.success(message);
            setName('');
            setMobileNumber('');
            setEmail('');
            setProfession('student');
            setState('');
            setCity('');
          }
          // status && toas
          // status && localStorage.setItem("user_id",data.user_id)

          // setTimeout(() => {
          //     status && handleAddtoLibary(value.id);
          //   }, 1000);
          //!status && toast.error('User not Registered, Please fill password field also!!')
        })
        // }
        // else{
        //     setPasswordError(true);
        // }
      }
    }
    else {
      if (name.length < 2) {
        setNameError(true);
      }
      if (!emailRegex.test(email)) {
        setEmailError(true);
      }
      if (mobileNumber.length <= 7) {
        setMobileError(true)
      }
      if (!city.length) {
        setCityError(true);
      }
      if (!state.length) {
        setStateError(true)
      }
    }
  }

  const handleAddtoLibary = async (id) => {
    const formData = new FormData;
    formData.append('course_id', id);

    await freeTransactionService(formData).then(res => {
      let { data, status, message } = resHandler(res);
      if (status) {
        console.log(data)
        status && setIsShowConfirmation(true)
        status && setTxnId(data.txn_id);

        //   message && setSwalProps({
        //     show: true,
        //     title: message,
        //     icon: 'success'
        // }); 
        // location.reload()
      } else {

      }
    }).catch(err => console.log(err))
  }

  const downloadTicket = () => {
    const formData = new FormData();
    formData.append('txn_id', txnId);
    const link = document.createElement('a');
    download_Ticket_Service(formData).then(res => {

      let { status, data, message } = resHandler(res);

      if (status) {
        // window.location.href = url;
        window.open(data, '_blank');
        link.href = data
        location.reload();
      }

    }).catch(err => console.log(err))
  }

  const handleEventSubmitWithoutLogin = () => {

  }

  return (
    <>
      <div className="registration_main">

        <div className="container" onClick={(e) => close(e)}>
          {isShowConfirmation ? <div className='ticket_book' onClick={(e) => e.stopPropagation()}>
            <div className='ticket_top'>
              <div className='flex-end'><button type="button" className="btn-close cross_icon shadow-none" onClick={(e) => close(e)} aria-label="Close"></button></div>
              {/* <FontAwesomeIcon icon={faCircleXmark} className='cross_icon' /> */}
              {/* <FontAwesomeIcon icon={faCheck} className='tick_icon' /> */}
              <img src={Circle} width='200px' />
              <p className='text-center'>Your seat has successfully booked.</p>
            </div>
            <div className='ticket_btn'>
              <button type="button" onClick={downloadTicket}><FontAwesomeIcon icon={faDownload} /> Download</button>
              {/* <button><FontAwesomeIcon icon={faShare} /> Share</button> */}
            </div>
          </div> :
            <div className="regist_section" onClick={(e) => e.stopPropagation()}>
              <div className='flex-end'><button type="button" className="btn-close shadow-none" onClick={(e) => close(e)} aria-label="Close"></button></div>
              <div className="profile_main">
                <div className="cursor" onClick={handleClick}>
                  <img width='80px' src={selectedImage ? URL.createObjectURL(selectedImage) : profile} />
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    hidden
                  />
                </div>
              </div>
              <div className="form-item">
                <input
                  type="text"
                  value={name}
                  maxLength={30}
                  onChange={handleNameInput}

                />
                <label className="to_up">Name</label>
                {nameError && <span className="error-2">Please enter a valid name.</span>}
              </div>

              <div className="form-item">
                <input
                  type="tel"
                  maxLength={10}
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  disabled={isLogin}
                />
                <label className="to_up">Mobile Number</label>
                {mobileError && <span className="error-2">Please enter a mobile number.</span>}
              </div>

              <div className="form-item my-2">
                <input
                  type="email"
                  maxLength={40}
                  {...bindEmail}

                />
                <label className="to_up">Email ID.</label>
                {emailError && (
                  <span className="error-2">
                    Please enter a valid email.
                  </span>
                )}
              </div>
              <div className="form-item">
                <label>State</label>
                <select id="state" name="state" value={state} onChange={handleState}>
                  <option value="">
                    Select State
                  </option>
                  {stateList &&
                    stateList.map((item, i) => {
                      return (
                        <option value={item.id} key={i}>
                          {item.name}
                        </option>
                      );
                    })}
                  {/* <option value="delhi">Delhi</option>
                                <option value="up">U.P.</option>
                                <option value="2">Punjab</option>
                                <option value="2">Haryana</option> */}
                </select>
                {stateError && (
                  <span className="error-2">
                    Please select a state.
                  </span>
                )}
              </div>
              <div className="form-item">
                <label>City</label>
                <select id="city" name="city" value={city} onChange={handleCity}>
                  <option value="" disabled>
                    Select
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
                  <span className="error-2">
                    Please select a city.
                  </span>
                )}
              </div>



              <div className="form-item">
                <label>Time</label>
                <input
                  type="text"
                  value={`${formatOnlyTime(value.start_date)} to ${formatOnlyTime(
                    value.end_date
                  )}`}
                  disabled
                />

              </div>
              {/* 
            <div className="form-item">
              <label>Event Mode</label>
              <input value={"Online"} disabled />
             
            </div> */}

              <div className="form-item">
                <label>Profession</label>
                <select
                  id="profession"
                  name="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="manager">Manager</option>
                </select>
              </div>

              {/* <div className="form-item">
              <label>Select No of Seats</label>
              <select
                id="seats"
                name="seats"
                value={seatCount}
                onChange={(e) => setSeatCount(e.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div> */}

              {showPasswordField && <div className="form-item">
                <input
                  type="password"
                  maxLength={13}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="to_up">Password</label>
                {passwordError && <span className="error-2">Please 8 digit password.</span>}
              </div>}

              <div className="row p-3 pay_now_main">
                {value?.course_sp != 0 ? <> <div className="col-7 ">
                  {/* <img src={wallet} /> */}
                  <FontAwesomeIcon icon={faWallet} />
                  <p className="d-inline mx-1">Rs. {value.course_sp}/- Only</p>
                  <span className="d-block mx-3">Inclusive of GST</span>
                </div>
                  <div className="col-5">
                    <div className="text-end">
                      <button type="button" onClick={(e) => handleSubmit(e)}>Register Now</button>
                    </div>
                  </div>
                </> :
                  <div className="text-center card_btn"><button className="w-100" type="button" onClick={(e) => handleSubmit(e)}>Register Now</button></div>
                }
              </div>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Registration_Form;
