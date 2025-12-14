import React from "react";
import Ab_think_navbar from "../ab_think_navbar/Ab_think_navbar";
import iit_bombay from "../../../assets/IIT_images/IIT-Bombay.jpg";
// import App_Link from "../app_link/App_Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft,
    faLink,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, Tab, Accordion } from "react-bootstrap";
import Student_select from "../student_select/Student_select";
import Academic from "../academic_admission/Academic";

function IIT_bombay() {
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
                                    <img src={iit_bombay} className="w-100" />
                                </div>
                                <div className="card about_think_nav">
                                    {/* iits nav tabs  */}
                                    <div className="py-2 about_think_card_heading">

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
                                                        Established in <b>1958</b> with financial support from <b>UNESCO</b>, IIT Bombay ranks among
                                                        India's premier IIT colleges and is situated in <b>Powai</b>. Currently, it holds a distinguished
                                                        position among the world's top technical institutions, specializing in <b>engineering and research
                                                            education</b>. Acknowledging its eminence, the Ministry of Human Resources & Development
                                                        bestowed upon IIT Bombay the coveted status of an Institute of Eminence, which grants it enhanced
                                                        autonomy and government funding.<br /><br />
                                                        The institution is particularly well-known for its <b>diverse program</b>. Entry into these
                                                        programs is facilitated through the <b>JEE Exam</b>, with the authorities subsequently releasing
                                                        the JEE Advanced cutoff for IIT Bombay through online channels. This cutoff delineates the minimum
                                                        rank requisite for securing admission into various <b>B.Tech</b> courses proffered by the
                                                        institute. Additionally, IIT Bombay extends <b>short-term</b> and <b>distance learning</b>
                                                        programs to cater to diverse learning needs.
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
                                                        A top-notch committee of the Indian Government, chaired by <b>Sir Nalini Ranjan Sarkar</b> – a
                                                        renowned
                                                        businessman, industrialist, and public figure – put forth a recommendation in the year <b>1946</b>
                                                        to
                                                        establish 4 advanced institutes of technology similar to the institutes available in <b>Europe</b>
                                                        and
                                                        the <b>United States of America</b>. This is one of the biggest initiatives with a primary goal of
                                                        improving technical education in <b>India</b>. This committee proposed the development of
                                                        nationally
                                                        significant institutes across various regions of <b>India</b>. IIT Bombay was instituted in
                                                        <b>1958</b>,
                                                        followed by <b>IIT Madras (1959)</b>, <b>IIT Kanpur (1959)</b>, and <b>IIT Delhi (1961)</b>. The
                                                        name of Bombay has
                                                        changed to Mumbai but the institute has retained its original title which is also known as
                                                        <b> IITB</b>.<br /><br />
                                                        The institute received substantial aid in the form of equipment and specialized services from the
                                                        <b>USSR via UNESCO</b> between the period of <b>1956</b> and <b>1973</b>. It benefitted from the
                                                        expertise of <b> 59
                                                            professionals</b> and <b>14 technicians</b> from esteemed institutions within the USSR. UNESCO
                                                        also
                                                        extended <b>27 fellowships</b> for training Indian faculty members in the USSR. In accordance with
                                                        a
                                                        bilateral
                                                        agreement in <b>1965</b>, the USSR Government provided supplementary assistance to augment the Aid
                                                        Programme already channelled to the institute through UNESCO.
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
                                                    <div className="py-2">
                                                        <h3>Department</h3>
                                                    </div>
                                                    <p>
                                                        IAt IIT Bombay, <b>science-driven</b> engineering education takes centre stage, aiming to cultivate
                                                        a
                                                        cadre of <b>exceptional engineer-scientists</b>. The curriculum not only imparts diverse knowledge
                                                        but
                                                        also instills a disposition for perpetual learning and exploration. The Department's multifaceted
                                                        initiatives encompass <b>comprehensive teaching</b> and pioneering research across all echelons.
                                                    </p>
                                                    <div className="accordion faq_sec" id="accordionExample">
                                                        <div className="row">
                                                            {/* left side item  */}
                                                            <div className="col-md-6">
                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Applied
                                                                            </strong>
                                                                            <span className="ms-1">Machanics</span>
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
                                                                                Biochemical
                                                                            </strong>
                                                                            <span className="ms-1">Engineering and Biotechnology</span>
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
                                                                                Chemical
                                                                            </strong>
                                                                            <span className="ms-1"> Engineering</span>
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
                                                                                Chemistry
                                                                            </strong>
                                                                            <span className="ms-1"></span>
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

                                                                    <Accordion.Item eventKey="5" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Computer Science
                                                                            </strong>
                                                                            <span className="ms-1">and Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="6" className='my-2'>
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

                                                                    <Accordion.Item eventKey="7" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Electrical
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                                Energy Science
                                                                            </strong>
                                                                            <span className="ms-1">and Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    {/* <Accordion.Item eventKey="2" className='my-2'>
                                                                <Accordion.Header>
                                                                    <strong style={{ color: "#ffba19", fontSize: '15px' }}>
                                                                        Humanities
                                                                    </strong>
                                                                    <span className="ms-1" style={{ fontSize: '14px' }}>
                                                                        & Social Sciences
                                                                    </span>
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                                </Accordion.Body>
                                                            </Accordion.Item> */}

                                                                    <Accordion.Item eventKey="3" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Management
                                                                            </strong>
                                                                            <span className="ms-1"> Studies</span>
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
                                                                                Textile
                                                                            </strong>
                                                                            <span className="ms-1">& Fibre Engineering</span>
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
                                                                                Materials
                                                                            </strong>
                                                                            <span className="ms-1">
                                                                                Science and Engineering
                                                                            </span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="6" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Mathematics
                                                                            </strong>
                                                                            <span className="ms-1"></span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="7" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Mechanical
                                                                            </strong>
                                                                            <span className="ms-1"></span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="8" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Physics
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
                                                        Amid the COVID-19 pandemic constraints, recruitment processes were conducted virtually by
                                                        companies throughout the placement season for the academic year <b>2021-22</b>. Notably, the count
                                                        of
                                                        students registering for the <b>2021-2022</b> placement drive has surged by 15%, as compared to
                                                        the
                                                        figures from two years prior – specifically escalating from 1784 in 2019 to 2056 in 2021. A
                                                        significant achievement this year for IIT Bombay is the record-breaking number of students
                                                        <b>successfully placed</b>, with the tally of accepted job offers <b>totalling</b> 1431 by May
                                                        15th, as opposed
                                                        to the 1150 placements recorded the previous year.<br /><br />
                                                        This impressive increase of 25% in the total number of <b>placed students</b> reflects a
                                                        heightened
                                                        demand and increased selections. When considering the complete cohort of participating students,
                                                        the <b>Placement percentage</b> stands commendably at 88.77%. Furthermore, the overall average
                                                        <b>salary
                                                            package</b>, determined by the CTC offered, has witnessed a substantial surge of 27.3% from the
                                                        preceding year – advancing from Rs. 17.91 LPA to Rs. 22.8 LPA. This augmentation can be attributed
                                                        to the resurgence of <b>job opportunities</b> following the post-COVID-19 resumption of economic
                                                        activities. During the internship recruitment phase, a noteworthy 1087 students secured coveted
                                                        apprenticeship opportunities, marking a fifteen percent (15%) rise in demand <b>vis-à-vis</b> the
                                                        previous year.<br /><br />
                                                        An illustrative insight is the elevation in the count of companies proffering job opportunities –
                                                        ascending by 11% from 292 firms in the preceding year to a participation of <b>325 companies</b>
                                                        this
                                                        year. The placement proceedings were seamlessly executed in two distinct phases, robustly
                                                        underscoring the robust demand for IIT Bombay graduates across <b>various sectors</b> of the
                                                        economy. The
                                                        unwavering endeavours of the Placement team are evident in their achievement of the
                                                        <b>highest-ever
                                                            number of student placements</b>, truly reflecting their commitment to fostering a plethora of
                                                        employment avenues.
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
        </>
    );
}

export default IIT_bombay;
