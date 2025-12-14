import React from 'react';
// import App_Link from '../app_link/App_Link';
import iit_jodhpur from '../../../assets/IIT_images/IIT-Jodhpur.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
// import Ab_think_navbar from '../ab_think_navbar/Ab_think_navbar';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_jodhpur = () => {
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
                                    <img src={iit_jodhpur} className="w-100" />
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
                                                        Situated in Jodhpur, Rajasthan, India, the <b>Indian Institute of Technology Jodhpur</b> aka <b>IIT Jodhpur</b> emerges as one of the pivotal hubs for technical prowess and research acumen. As a constituent of the group of new Indian Institutes of Technology (IITs), brought to life by the Ministry of Human Resource Development, Government of India, through <b>The Institutes of Technology (Amendment) Act, 2011,</b> IIT Jodhpur serves as a beacon of educational advancement.<br /><br />

                                                        The institute's academic spectrum encompasses a spectrum of undergraduate, postgraduate, and doctoral programs spanning <b>Engineering, Sciences, Humanities</b>, and <b>management</b> domains. Boasting an extensive campus sprawling across an expanse of around <b>852 acres</b>, IIT Jodhpur proudly fosters strategic collaborations with esteemed national and international institutes, thereby kindling the flames of research and enhancing the tapestry of academic offerings.
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
                                                        Emerging in 2008 as a constituent of the fresh cohort of <b>Indian Institutes of Technology (IITs),</b> IIT Jodhpur's inception was made possible through the Ministry of Human Resource Development, Government of India's enactment of <b>The Institutes of Technology (Amendment) Act, 2011</b>. Inaugurating its maiden academic session in <b>2008-09</b>, the institute introduced a slate of undergraduate programs, encompassing fields like <b>Computer Science and Engineering, Electrical Engineering, Mechanical Engineering</b>, and <b>Physics</b>.<br /><br />

                                                        Located on a sprawling <b>852-acre terrain</b> adjacent to the awe-inspiring Mehrangarh Fort in Jodhpur, Rajasthan, the <b>IIT Jodhpur campus</b> stands as an embodiment of <b>environmental responsibility and sustainability</b>. Its blueprint integrates forward-looking elements such as <b>solar energy harnessing, rainwater preservation</b>, and a robust <b>waste management framework</b>, collectively forming a harmonious ecosystem.
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
                                                        Academic programs offered by the IIT Jodhpur institute include:
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

                                                    <div className="accordion faq_sec" id="accordionExample">
                                                        <div className="row">
                                                            {/* left side item  */}
                                                            <div className="col-md-6">
                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Bioscience
                                                                            </strong>
                                                                            <span className="ms-1">and Bioengineering</span>
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

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Civil
                                                                            </strong>
                                                                            <span className="ms-1">and Infrastructure Engineering</span>
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
                                                                                Computer
                                                                            </strong>
                                                                            <span className="ms-1">Science & Engineering</span>
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
                                                                                Humanities
                                                                            </strong>
                                                                            <span className="ms-1">& social sciences</span>
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

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19", fontSize: '15px' }}>
                                                                                Mechanical
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
                                                                                Metallurgical
                                                                            </strong>
                                                                            <span className="ms-1">& Materials Engineering</span>
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
                                                        IIT Jodhpur maintains an impressive history of placements, regularly facilitating the successful placement of a substantial number of students across top-tier companies each year. Guiding this endeavour is the institute's Training and Placement Cell, aptly titled the <b>Training and Placement Cell</b>, responsible for orchestrating the student placement process with finesse.<br /><br />

                                                        Endowed with a prestigious standing within the industry, IIT Jodhpur effectively draws the attention of an extensive pool of recruiters spanning various sectors, including <b>IT, core engineering, consulting, finance, research and development</b>, and <b>management</b>. Eminent corporations like <b>Google, Microsoft, Amazon, Flipkart</b>, and <b>Goldman Sachs</b> are among the distinguished entities that frequent the campus for recruitment endeavours.<br /><br />

                                                        The placement timeline typically commences during the <b>seventh semester</b> for undergraduates and the <b>fifth semester</b> for postgraduates, ensuring strategic synchronization. Additionally, the institute proactively bolsters students' preparedness by providing <b>training initiatives</b> and <b>internships</b>.<br /><br />

                                                        While the proportion of placed students experiences annual fluctuations influenced by batch size and market dynamics, the institute consistently maintains an impressive <b>placement rate</b>, with a significant majority securing lucrative packages. For instance, the batch of 2021 attained a median salary of approximately <b>15 Lakhs per Annum</b>.
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

export default IIT_jodhpur;