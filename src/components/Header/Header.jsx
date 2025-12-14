import React, { useEffect, useMemo, useState } from "react";
import "./Header.css";
import galaxy_logo from "../../assets/images/galaxy-logo.png";
import { Link, useLocation } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartCountService,
  getCourse_Catergory_Service,
  getMyProfileService,
  getUserAddressService,
  showCartService,
  userLoginService,
  userLogoutService,
  getCourses_Service

} from "../../services";
import { image_check, isLogin, resHandler } from "../../../helper";
import {
  address_Action,
  all_categoryAction,
  cart_Count_Action,
} from "../../containers/Home/masterContentSlice";
import Button4 from "../Buttons/Button4/Button4";
import UserProfileImage from "../../assets/images/user (4).png";
import SideModal from "../SideModal/SideModal";
import CartModal from "../SideModal/CartModal";
import toast from "react-hot-toast";
import { logoutAction } from "../UserDetails/logoutSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { profileAction } from "../../containers/Profile/profileSlice";
import { Nav, NavDropdown } from "react-bootstrap";
import LogoutPopup from "../UserDetails/LogoutPopup";
import LoginPageModal from "../../containers/Login/LoginPageModal";
import DeleteAccount from "../UserDetails/DeleteAccount";
import NoDataFound from "../../containers/NoDataFound/NoDataFound";

