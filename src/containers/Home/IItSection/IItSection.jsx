import React from 'react'
import './IItSection.css'
import GearYellow from '../../../assets/images/Gearyellow.svg'
import IItKhargpur from '../../../assets/IIT_images/iit-kharagpur.png'
import IItBombay from '../../../assets/IIT_images/iit-bombay.png'
import IItMadras from '../../../assets/IIT_images/iit-madras.png'
import IItKanpur from '../../../assets/IIT_images/iit-kanpur.png'
import IItDelhi from '../../../assets/IIT_images/iit-delhi.png'
import IItGuwahati from '../../../assets/IIT_images/iit-guwahati.png'
import IItRoorkee from '../../../assets/IIT_images/iit-roorkee.png'
import IItJodhpur from '../../../assets/IIT_images/iit-jodhpur.png'
import IItIndore from '../../../assets/IIT_images/iit-indore.png'
import IItHydrabaad from '../../../assets/IIT_images/iit-hydra.png'
import IItGoa from '../../../assets/IIT_images/iit-goa.png'
import IItPatna from '../../../assets/IIT_images/iit-patna.png'

import Button4 from '../../../components/Buttons/Button4/Button4';
import { useNavigate } from 'react-router-dom'
export default function IItSection() {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/about-iits')
  }
  return (
    <>
      <section className="py-5 about_iit_one">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <p className="about_sec_head h2">
                  Everything about IIT’s | Anything about IIT’s
                </p>
                <h1 className="font-weight-bold about_sec_head mb-0">
                  All at <span className="text-warning">One</span> Place
                </h1>
              </div>
            </div>

          </div>

          <div className="row mt-3">
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-kharagpur`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItKhargpur} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Kharagpur</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-bombay`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItBombay} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Bombay</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-madras`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItMadras} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Madras</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-kanpur`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItKanpur} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Kanpur</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-delhi`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItDelhi} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Delhi</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-guwahati`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItGuwahati} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Guwahati</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-roorkee`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItRoorkee} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Roorkee</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-jodhpur`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItJodhpur} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Jodhpur</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-indore`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItIndore} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Indore</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-hyderabad`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItHydrabaad} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Hyderabad</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-goa`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItGoa} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Goa</h5>
                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-3 col-6 cursor " onClick={() => navigate(`/iits?name=iit-patna`)}>

              <div className="circle_animated_sec">
                <div className="circle-animate">
                  <img src={GearYellow} className="circle_img_animate" />
                  <div className="logo_IIT">
                    <img src={IItPatna} alt="" />
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5 className="text-dark">IIT Patna</h5>
                </div>
              </div>

            </div>

            <div className="col-md-12 mt-4">
              <div className='text-center'>
                <Button4 name={"Know more"} onButtonClick={handleButtonClick} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
