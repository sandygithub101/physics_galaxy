import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinkSend from "../../components/LinkSend/LinkSend";
import Button4 from "../../components/Buttons/Button4/Button4";
import "./Profile.css";
import UserDetails from "../../components/UserDetails/UserDetails";
import {
  cityListService,
  countryListService,
  getMyProfileService,
  stateListService,
  userUpdateProfileService,
} from "../../services";
import { resHandler } from "../../../helper";
import useInput from "../../components/useInput";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "./profileSlice";
import Button5 from "../../components/Buttons/Button5/Button5";
import { toast } from "react-hot-toast";
// import ProfileImage from '../../assets/images/userprofile.png'
import UserImage from "../../assets/images/user-default-new.png";
import { s3 } from "../../AWS3";
import { useNavigate } from "react-router-dom";
import LogoutPopup from "../../components/UserDetails/LogoutPopup";
import ChangePassModal from "./ChangePassModal";
export default function Profile() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileDetail.profile);
  const { value: name, bind: bindName, setValue: setName } = useInput("");
  const { value: email, bind: bindEmail, setValue: setEmail } = useInput("");
  // const [mobileNum]
  const { value: mobile, bind: bindMobile, setValue: setMobile } = useInput("");
  const {
    value: address,
    bind: bindAddress,
    setValue: setAddress,
  } = useInput("");
  const { value: city, bind: bindCity, setValue: setCity } = useInput("");
  const { value: state, bind: bindState, setValue: setState } = useInput("");
  const {
    value: pin_code,
    bind: bindPinCode,
    setValue: setPinCode,
  } = useInput("");
  const {
    value: country,
    bind: bindCountry,
    setValue: setCountry,
  } = useInput("");
  const [countryCode, setCountryCode] = useState();
  const [countryList, setCountryList] = useState();
  const [stateList, setStateList] = useState();
  const [cityList, setCityList] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [profileImage, setProfileImage] = useState();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [buttonGrey, setButtonGrey] = useState(false)
  // const
  useEffect(() => {
    //
    if (profileData.name) {
      // console.log(profileData)
      // getCountryList();
      setName(profileData.name);
      setEmail(profileData.email);
      setMobile(profileData.mobile);
      setAddress(profileData.address);
      setCity(profileData.city);
      setState(profileData.state);
      setPinCode(profileData.pin_code);
      setProfileImage(profileData.profile_picture);
      setCountry(101);
      setCountryCode(profileData.c_code);
      // getCountryList()
      getStateList(profileData.country);
      // getcity(profileData.state);
    } else {
      getMyProfile();
    }
  }, [profileData]);
  useEffect(() => {
    if (country) {
      getStateList(country);
    }
  }, [country]);
  useEffect(() => {
    if (state && stateList) {
      const stateId = stateList && stateList.find((item) => item.name == state);
      console.log(stateId, "state");
      if (stateId) {
        getcity(stateId && stateId.id);
      }
    }
  }, [state, stateList]);

  const getMyProfile = async () => {
    await getMyProfileService()
      .then((res) => {
        let { status, data, message } = resHandler(res);
        if (status && data.name) {
          dispatch(profileAction(data));
          setName(data.name);
          setEmail(data.email);
          setMobile(data.c_code + data.mobile);
          setAddress(data.address);
          setCity(data.city);
          setState(data.state);
          setPinCode(data.pin_code);
          setCountry(101);
          setProfileImage(data.profile_picture);
          setCountryCode(data.c_code);
          // getCountryList();
          // getStateList(data.country);
          // const stateId = stateList && stateList.find(item => item.name == state);

          // getcity(stateId && stateId.id)
        } else {
          sessionStorage.clear();
          location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateClick = async () => {
    const formData = new FormData();

    if (name.length < 3) {
      toast.error('Name should be 3 or more characters');
      return false;
    }

    formData.append("name", name);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("pin_code", pin_code ? pin_code : "");
    formData.append("profile_picture", profileImage);

    await userUpdateProfileService(formData).then((res) => {
      let { status, data, message } = resHandler(res);
      console.log(res);
      if (status) {
        toast.success(message);
        getMyProfile();
        setButtonGrey(false)
      } else {
        message && toast.error(message);
      }
    });
  };

  // const getCountryList = async() => {

  //   await countryListService()
  //     .then((res) => {
  //       let { data, status, message } = resHandler(res);
  //       // status && console.log(data)
  //       status && setCountryList(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

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

  const handleProfilePicture = async (e) => {
    let file = e.target.files[0];
    // const AWS = window.AWS;
    // const s3 = new AWS.S3({
    //   accessKeyId: 'AKIA4UKA5WD4CYRE4ONU',
    //   secretAccessKey: '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',
    //   region: 'ap-south-1',
    // });
    try {
      const user_id = sessionStorage.getItem("user_id");
      const params = {
        Bucket: import.meta.env.VITE_S3_BUCKET,
        Key: `${import.meta.env.VITE_APP_ID}/application/profile/${user_id}/${file.name
          }`,
        Body: file,
      };
      // url = `${import.meta.env.VITE_CLOUDFRONT_URL}/${params.Key}`;
      await s3.upload(params).promise();
      setProfileImage(`${import.meta.env.VITE_CLOUDFRONT_URL}/${params.Key}`);
    } catch (err) {
      console.log(err);
    }

    // setProfilePicture(e.target.files[0])
  };
  const handleOpenVideo = async () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <Header />
      <ChangePassModal
        ModalOpen={isOpenModal}
        CloseModal={() => {
          setIsOpenModal(false);
        }}
      />
      <section className="py-4 pg-userprofile-section">
        <div className="container">
          <div className="section-user-profile">
            <div className="row ">
              <div className="col-lg-3 col-md-4">
                <UserDetails />
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="profile-title">
                  <h4 className="fw-bold">My Profile</h4>
                  {/* <span><i className="fa fa-pencil-square-o ms-2" aria-hidden="true"></i> Edit</span> */}
                </div>
                <hr />
                <div className=" rounded-3">
                  {/* <div className='user-image-text mb-4 mt-3 px-4'>
                <div className='row d-flex align-items-center'>
                 <div className="col-md-4 col-lg-2 text-center circleimgdiv">
                  <div className='pg-user-image-sec text-center'>
                    <img src={profileImage ? profileImage : UserImage} />
                  </div>
                  <div><span><i className="fa fa-camera" aria-hidden="true"></i></span></div>
                 </div>
                 <div className="col-md-8 col-lg-10">
                      <div className='profile-name-text ml-3'>
                        <h5>{name}</h5>
                        <p>{email}</p>
                      </div>
                 </div>
                </div>
            </div> */}

                  <form
                    id="formSubmit"
                    className="user-profile-form shadow pb-4"
                    method="post"
                  >
                    <div className="row mb-3">
                      <div className="col-lg-6 ">
                        <label
                          htmlFor="username"
                          className="col-form-label col-form-label-sm"
                        >
                          Name :{" "}
                        </label>

                        <input
                          type="text"
                          id="c-name"
                          value={name}
                          onChange={(e) => {
                            bindName.onChange(e)
                            setButtonGrey(true)
                          }}
                          maxLength={30}
                          className="form-control border shadow-none"
                          required
                          placeholder="User Name*"
                        />
                      </div>
                      <div className="col-lg-6 ">
                        <label
                          htmlFor="email"
                          className="col-form-label col-form-label-sm"
                        >
                          Email :
                        </label>

                        <input
                          type="email"
                          className="form-control border shadow-none"
                          required
                          placeholder="Email Address*"
                          id="email_id"
                          value={email}
                          {...bindEmail}
                          disabled
                        />

                      </div>
                    </div>



                    <div className="row mb-3">
                      <div className="col-lg-6">
                        <label
                          htmlFor="mobile"
                          className="col-form-label col-form-label-sm"
                        >
                          Mobile No. :
                        </label>

                        <input
                          type="number"
                          id="mobile_id"
                          className="form-control border shadow-none"
                          required
                          placeholder="Mobile No.*"
                          {...bindMobile}
                          disabled
                        />

                      </div>
                      <div className="col-lg-6">
                        <label
                          htmlFor="state"
                          className="col-form-label col-form-label-sm"
                        >
                          State :
                        </label>

                        <select

                          className="form-select border shadow-none"
                          {...bindState}
                          placeholder="state"
                          onChange={(e) => {
                            bindState.onChange(e)
                            setButtonGrey(true)
                          }}
                        >
                          <option>Select</option>
                          {stateList &&
                            stateList.map((item, i) => {
                              return (
                                <option value={item.name} key={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                        </select>

                      </div>
                    </div>

                    {/* <div className="row mb-3">
              <label htmlFor="address" className="col-sm-2 col-form-label col-form-label-sm">Address*</label>
              <div className="col-sm-10">
              <input type="text" id="address" className="form-control border shadow-none" required
                placeholder="Address*" autoComplete="off" tabIndex="0" value={address} {...bindAddress}/>
              </div>
            </div> */}

                    <div className="row mb-3">
                      <div className="col-lg-6">
                        <label
                          htmlFor="city"
                          className="col-form-label col-form-label-sm"
                        >
                          City :{" "}
                        </label>

                        <select



                          id="city_id"
                          className="form-select border shadow-none"
                          placeholder="city"
                          {...bindCity}
                          onChange={(e) => {
                            bindCity.onChange(e)
                            setButtonGrey(true)
                          }}
                        >
                          <option >Select</option>
                          {cityList &&
                            cityList.map((item, i) => {
                              return (
                                <option value={item.name} key={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>

                    {/* <div className="row mb-3">
              <label htmlFor="pincode" className="col-sm-2 col-form-label col-form-label-sm">Pin Code :</label>
              <div className="col-sm-10">
              <input type="text" id="street" className="form-control border shadow-none" required
                placeholder="Pin Code" autoComplete="off" tabIndex="0" value={pin_code} maxLength={6} {...bindPinCode}/>
              </div>
            </div> */}

                    {/* <div className="row mb-3">
              <label htmlFor="country" className="col-sm-2 col-form-label col-form-label-sm">Country*</label>
              <div className="col-sm-10">
              <select
              className="form-select shadow-none"
              placeholder="Country"
              defaultValue={""}
             {...bindCountry}
            >
              <option value="">Select</option>
              {countryList &&
                countryList.map((item, i) => {
                  return (
                    <option value={item.id} key={i}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
              </div>
            </div> */}
                    {/* 
                    <div className="row mb-3">
                      <label
                        htmlFor="choosefile"
                        className="col-sm-2 col-form-label col-form-label-sm"
                      >
                        Image :
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control shadow-none"
                          type="file"
                          id="formFile"
                          accept="image/*"
                          onChange={handleProfilePicture}
                          required
                        />
                      </div>
                    </div> */}


                    <div className="d-flex justify-content-end mt-4">
                      <Button4
                        name={"Update Profile"}
                        onButtonClick={handleUpdateClick}
                        disabled={!buttonGrey}
                      />
                    </div>

                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex ">
              <input type="text" id="c-name" value={name} {...bindName} className="form-control shadow-none" required placeholder="User Name*"/>
             
              </div>
            </div> */}

                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
              
                <input type="email" className="form-control shadow-none" required
                placeholder="Email Address*"  id="email_id" value={email} {...bindEmail} disabled/>
               
              </div>
            </div> */}

                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
              
                <input type="number" id="mobile_id" className="form-control shadow-none" required
                placeholder="Mobile No.*" value={mobile} {...bindMobile} disabled/>
               
              </div>
            </div> */}
                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
                
                <input type="text" id="address" className="form-control shadow-none" required
                placeholder="Address*" autoComplete="off" tabIndex="0" value={address} {...bindAddress}/>
              
              </div>
            </div> */}
                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
                
                {/* <input type="text" id="district" className="form-control shadow-none" required
                placeholder="District*" autoComplete="off" tabIndex="0" value={city} {...bindCity}/> *
                 <select
              className="form-select shadow-none"
              placeholder="city"
              {...bindCity}
            >
              <option>Select</option>
              {cityList &&
                cityList.map((item, i) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
              
              </div>
            </div> */}
                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
                
                <input type="text" id="street" className="form-control shadow-none" required
                placeholder="Pin Code*" autoComplete="off" tabIndex="0" value={pin_code} maxLength={6} {...bindPinCode}/>
              
              </div>
            </div> */}
                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
                
                {/* <input type="text" id="state" className="form-control shadow-none" required
                placeholder="State*" autocomplete="off" tabIndex="0" value={state} {...bindState}/> *
              <select
              className="form-select shadow-none"
              {...bindState}
              placeholder="state"
            >
              <option>Select</option>
              {stateList &&
                stateList.map((item, i) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
              </div>
            </div> */}
                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
                
                {/* <input type="text" id="country" className="form-control shadow-none" required
                placeholder="Country*" autocomplete="off" tabIndex="0" value={country} {...bindCountry}/> *
               <select
              className="form-select shadow-none"
              placeholder="Country"
              defaultValue={""}
             {...bindCountry}
            >
              <option value="">Select</option>
              {countryList &&
                countryList.map((item, i) => {
                  return (
                    <option value={item.id} key={i}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
              </div>
            </div> */}

                    {/* <div className="col-lg-12">
              <div className="form-outline my-3 d-flex">
             
              <input className="form-control shadow-none" type="file" id="formFile" accept='image/*' onChange={handleProfilePicture} required/>
          
              </div>
              </div> */}
                  </form>
                </div>

                <div className=" mt-3 rounded-3 ">
                  <div className="d-flex align-items-center justify-content-between bg-white shadow chngepassdv">
                    <h5 className="mb-0">Change Password</h5>
                    <Button4
                      name={"Change"}
                      onButtonClick={handleOpenVideo}
                    // onButtonClick={() => navigate("/change_password")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LinkSend />
      <Footer />
    </>
  );
}
