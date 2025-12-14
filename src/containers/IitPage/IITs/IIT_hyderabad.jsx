import React from 'react';
// import App_Link from '../app_link/App_Link';
import iit_hyderabad from '../../../assets/IIT_images/IIT-Hyderabad.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
// import Ab_think_navbar from '../ab_think_navbar/Ab_think_navbar';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_hyderabad = () => {
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
                                    <img src={iit_hyderabad} className="w-100" />
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
                                                        Located in <b>Hyderabad</b>, <b>Telangana, India, IIT Hyderabad</b> is a <b>public institution</b> devoted to technical excellence and research. Among the <b>Indian Institutes of Technology (IITs)</b>, this institution was founded in <b>2008</b>.<br /><br />

                                                        Its expansive <b>558-acre campus</b> serves as an intellectual haven, providing a comprehensive spectrum of academic offerings, including <b>undergraduate, postgraduate, and doctoral programs</b> spanning <b>engineering, technology, sciences, and humanities</b>. Bolstered by robust international collaborations, the institute's research frontiers extend to vital domains like <b>computer science, materials science, and biomedical engineering</b>.
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
                                                        In <b>2008</b>, the <b>Indian Institute of Technology Hyderabad (IIT Hyderabad)</b> emerged as a notable addition to the roster of <b>Indian Institutes of Technology (IITs)</b>, resulting from the proactive initiatives of the <b>Ministry of Human Resource Development, Government of India</b>. The pivotal moment arrived on <b>February 20, 2007</b>, when the institution's foundation stone was ceremoniously laid by the esteemed former President of India, <b>Dr. A.P.J. Abdul Kalam</b>.<br /><br />

                                                        Commencing its educational endeavours, <b>IIT Hyderabad</b> commenced operations from its provisional campus situated at <b>Ordnance Factory Medak's (OFMK) premises</b> in <b>Yeddumailaram</b>. This chapter transitioned to a <b>permanent campus</b> located in the scenic <b>Kandi region of Sangareddy district</b>.<br /><br />

                                                        Esteemed for its <b>commitment to sustainability</b> and <b>environmental consciousness</b>, the campus was meticulously designed to prioritize <b>eco-friendly practices</b>. Anchored by modern <b>classrooms, laboratories, workshops, and computer centers</b>, the academic realm provides an enriching platform for learning.<br /><br />

                                                        Presenting a comprehensive academic portfolio, <b>IIT Hyderabad</b> offers a diverse range of programs encompassing <b>undergraduate, postgraduate, and doctoral studies</b> across <b>engineering, technology, sciences, and humanities</b>. The institute's global perspective is bolstered by strategic partnerships with international universities and research organizations, propelling its research thrusts. Among these, <b>computer science, materials science, and biomedical engineering</b> stand as prominent domains of exploration.
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
                                                    <div className="accordion faq_sec" id="accordionExample">
                                                        <div className="row">
                                                            {/* left side item  */}
                                                            <div className="col-md-6">

                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Artificial
                                                                            </strong>
                                                                            <span className="ms-1">Intelligence</span>
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
                                                                                Biomedical
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                                Biotechnology
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
                                                                                Chemical
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
                                                                                Climate
                                                                            </strong>
                                                                            <span className="ms-1">Change</span>
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

                                                                    <Accordion.Item eventKey="1" className='my-2'>
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

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19", fontSize: '15px' }}>
                                                                                Electrical
                                                                            </strong>
                                                                            <span className="ms-1" style={{ fontSize: '14px' }}>Engineering</span>
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
                                                                                Engineering Sciences
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
                                                                                Heritage
                                                                            </strong>
                                                                            <span className="ms-1">Science and Technology</span>
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
                                                                            <span className="ms-1">Science and Metallurgical Engineering</span>
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
                                                                                Mechanical & Aerospace
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                                Center
                                                                            </strong>
                                                                            <span className="ms-1">for Interdisciplinary program</span>
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
                                                        <b>IIT Hyderabad's placement accomplishments shine brightly</b>, with a significant multitude of students securing prime positions within leading enterprises annually. Steering this achievement is the <b>Training and Placement Cell</b>, the institute's adept arm responsible for orchestrating and facilitating the placement voyage for students.<br /><br />

                                                        With a distinguished standing in the professional realm, <b>IIT Hyderabad</b> garners a diverse lineup of recruiters representing sectors ranging from <b>IT and core engineering to consulting, finance, and research</b>. Esteemed names such as <b>Google, Microsoft, Amazon, Flipkart, and Goldman Sachs</b> are among the companies that actively engage with the campus for recruitment endeavours.<br /><br />

                                                        The placement voyage sets sail in the <b>seventh semester for undergraduates</b> and the <b>fifth semester for postgraduates</b>. To further bolster students' readiness, the institute extends <b>training initiatives and internships</b> that contribute to their preparation for the placement phase. While the placement percentage is influenced by factors like batch strength and market dynamics, the institute maintains an <b>unwaveringly strong placement rate</b>. A significant majority of students secure promising roles accompanied by commendable packages.
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

export default IIT_hyderabad;