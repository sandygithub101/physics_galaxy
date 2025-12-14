import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import GooglePlayIcon from "../../assets/images/Google-Play-Icon.jpg";
import Logo from "../../assets/images/galaxy-logo.png";
import { getVersionService } from "../../services";
import { resHandler } from "../../../helper";
import { useDispatch, useSelector } from "react-redux";
import { footerAction } from "./FooterSlice";
export default function Footer() {
  const [footerInfo, setFooterInfo] = useState();
  const dispatch = useDispatch();
  const versionData = useSelector((state) => state.footerDetail.version);
  useEffect(() => {
    if (versionData) {
      setFooterInfo(versionData);
    } else {
      getVersionService()
        .then((res) => {
          const { status, data } = resHandler(res);
          console.log('app_version', data)
          if (status) {
            // console.log(data, "footer_data")
            dispatch(footerAction(data));
            setFooterInfo(data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [versionData]);

  return (
    <>
      <footer className="section-footer py-2 ">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="footer-logo-img py-2">
                <a className="fs-3">
                  <img className="logo" src={Logo} alt="logo" />
                </a>
              </div>
              <div className="footer-heading">
                <h4 className="text-warning">About US</h4>
                <p className="my-3 fb text-white">
                  Physics Galaxy is an e-learning portal for students aspiring
                  for JEE Main, JEE Advanced, and NEET. It delivers a
                  path-breaking teaching system that provides instant grasp and
                  explanation of important concepts in a seamless manner,
                  catering to a wide range of age groups.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row ">
                <div className="col-md-6 col-12 ftrlinkscol">
                  <h5 className=" text-warning m-3 ">
                    <b>Important Links</b>
                  </h5>
                  <ul className="nav flex-column pg-footer-link">
                    {/* <li className="nav-item">
                  <Link className="nav-link">
                 
                  All in One Subscription
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">
                 
                  Mock tests Subscription
                  </Link>
                </li> */}

                    <li className="nav-item">
                      <Link className="nav-link" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                   <Link className="nav-link">
                   
                    Services
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" >
                   
                    Blogs
                   </Link>
                 </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/privacypolicy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/refund-policies">
                        Refund Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/termcondition">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link" to='/contact'>
                   Contact Us
                  </Link> */}
                    </li>
                  </ul>
                </div>
                {/* <div className="col-md-4 col-6">
           {/* <h5 className=" text-warning m-3"><b>Popular Courses</b></h5>
           <ul className="nav flex-column pg-footer-link">
                <li className="nav-item">
                  <Link className="nav-link">
                   
                IIT JEE Study Material
                  </Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link">
                   
                    UPSC Study Material
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link">
                   
                    SSC Study Material
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link">
                   
                  RAILWAYS Study Material
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link">
                   
                   BANKING Study Material
                   </Link>
                 </li>
                 
           </ul> *
          </div> */}
                <div className="col-md-6 col-12 ftrlinkscol">
                  <h5 className="mb-1 text-warning my-3">
                    <b>Contact Us</b>
                  </h5>

                  <div className="mt-3">
                    {/* <div className="c_link ">
             <p className="text-white d-flex">
              <span className="what_sectionget_icon">
                <i className="fa fa-map-marker text-danger me-2" aria-hidden="true"></i>
              </span> 
              Physics Galaxy, Shivneri Apartment (Basement), 134-135, Dalda Factory Road, Jadon Nagar-B, Mahaveer Nagar, Durgapura, Jaipur, Rajasthan 302020.
             </p>
            </div> */}

                    {/* <div className="c_link my-3">
                       <Link to="tel:8302780233" className="phone">
                           <span className="what_sectionget_icon"><i className="fa fa-phone  me-2" aria-hidden="true"></i>
                           </span>8302780233
                       </Link>
            </div>

            <div className="c_link my-3">
                       <Link 
                           target="_blank" className="transition sectionget_whtas_num whatsapp" tabIndex="-1">
                           <span className="what_sectionget_icon"><i className="fa fa-whatsapp  me-2" aria-hidden="true"></i>
                           </span>+91 - 8302780233
                       </Link>
            </div> */}
                    <div className="c_link my-3">
                      <Link
                        to="mailto:info@physicsgalaxy.com"
                        tabIndex="-1"
                        className="envelope"
                      >
                        <span className="what_sectionget_icon">
                          <i
                            className="fa fa-envelope me-2"
                            aria-hidden="true"
                          ></i>
                        </span>
                        info@physicsgalaxy.com
                      </Link>
                    </div>

                    <div className="footer-links text-center mt-1">
                      <ul className="list-inline mb-0 list-unstyled d-flex">
                        <li className="list-inline-item">
                          {footerInfo?.permissions.facebook_link_data && (
                            <Link
                              to={footerInfo?.permissions.facebook_link_data}
                              className="btn btn-sm btn-social facebook "
                              target="_blank"
                            >
                              <i
                                className="fa fa-facebook text-white"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          )}
                        </li>
                        <li className="list-inline-item">
                          {footerInfo?.permissions.twitter_link_data && (
                            <Link
                              to={footerInfo?.permissions.twitter_link_data}
                              className="btn btn-sm btn-social twitter "
                              target="_blank"
                            >
                              <i className="fa fa-twitter shadow"></i>
                            </Link>
                          )}
                        </li>
                        <li className="list-inline-item">
                          {footerInfo?.permissions.youtube_link_data && (
                            <Link
                              to={footerInfo?.permissions.youtube_link_data}
                              className="btn btn-sm btn-social youtube "
                              target="_blank"
                            >
                              <i className="fa fa-youtube-play  shadow"></i>
                            </Link>
                          )}
                        </li>
                        <li className="list-inline-item">
                          {footerInfo?.permissions.linkedin_link_data && (
                            <Link
                              to={footerInfo?.permissions.linkedin_link_data}
                              className="btn btn-sm btn-social linkedin "
                              target="_blank"
                            >
                              <i className="fa fa-linkedin shadow"></i>
                            </Link>
                          )}
                        </li>
                        {/* <li className="list-inline-item">
               <span className="btn btn-sm instagram" target="_blank" >
                <i className="fa fa-instagram shadow"></i>
               </span>
             </li> */}
                        {/* <li className="list-inline-item ">
               <span className="btn twitter btn-sm" target="_blank" >
                <i className="fa fa-twitter shadow"></i>
               </span>
             </li> */}
                        {/* <li className="list-inline-item ">
               <span className="btn btn-sm youtube" target="_blank" >
                <i className="fa fa-youtube-play shadow"></i>
               </span>
             </li> */}
                        {/* <li className="list-inline-item">
               <span className="btn btn-sm linkedin" target="_blank" >
                <i className="fa fa-linkedin shadow"></i>
               </span>
             </li> */}
                      </ul>
                    </div>

                    <div className="">
                      <div className="footer-heading pt-3 d-flex align-items-center">
                        {/* <h6 className="me-3 text-warning">Download App: </h6> */}
                        <Link
                          to="https://play.google.com/store/search?q=physics+galaxy&c=apps&hl=en-IN&pli=1"
                          target="_blank"
                          className="app-img p-1"
                        >
                          <img
                            src={GooglePlayIcon}
                            style={{ width: "120px" }}
                          />
                        </Link>
                        <Link
                          to="https://d2qxo9rqhf0w5j.cloudfront.net/427/admin_v1/test_management/question_bank/47415510_Physics%20Galaxy.exe"
                          target="_blank"
                          className="app-img p-1"
                        >
                          <img
                            src="https://www.codesquadz.com/education_staging/../website_assets/img/app-edu-windows-app(1).png"
                            style={{ width: "122px" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-dark py-2">
        <div className="container px-0">
          <div className="d-md-flex justify-content-center align-items-center  text-center text-md-center">
            <div className="text-secondary-hover text-white">
              Copyrights
              <a>© 2023 Physics Galaxy</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
