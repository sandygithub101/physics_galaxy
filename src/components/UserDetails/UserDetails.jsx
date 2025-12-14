import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getMyProfileService,
  userLogoutService,
  userUpdateProfileService,
} from "../../services";
import { s3 } from "../../AWS3";
import { resHandler } from "../../../helper";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "./logoutSlice";
import ProfileImage from "../../assets/images/user (4).png";
import { profileAction } from "../../containers/Profile/profileSlice";
import LogoutPopup from "./LogoutPopup";
export default function UserDetails() {
  const dispatch = useDispatch();
  const [lastPath, setLastPath] = useState();
  const [email, setEmail] = useState();
  const profileData = useSelector((state) => state.profileDetail.profile);
  const naviagate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [profileImage, setProfileImage] = useState();

  const getUserDetails = () => {
    getMyProfileService().then((res) => {
      let { data, status, message } = resHandler(res);
      if (status) {
        dispatch(profileAction(data));
        setProfilePicture(data.profile_picture);
        setName(data.name);
        setEmail(data.email);
        setCity(data.city);
        setState(data.state);
      }
    });
  };

  useEffect(() => {
    // getUserDetails()
    let lastPathSegment = location.pathname.split("/")[1];
    setLastPath(lastPathSegment);
    if (profileData.name) {
      // console.log(profileData)
      setProfilePicture(profileData.profile_picture);
      setName(profileData.name);
      setEmail(profileData.email);
    } else {
      getUserDetails();
    }
  }, [profileData]);
  const handleOpenVideo = async () => {
    setIsOpenModal(true);
  };
  const handleProfilePicture = async (e) => {
    // console.log("first")
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
      handleUpdateClick(`${import.meta.env.VITE_CLOUDFRONT_URL}/${params.Key}`);
    } catch (err) {
      console.log(err);
    }

    // setProfilePicture(e.target.files[0])
  };

  const handleUpdateClick = async (value) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    // formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    // formData.append("pin_code", pin_code ? pin_code : "");
    formData.append("profile_picture", value);

    await userUpdateProfileService(formData).then((res) => {
      let { status, data, message } = resHandler(res);
      if (status) {
        toast.success(message);
        getUserDetails();
      } else {
        message && toast.error(message);
      }
    });
  };
  return (
    <>
      <LogoutPopup
        ModalOpen={isOpenModal}
        CloseModal={() => {
          setIsOpenModal(false);
        }}
      />
      <div className="vjed-user-profile u-profile shadow">
        <div className="vjed-user-img text-center">
          <div className="pg-userprofileimage text-center m-auto">
            <img
              src={profilePicture ? profilePicture : ProfileImage}
              className="rounded-cricle"
            />
          </div>
        </div>
        <div className="vjed-user-title text-center">
          <h4 className="mb-2 text-dark">
            <b>Welcome, </b>{name}!
          </h4>
          {/* <h6 className="text-dark">{email}</h6> */}
          <div className="mt-2 mb-3">
            <label htmlFor="fileInput" className="file-input-label">
              <span>+ Add Photo</span>
              <input type="file" id="fileInput" accept="image/jpeg, image/png" className="file-input" onChange={handleProfilePicture}
                required />
            </label>
          </div>
          {/* <span className="edit-icon py-2">
        <i className="fa fa-pencil-square-o mb-2" aria-hidden="true"></i>
      </span> */}
        </div>

        <hr />
        <div className="vjed-user-links p-1 mb-0">
          <ul className="nav nav-pills user-nav ">
            <li className="nav-item">
              <Link
                to={"/user-profile"}
                className={`nav-link ${lastPath == "user-profile" && "active"}`}
                aria-current="page"
              >
                <i className="fa fa-user me-2" aria-hidden="true"></i>
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/library"}
                className={`nav-link ${lastPath == "library" && "active"}`}
              >
                <i className="fa fa-book me-2" aria-hidden="true"></i>
                My Library
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/purchasehistory"}
                className={`nav-link ${lastPath == "purchasehistory" && "active"
                  }`}
              >
                <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                Purchase History
              </Link>
              {/* <Link to={'/purchased-events'} className={`nav-link ${lastPath == 'purchased-events' && 'active'}`}>
          <i className="fa fa-calendar me-2" aria-hidden="true"></i>
         Events
        </Link>  */}
            </li>
            {/* <li className="nav-item">
        <Link className='nav-link'>
          <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
         Live Class
        </Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link'>
          <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
        Live Test
        </Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link'>
          <i className="fa fa-bell me-2" aria-hidden="true"></i>
       Notification
        </Link>
      </li> */}
            <li className="nav-item">
              <Link to={"/notifications"} className={`nav-link ${lastPath == "notifications" && "active"
                }`}>

                <i className="fa-solid fa-bell me-2" aria-hidden="true"></i>
                Notification
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/livetest"} className={`nav-link ${lastPath == "livetest" && "active"
                }`}>

                <i className="fa-solid fa-square-check me-2" aria-hidden="true"></i>
                Live test

              </Link>


            </li>
            <li className="nav-item">
              <Link to={"/liveclasses"} className={`nav-link ${lastPath == "liveclasses" && "active"
                }`}>

                <i className="fa-solid fa-display me-2" aria-hidden="true"></i>
                Live Classes
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleOpenVideo}>
                <i className="fa fa-sign-out me-2" aria-hidden="true"></i>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
