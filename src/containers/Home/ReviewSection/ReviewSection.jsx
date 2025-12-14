import React from 'react'
import './ReviewSection.css'
import Marquee from "react-fast-marquee";
import Reivew10 from '../../../assets/images/r1.png'
import Reivew1 from '../../../assets/images/r2.png'
import Reivew2 from '../../../assets/images/r3.png'
import Reivew3 from '../../../assets/images/r4.png'
import Reivew4 from '../../../assets/images/r5.png'
import Reivew5 from '../../../assets/images/r6.png'
import Reivew6 from '../../../assets/images/r7.png'
import Reivew7 from '../../../assets/images/r8.png'
import Reivew8 from '../../../assets/images/r9.png'
import Reivew9 from '../../../assets/images/r10.png'



export default function ReviewSection() {
    return (

        <section id="reviews" className="pt-1 pb-4 bg-light">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className=" col-lg-5">
                        <div className="pg-reviews">
                            <div className="text-center">
                                {/* Tons of positive reviews by students across our platforms */}
                                <h1 className="fw-bold">Lakhs of <span className="text-warning">students</span> &amp; their <span className="text-warning">parents</span> nationwide place their trust in us.</h1>
                                <p className=" text-muted"><span className="text-warning font-weight-bold">Tons</span> of positive reviews by students across our platforms</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 animation_main5">
                        <div className='p-2 check_animation5'>
                            {[Reivew1, Reivew2, Reivew3, Reivew4, Reivew5, Reivew6, Reivew7, Reivew8, Reivew9, Reivew10].map((item, i) => {
                                return (

                                    <div className="review_img my-3" key={i}>
                                        <img src={item} alt="revie1" className="img-fluid" />
                                    </div>
                                )
                            })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