export default function Header() {
  let isLoggedIn = localStorage.getItem('jwt')
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [allCourseList, setAllCourseList] = useState();
  const [courseParantList, setCourseParantList] = useState();
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openSearchList, setOpenSearchList] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const allCategory = useSelector((state) => state.allCategory.allCategory);
  const cart_count = useSelector((state) => state.allCategory.cart_count);
  const Cart_Data = useSelector((state) => state.allCategory.cart);
  const dispatch = useDispatch();
  const [settingsData, setSettingsData] = useState();
  const [showCartItem, setShowCartItem] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [profilePicture, setProfilePicture] = useState();
  const [searchCourseList, setSearchCourseList] = useState();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const profileData = useSelector((state) => state.profileDetail.profile);
  const settingDetails = useSelector(
    (state) => state.allCategory.allCategory.settings
  );

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  useEffect(() => {
    if (typeof settingDetails != "undefined") {
      setSettingsData(settingDetails);
    }
  }, [settingDetails]);

  const getCourseData = (value) => {
    // setCourseId(value);
    const formData = new FormData();
    formData.append("page", 1);
    formData.append("search", value);
    formData.append("main_cat", 0);
    formData.append("sub_cat", 1);
    formData.append("course_type", 0);

    if (value.length > 0) {
      setTimeout(async () => {
        await getCourses_Service(formData)
          .then((res) => {
            let { status, data, message } = resHandler(res);
            console.log('pskdkdkd', data)
            setSearchCourseList(data)

          })
          .catch((err) => {
            console.log(err);
          });
      }, 2000);
    }

    // }
  };

  useEffect(() => {
    if (isLogin) {
      if (profileData.name) {
        if (profileData.profile_picture != "undefined") {
          setProfilePicture(profileData.profile_picture);
        }
      } else {
        getMyProfile();
      }
    }
  }, [profileData]);

  const getMyProfile = async () => {
    await getMyProfileService()
      .then((res) => {
        let { status, data, message } = resHandler(res);
        if (status && data.name) {
          dispatch(profileAction(data));
          //  setName(data.name);
          //  setEmail(data.email)
          //  setMobile(data.mobile);
          //  setAddress(data.address);
          //  setCity(data.city);
          //  setState(data.state);
          //  setPinCode(data.pin_code);
          //  setCountry(101);



          //  data.profile_picture != 'undefined' &&  setProfilePicture(data.profile_picture);
          // getCountryList();
          //  getStateList(data.country);
          //  getcity(data.state)

        }
        else {
          localStorage.clear();
          location.reload()
        }

      }).catch(err => console.log(err))
  }

  const handleSearchList = () => {
    // console.log("first")
    setOpenSearchList(!openSearchList);
  };
  const handleShowCart = () => {
    setShowCartItem(!showCartItem);
  };

  const path = (value) => {
    const pathArray = value.split("/");

    // Remove the last ID by slicing the array
    pathArray.pop();

    // Reconstruct the new path
    return pathArray.join("/");
  };

  const findpath = useMemo(() => path(pathname), [pathname]);

  useEffect(() => {
    if (!allCategory) {
      getCourseCategory();
      getSavedAddress();

      // const filteredData = dataArray.filter(item => item.parent_id === "0");
      // setParentData(filteredData);
    } else {
      setAllCourseList(allCategory.all_cat);
    }
  }, []);
  useEffect(() => {
    if (allCourseList) {
      const filteredData = allCourseList.filter(
        (item) => item.parent_id === "0"
      );
      setCourseParantList(filteredData);
    }
  }, [allCourseList]);

  useEffect(() => {
    if (typeof cart_count != "undefined") {
      setCartCount(cart_count);
    }
    // else{
    //   getCartCount()
    // }
  }, [cart_count]);

  useEffect(() => {
    if (typeof Cart_Data !== "undefined") {
      getCartCount();
    }
  }, [Cart_Data]);

  const getSavedAddress = () => {
    if (isLogin) {
      getUserAddressService()
        .then((res) => {
          let { status, data, message } = resHandler(res);
          status && dispatch(address_Action(data));
          console.log(data, "getuserAddress");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLoginClick = () => {
    const close = document.querySelector('[data-bs-dismiss="offcanvas"]')
    // const fullUrl = window.location.href;
    // localStorage.setItem('redirect' , fullUrl);
    // navigate('/login');
    setOpenLoginModal(true)
    close && close.click();
  }

  const handleSearchInput = () => {
    setOpenSearchInput(!openSearchInput);
  }
  const handleNotification = () => {
    setOpenNotification(!openNotification);
  }



  const getCourseCategory = async () => {
    // console.log(allCategory, "allCategory")
    const formData = new FormData();

    await getCourse_Catergory_Service(formData)
      .then((res) => {
        // if ((res.statusText = "OK")) {
        let { status, data, message } = resHandler(res);
        // console.log(status, data, message, "exam")
        if (status) {
          // console.log(data.banner_list[0].banner_url)
          dispatch(all_categoryAction(data));
          setAllCourseList(data.all_cat);
          // setBanner(data.banner_list_web[0].banner_url)
        }
        // }
      })
      .catch((err) => console.log(err));
  };

  const childData = (value) => {
    return allCourseList.filter((item) => item.parent_id === value);
  };

  const handleLogoutButtonClick = async (e) => {
    e.preventDefault();
    await userLogoutService()
      .then((res) => {
        const { data, status, message } = resHandler(res);
        status && localStorage.clear();

        status && location.reload();
        // navigate('/')/
        // message && toast.success(message);
        status && dispatch(logoutAction());
        status &&
          setTimeout(() => {
            location.reload();
            toast.success(message);
          }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCartCount = () => {
    if (isLogin) {
      cartCountService().then((res) => {
        let { status, data, message } = resHandler(res);
        status && dispatch(cart_Count_Action(data.total_count));
        console.log(data, res, "cartCount");
      });
    }
  };

  const handleOpenVideo = async () => {
    setIsOpenModal(true);
  };
  const handleDeleteVideo = async () => {
    setIsDeleteModal(true);
  };

  // JavaScript to handle the custom data-bs-overflow attribute
  $(document).ready(function () {
    $('[data-bs-toggle="offcanvas"]').on('click', function () {
      const target = $(this).data('bs-target'); // Get the target offcanvas menu ID
      const overflow = $(this).data('bs-overflow'); // Get the data-bs-overflow attribute

      // Check if the offcanvas menu is being opened or closed
      if ($(target).hasClass('show')) {
        // Offcanvas is being opened
        if (overflow === 'scroll') {
          // If data-bs-overflow is set to "scroll", allow scrolling
          $('body').css('overflow', 'auto');
        } else {
          // If data-bs-overflow is not set or set to other values, prevent scrolling
          $('body').css('overflow', 'hidden');
        }
      } else {
        // Offcanvas is being closed, restore original body overflow
        $('body').css('overflow', 'auto');
      }
    });
  });

  return (
    <>
      <LoginPageModal ModalOpen={openLoginModal} OpenModal={() => setOpenLoginModal(true)} CloseModal={() => setOpenLoginModal(false)} />
      <LogoutPopup
        ModalOpen={isOpenModal}
        CloseModal={() => {
          setIsOpenModal(false);
        }}
      />
      <DeleteAccount ModalOpen={isDeleteModal}
        CloseModal={() => {
          setIsDeleteModal(false);
        }} />
      <header className="pg-top-header">
        <div className="container">
          <div className="row">
            <nav className="navbar backgroung-gif bg-body-tertiary navbar-expand-lg">
              <div className="h-logo p-1">
                <Link className="navbar-brand logo " to="/">
                  <img src={galaxy_logo} alt="Physics Galaxy" />
                </Link>
              </div>

              {/* <div className='header-navtabs'>         */}
              {screenWidth < 991 && (
                <button
                  className="navbar-toggler me-2"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  data-bs-overflow="scroll"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                  aria-expanded="true"
                // onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <span className="navbar-toggler-icon">
                    {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
                  </span>
                </button>
              )}
              {/* <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header bg-grey">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <div className="h-logo p-1">
                <Link className="navbar-brand logo" to="/">
                  <img src={galaxy_logo} alt="Physics Galaxy" />
                </Link>
              </div>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                 
                </div>
              </div> */}

              {/* <div className=''> */}
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header bg-grey">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <div className="h-logo p-1">
                      <Link className="navbar-brand logo" to="/">
                        <img src={galaxy_logo} alt="Physics Galaxy" />
                      </Link>
                    </div>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="select-course mx-3">
                  {/* {findpath !== '//allcourses' && } */}
                  <div className="dropdown">
                    <Link
                      className="pg-allcourse dropdown-toggle"
                      id="dLabel"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      All Courses
                      <span className="caret"></span>
                    </Link>
                    <ul
                      className="dropdown-menu course-dropdown multi-level"
                      aria-labelledby="dLabel"
                    >
                      {courseParantList &&
                        courseParantList.map((item, i) => {
                          return (
                            <li className="dropdown-submenu pg-submenu" key={i}>
                              <Link className="d-flex justify-content-between">
                                <span>{item.name}</span>
                                <span>
                                  <i
                                    className="fa fa-angle-right fw-bold"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </Link>
                              {childData(item.id).length !== 0 && (
                                <ul className="dropdown-menu course-dropmenu shadow ">
                                  {childData(item.id) &&
                                    childData(item.id).map((value, i) => {
                                      return (
                                        <li
                                          key={i}
                                          onClick={() =>
                                            navigate(
                                              `/allcourses?courses_id=${value.id}`
                                            )
                                          }
                                        >
                                          <Link>{value.name}</Link>
                                        </li>
                                      );
                                    })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <ul className="navbar-nav mt-1 mx-3 pg-navigation">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/about-us">
                      About Us
                    </Link>
                  </li>
                  {/* <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li> */}
                  {settingsData && settingsData?.left_menu.Event == "1" && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/events">
                        Events
                      </Link>
                    </li>
                  )}
                  {/* <li className="nav-item">
              <Link className="nav-link" to="/physicsgalaxy/testimonials">
                Testimonials
              </Link>
            </li> */}
                  {/* <li className="nav-item">
              <Link className="nav-link" to="/physicsgalaxy/contact">
                Contact Us
              </Link>
            </li> */}
                </ul>
                <div className="header-asdz">
                  {!isLoggedIn ? (
                    <LoginButton LoginClick={handleLoginClick} />
                    // <LoginPageModal ModalOpen={isOpenModal}
                    // CloseModal={() => {
                    //   setIsOpenModal(false);

                    // }} />
                  ) : (
                    // <Button4 name={'Profile'} onButtonClick={() => navigate('//user-profile')}/>}

                    <div className="pg-user-login-section">
                      <div className="d-flex align-items-center mx-2 log2 hidesn">
                        {/* <div className='pg-notification'>
                    <div className="dropdown">
                            <button id="notification" className="btn shadow-none show border-0" data-bs-toggle="dropdown" aria-expanded="true" onClick={handleNotification}>
                              <span className="font-heading "><i className="fa fa-bell-o me-2 text-white"></i></span> 
                            </button>
                          {openNotification &&  <ul className="dropdown-menu notification-drop-menu p-0 show" aria-labelledby="notification" data-bs-popper="none">
                              <li><Link>
                                <div className='d-flex align-items-center  m-2 border-bottom'>
                                  <div className='pg-notification-img'>
                                    <img src={UserProfileImage}/>
                                  </div>
                                  <div className='noti-details ms-2'>
                                  <h6 className='mb-0'>Report Create Successfully</h6>
                                   <p className='mb-0'>Notification</p>
                                  <p className='mb-0 text-end'>7 Aug 2023 - 13:39 PM</p>
                               </div>
                                </div>
                                </Link>
                              </li>                              
                              <li><Link>
                                <div className='d-flex align-items-center  m-2 border-bottom'>
                                  <div className='pg-notification-img'>
                                    <img src={UserProfileImage}/>
                                  </div>
                                  <div className='noti-details ms-2'>
                                  <h6 className='mb-0'>Report Create Successfully</h6>
                                   <p className='mb-0'>Notification</p>
                                  <p className='mb-0 text-end'>7 Aug 2023 - 13:39 PM</p>
                               </div>
                                </div>
                                </Link>
                              </li>
                              <li><Link>
                                <div className='d-flex align-items-center  m-2 border-bottom'>
                                  <div className='pg-notification-img'>
                                    <img src={UserProfileImage}/>
                                  </div>
                                  <div className='noti-details ms-2'>
                                  <h6 className='mb-0'>Report Create Successfully</h6>
                                   <p className='mb-0'>Notification</p>
                                  <p className='mb-0 text-end'>7 Aug 2023 - 13:39 PM</p>
                               </div>
                                </div>
                                </Link>
                              </li>
                              
                              <li><Link>
                              
                                   <div className='text-center mb-2 allnotification'>
                                      <h6 className='mb-0'>See all notification<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></h6>
                                   </div>
                               
                                </Link>
                              </li>
                            </ul>}
                          </div>
                    </div> */}

                        <Nav className="dropdown profile-navdropdown">
                          <NavDropdown
                            title={
                              <img
                                src={
                                  profilePicture
                                    ? profilePicture
                                    : UserProfileImage
                                }
                                alt="userprofile"
                                className="shadow "
                              />
                            }
                          >
                            <NavDropdown.Item
                              onClick={() => navigate("/user-profile")}
                              className="dropdown-item drop-item"
                            >
                              <i
                                className="fa fa-user me-2"
                                aria-hidden="true"
                              ></i>
                              My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => navigate("/library")}
                              className="dropdown-item drop-item"
                            >
                              <i
                                className="fa fa-book me-2"
                                aria-hidden="true"
                              ></i>
                              My Library
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => navigate("/purchasehistory")}
                              className="dropdown-item drop-item"
                            >
                              <i
                                className="fa fa-shopping-cart me-2"
                                aria-hidden="true"
                              ></i>
                              Purchase History
                            </NavDropdown.Item>
                            <hr className="dropdown-divider" />
                            <NavDropdown.Item
                              onClick={handleOpenVideo}
                              className="dropdown-item drop-item"
                            >
                              <i
                                className="fa fa-sign-out me-2"
                                aria-hidden="true"
                              ></i>
                              Logout
                            </NavDropdown.Item>
                            {settingDetails?.left_menu.delete_account === '1' && <NavDropdown.Item
                              onClick={handleDeleteVideo}
                              className="dropdown-item drop-item"
                            >
                              <i
                                className="fa fa-trash me-2"
                                aria-hidden="true"
                              ></i>
                              Delete Account
                            </NavDropdown.Item>
                            }
                            {/* onClick={() => setProfileDropdown(!profileDropdown)} */}
                            {/* <img src={profilePicture ? profilePicture : UserProfileImage} alt="userprofile" className='shadow' />
                        <span className="caret"></span> */}
                          </NavDropdown>
                          {/* {profileDropdown && 
                      <ul className="pg-profile-dropdown dropdown-menu" aria-labelledby="userprofile"> */}
                          {/* <li>
                          <h6>Name</h6>
                          <p>Developer</p>
                         </li> */}
                          {/* <li><hr className="dropdown-divider"/></li> */}
                          {/* <li> <div className='text-center'> */}
                          {/* <h5 className='mb-0 fw-bold'>Sahil</h5> */}

                          {/* </div>   </li> */}
                          {/* <li><hr className="dropdown-divider"/></li> */}
                          {/* <li><Link className="dropdown-item " to={'/user-profile'}><i className="fa fa-user me-2" aria-hidden="true"></i>My Profile</Link></li>
                         <li><Link className="dropdown-item" to={'/library'}><i className="fa fa-book me-2" aria-hidden="true"></i>My Library</Link></li>
                         <li><Link className="dropdown-item" to={'/purchasehistory'}><i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>Purchase History</Link></li> */}
                          {/* <li><Link className="dropdown-item" to={'/purchased-events'}><i className="fa fa-calendar me-2" aria-hidden="true"></i>Event</Link></li> */}
                          {/* <li><Link className="dropdown-item"><i className="fa fa-television me-2" aria-hidden="true"></i>Live Class</Link></li>
                         <li><Link className="dropdown-item"><i className="fa fa-file-text me-2" aria-hidden="true"></i>Live Test</Link></li> */}
                          {/* <hr className="dropdown-divider"/>
                         <li onClick={handleLogoutButtonClick}><Link className="dropdown-item"><i className="fa fa-sign-out me-2" aria-hidden="true"></i>Logout</Link></li>

                       </ul>
                       } */}
                        </Nav>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* <form role="search" method="get" className="search-form" action=""> */}
              <div className="search-group pg-s-g shadow my-1">
                <div className="search-box">
                  <input className="search-text position-relative" type="text" onChange={(e) => getCourseData(e.target.value)} onInput={() => setShowCart(true)} onBlur={(e) => { setShowCart(false); e.target.value('') }} placeholder="Search" />
                  {showCart && <div className="search-result">
                    {searchCourseList ?
                      searchCourseList.map((item, i) => {
                        return (
                          <div className="d-flex align-items-center py-2 search-border" key={i} onClick={() => navigate(`/view_details?course_id=${item.combo_course_ids.length ? item.id : item.id}`)}>
                            <div className="w-40">
                              <div className="search_img"><img src={image_check(item?.cover_image)} /></div>
                            </div>
                            <div className="search_content_dt ms-2 w-60">
                              <h6>{item?.title}</h6>
                              <p>By Physics Galaxy</p>
                              <p>Validity: {item?.validity}</p>
                            </div>

                          </div>
                        )
                      }) :
                      <div className='text-center'>
                        <div className='pg-no-data-found'>
                          <NoDataFound height={'50vh'} />
                        </div>
                      </div>
                    }
                  </div>}
                  <div className="search-btn">

                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
                {/* <div className="dropdown">
                            <button id="searchbox" className="btn shadow-none show border-0" data-bs-toggle="dropdown" aria-expanded="true" onClick={handleSearchInput}>
                              <span className="search_by font-heading "><i className="fa fa-search text-white"></i></span> 
                            </button> */}
                {/* {openSearchInput &&  <ul className="dropdown-menu pg-droped p-0 show" aria-labelledby="searchbox" data-bs-popper="none">
                              <li>
                              
                                  <div className=" d-flex align-items-center ">
                                    <div className="input-group-btn search-panel dropdown" data-search="all">
                                    <button type="button" className="btn btn-default shadow-none dropdown-toggle"onClick={handleSearchList}>
                                      <span id="search_concept search_by font-heading">All</span> <span className="caret"></span>
                                    </button>
                                    {openSearchList && <ul className="course-list shadow" >
                                      <li><a className="" >All</a></li>
                                      <li><a className="" >Courses</a></li>
                                      <li><a className="" >Exams</a></li>
                                      <li><a className="" >Books</a></li>
                                      <li><a className="">Ask Doubts</a></li>
                                    </ul>}
                                    </div>
                                    
                                    <div className="search">
                                      <input type="text" className="searchTerm border-0 shadow-none" placeholder="Search...."/>
                                      <button className="searchButton shadow-none">
                                        <i className="fa fa-search"></i>
                                    </button>
                                  </div>
                                  
                                </div>
                              </li>
                            </ul>} */}
                {/* </div> */}
              </div>
              {/* </form> */}

              <div className='pg-purchase-card' onClick={handleShowCart}>
                <CartModal CartCount={cartCount} />
              </div>
              {/* </div> */}

              {/* </div> */}
            </nav>
          </div>
        </div>
        {/* {profileDropdown && 
      <div onClick={() => setProfileDropdown(false)} className='background-div'>

      </div>} */}
      </header>
    </>
  );
}
