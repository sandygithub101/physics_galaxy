import React from 'react';
import iit_goa from '../../../assets/IIT_images/IIT-Goa.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_goa = () => {
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
                                    <img src={iit_goa} className="w-100" />
                                </div>
                                <div className="card about_think_nav">
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
                                                        Established in 2016, <b>IIT Goa</b> is known as one of the latest additions to the prestigious IITs across India. With the support of the <b>Ministry of Human Resource Development (MoHRM)</b>, the institute started its academic session in <b>2016-2017</b>. With a wide range of <b>undergraduate and postgraduate programs</b> across <b>engineering, sciences, technology, and humanities, Indian Institute of Technology Goa (IIT Goa)</b> is resolutely committed to promote <b>research & academic excellence</b>.<br /><br />

                                                        Using its strategic collaborations with renowned <b>national</b> and <b>international institutions</b>, the institute has a goal to promote <b>technology throughout India</b>. Currently located in <b>Goa</b>, this institute has a <b>temporary campus</b> basis while preparations for the <b>permanent campus</b> are in progress.
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
                                                        In the year 2016, the Ministry of Human Resource Development, GOI, supported the establishment of <b>IIT Goa</b> under the <b>Institutes of Technology (Amendment) Act, 2016. Indian Institutes of Technology Goa</b> started its journey with the advent of the academic session in <b>2016-17</b> with both <b>undergraduate and postgraduate programs</b>, encompassing diverse domains such as <b>engineering, sciences, and humanities</b>.<br /><br />

                                                        The forthcoming campus (permanent one) is all set to be a testament to <b>modernity</b>, boasting <b>sophisticated infrastructure</b> and <b>modern-age facilities</b> that align with the <b>academic and research endeavours</b> of this institute.<br /><br />

                                                        Since its beginning, <b>IIT Goa has evidenced unprecedented growth</b>, underscored by the establishment of <b>multiple research centres</b> and alliances with notable national and international institutions. These collaborative endeavours highlights the institution's steadfast commitment to <b>advancing research and academic excellence</b> throughout India. Through a vibrant calendar of <b>workshops, seminars, and conferences,</b> the institute nurtures an environment conducive to the exchange of knowledge and the pursuit of intellectual growth. <b>IIT Goa's resolute commitment</b> is centred on <b>furnishing top-tier education and training</b>, thereby preparing its students for impactful careers in both <b>industry and research</b>.
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
                                                    <p>
                                                        impactful careers in both <b>industry</b> and <b>research</b>.<br /><br />

                                                        Diverse academic horizons unfurl at <b>IIT Goa</b>, where a wide range of <b>undergraduate</b> and <b>postgraduate programs</b> across <b>engineering, technology, sciences</b>, and <b>humanities</b> are on offer.<br /><br />

                                                        Undergraduate programs:<br />

                                                        <ul>
                                                            <li>B.Tech in Computer Science and Engineering (CSE)</li>
                                                            <li>B.Tech in Electrical Engineering</li>
                                                            <li>B.Tech in Chemical Engineering</li>
                                                            <li>B.Tech in Civil Engineering</li>
                                                            <li>B.Tech in Mechanical Engineering</li>
                                                            <li>B.Tech in Materials Science and Engineering</li>
                                                        </ul>

                                                        Postgraduate programs:<br />

                                                        <ul>
                                                            <li>M.Tech</li>
                                                            <li>M.Sc</li>
                                                            <li>MBA</li>
                                                        </ul>

                                                        Furthermore, the institute fuels <b>advanced research</b> through its multifaceted <b>doctoral programs</b>, encompassing diverse realms within <b>engineering, sciences</b>, and <b>humanities</b>.
                                                    </p>
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
                                                                                School of Mathematics
                                                                            </strong>
                                                                            <span className="ms-1">and Computer Science</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="1" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Electrical Sciences</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Physical Sciences</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="3" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Mechanical Sciences</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minin voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="4" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                School of Humanities
                                                                            </strong>
                                                                            <span className="ms-1">and Social Sciences</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minin voluptate velit esse cillum dolore eu fugiat nulla
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
                                                                                School of Chemical
                                                                            </strong>
                                                                            <span className="ms-1">and Materials Science
                                                                            </span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="1" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Interdisciplinary Life Sciences</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
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
                                                        IIT Goa's permanent campus is currently under construction in Goa, and the institute is currently functioning from a temporary campus. <b>The permanent campus will be spread over an area of approximately 538 acres</b>. The campus is designed to be <b>eco-friendly and sustainable</b>, with features such as <b>solar power, rainwater harvesting, and a waste management system</b>.<br /><br />

                                                        The campus will comprise of various <b>academic and research buildings, hostels, sports facilities</b>, and <b>residential areas</b> for faculty and staff. The academic area will comprise of several modern buildings for <b>classrooms, laboratories,</b> and <b>offices</b>. The library, which is one of the main academic resources on campus, will have a collection of over <b>1,50,000 books</b> and subscriptions to several <b>national</b> and <b>international journals</b>.<br /><br />

                                                        The campus will also have several <b>research centers and labs</b> that support the research activities of the institute. Additionally, the campus will also have several amenities for students such as <b>computer centers, a health center, and a campus store</b>. The campus will also have a variety of recreational facilities, including <b>sports fields, a gym, and a student activity center</b>.<br /><br />

                                                        The hostels will be equipped with all necessary facilities such as <b>mess, common room, and 24*7 security</b>. The campus will also have a <b>guest house for the faculty, staff, and visitors</b>. The campus is expected to be well-connected to the city and have good transportation facilities with <b>regular bus service and auto-rickshaws</b>.
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

export default IIT_goa