import React from 'react';
import Ab_think_navbar from '../ab_think_navbar/Ab_think_navbar';
import iit_kanpur from '../../../assets/IIT_images/IIT-Kanpur.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
// import App_Link from '../app_link/App_Link';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Tabs, Tab, Accordion } from "react-bootstrap";

function IIT_kanpur() {
    const navigate = useNavigate();
    return (
        <>
            <section className="pb-5 about_think_sec bg-light">
                <div className="container-fluid p-0">
                    <div className="row mx-0">
                        {/* <Ab_think_navbar /> */}
                        <div className="p-0">
                            <div>
                                <div className="about_think_bnr1 position-relative">
                                    <img src={iit_kanpur} className="w-100" />
                                </div>
                                <div className="card about_think_nav">
                                    <div className="p-2 about_think_card_heading">

                                        <Tabs
                                            defaultActiveKey={2}
                                            className="nav nav-pills about_think_nav_tabs"
                                            id="uncontrolled-tab-example"
                                        >
                                            <Tab eventKey={1} title={
                                                <FontAwesomeIcon icon={faHouse} onClick={() => navigate('/about-iits')} fontSize='20px' />
                                            }>
                                            </Tab>
                                            <Tab eventKey={2} title="Select Student">
                                                <div
                                                    className="my-1 card-body m-0 about_think_bg_light"
                                                    style={{ padding: "15px !important" }}
                                                >
                                                    <div className="py-2">
                                                        <h3 className="fw-bold">Select Student</h3>
                                                    </div>
                                                    <Student_select />
                                                </div>
                                            </Tab>
                                            <Tab eventKey={3} title="About">
                                                <div
                                                    className="my-1 card-body m-0 about_think_bg_light"
                                                    style={{ padding: "15px !important" }}
                                                >
                                                    <h3>Introduction</h3>
                                                    <p>
                                                        Nestled in Kanpur, Uttar Pradesh, India, the Indian Institute of Technology Kanpur (IIT Kanpur)
                                                        commands <b>recognition</b> as a significant public technological hub. The Government of India
                                                        bestowed upon it the <b>esteemed</b> title of an Institute of National Importance under the aegis
                                                        of the Institutes of Technology Act.<br /><br />
                                                        The <b>foundation</b> of this institution dates back to <b>1959</b>, marking its place among the
                                                        pioneering Indian Institutes of Technology. This <b>genesis</b> was a product of <b>collaborative
                                                            endeavour</b>, as a <b>consortium</b> encompassing nine <b>distinguished</b> US research
                                                        universities came together as part of the Kanpur Indo-American Programme (KIAP).
                                                    </p>
                                                </div>
                                            </Tab>
                                            <Tab eventKey={4} title="History">
                                                <div
                                                    className="my-1 card-body m-0 about_think_bg_light"
                                                    style={{ padding: "15px !important" }}
                                                >
                                                    <h3>History</h3>
                                                    <p>
                                                        <b>IIT Kanpur</b> emerged into existence through a <b>legislative mandate</b> in 1960, enacted by
                                                        the Government of India. <b>Inaugurating</b> its operations in December 1959, the initial
                                                        <b>confines</b> were established within a room located in the canteen building of the Harcourt
                                                        Butler Technological Institute at Agricultural Gardens in Kanpur. In a pivotal transition during
                                                        1963, the institute <b>relocated</b> to its current precincts adjacent to the Grand Trunk Road,
                                                        near Kanpur's Kalyanpur locality. The <b>architect</b> Achyut Kavinde orchestrated the campus
                                                        design in a <b>modernist architectural demeanour</b>.<br /><br />
                                                        Marking its formative decade, a consortium comprising nine illustrious US universities (<b>MIT,
                                                            UCB, California Institute of Technology, Princeton University, Carnegie Institute of Technology,
                                                            University of Michigan, Ohio State University, Case Institute of Technology</b>, and <b>Purdue
                                                                University</b>) substantively contributed to the establishment of IIT Kanpur.
                                                    </p>
                                                </div>
                                            </Tab>
                                            <Tab eventKey={5} title="Academic">
                                                <div
                                                    className="my-1 card-body m-0 about_think_bg_light"
                                                    style={{ padding: "15px !important" }}
                                                >
                                                    <div className="py-2">
                                                        <h3>Undergraduate Admissions</h3>
                                                    </div>
                                                    <Academic />
                                                </div>
                                            </Tab>
                                            <Tab eventKey={6} title="Department">
                                                <div
                                                    className="my-1 card-body m-0 about_think_bg_light"
                                                    style={{ padding: "15px !important" }}
                                                >
                                                    <h3>Department</h3>
                                                    <p>
                                                        {/* content  */}
                                                    </p>
                                                    <div className="accordion faq_sec" id="accordionExample">
                                                        <div className="row">

                                                            {/* left side item  */}
                                                            <div className="col-md-6">

                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Aerospace
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="1" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Biological
                                                                            </strong>
                                                                            <span className="ms-1">Science & Bio Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Chemical Engineering
                                                                            </strong>
                                                                            <span className="ms-1"></span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="3" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Civil
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="4" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Computer
                                                                            </strong>
                                                                            <span className="ms-1">Science and Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="5" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Design
                                                                            </strong>
                                                                            <span className="ms-1"></span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </div>

                                                            {/* right side item  */}
                                                            <div className="col-md-6">

                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Electrical
                                                                            </strong>
                                                                            <span className="ms-1">& Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="1" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Industrial
                                                                            </strong>
                                                                            <span className="ms-1">& Management Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19", fontSize: '15px' }}>
                                                                                Materials
                                                                            </strong>
                                                                            <span className="ms-1" style={{ fontSize: '14px' }}>Science & Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="3" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Machanical
                                                                            </strong>
                                                                            <span className="ms-1"> Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="4" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Sustainable
                                                                            </strong>
                                                                            <span className="ms-1">Energy Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey={7} title="Placement">
                                                <div
                                                    className="my-1 card-body m-0 about_think_bg_light"
                                                    style={{ padding: "15px !important" }}
                                                >
                                                    <div className="py-2">
                                                        <h3>Placement</h3>
                                                    </div>
                                                    <p>
                                                        The successful culmination of <b>Phase 1</b> of the 2022-23 placement season marks a significant
                                                        achievement for the Indian Institute of Technology (IIT) Kanpur. Commencing on <b>December 1</b>
                                                        and extending for fifteen days until <b>December 15, 2022</b>, Phase 1 witnessed the graduation
                                                        batch of <b>2022-23</b> received a total of <b>1128</b> job offers, encompassing <b>208</b>
                                                        pre-placement offers <b>(PPOs)</b>.<br /><br />

                                                        Introducing a hybrid mode after a hiatus of two years, this placement cycle saw the participation
                                                        of over <b>250</b> companies, including more than <b>35 startups</b>, in <b>phase 1</b> campus
                                                        hiring, leading to the
                                                        extension of 1200 job offers. Notably, the surge in <b>PPOs</b> is noteworthy, with over <b>60</b>
                                                        companies
                                                        offering <b>208</b> PPOs, indicating a commendable <b>33%</b> rise compared to the previous year's
                                                        figures.<br /><br />

                                                        Of special significance, the number of international offers during <b>Phase 1</b> witnessed a
                                                        remarkable
                                                        leap of <b>57%</b>, totaling <b>74</b>. The domestic placements also hit a notable mark, with the
                                                        highest
                                                        package recorded at <b>INR 1.9 crore</b>. In sum, IIT Kanpur boasts a total of <b>33</b> offers
                                                        exceeding <b>INR 1
                                                            crore</b>, originating from diverse international and national organizations.<br /><br />

                                                        Reflecting on the previous year, the culmination of <b>Phase 1</b> of the <b>2021-22</b> placement
                                                        season
                                                        featured the highest international package at <b>USD 287,550</b> and the highest domestic package
                                                        at <b>Rs.
                                                            1.2 crore</b>.<br /><br />

                                                        Prof. Abhay Karandikar, the Director of IIT Kanpur, shared his anticipation and satisfaction
                                                        regarding the <b>placement season</b>, acknowledging its significance for both students and the
                                                        institute. He commended the consistent trust showcased by recruiters and noted the ongoing growth
                                                        in <b>job domains</b> extended to students. He extended his congratulations to <b>Phase 1</b>
                                                        placed students
                                                        and expressed optimism for a similarly successful <b>second phase</b>.<br /><br />

                                                        This year, a robust interest from <b>core companies</b> marked campus hiring. A noteworthy
                                                        statistic
                                                        reveals that <b>24%</b> of the total offers made at IIT Kanpur hail from <b>core
                                                            industries</b>.<br /><br />

                                                        Prof. Raju Kumar Gupta, Chairman of the Students’ Placement Office at <b>IIT Kanpur</b>, extended
                                                        gratitude to recruiters for their steadfast support. He highlighted the substantial shift in
                                                        <b>PPOs</b>
                                                        this year, a remarkable <b>33%</b> increase from the prior year. He underscored the increased
                                                        participation from <b>core industries</b> and <b>startups</b>, expressing optimism for sustained
                                                        positive
                                                        momentum through the subsequent phases.<br /><br />

                                                        When gauged by the number of students hired, prominent recruiters this season at IIT Kanpur
                                                        include <b>Rakuten Mobile, American Express, PwC, Intel, Microsoft India, Qualcomm, EXL, Oracle
                                                            India
                                                            Pvt Ltd, SAP Labs, CapitalOne, J. P Morgan & Chase, Reliance Industries Limited, Sprinklr,
                                                            Axtria,
                                                            Texas Instruments, Axis Bank, Eaton, Quadeye Securities, HSBC, Jaguar Land Rover India Limited,
                                                            Jio Platforms Limited, Walmart Global Tech India, Wells Fargo, Airbus Group India, ICICI Lombard
                                                            GIC LTD, Larsen & Toubro Limited, and Legato Health Technologies</b>, among others.
                                                    </p>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <App_Link /> */}
        </>
    )
}

export default IIT_kanpur;