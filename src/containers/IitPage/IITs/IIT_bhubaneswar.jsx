import React from 'react';
import iit_bhubaneswar from '../../../assets/IIT_images/IIT-Bhubaneswar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_bhubaneswar = () => {
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
                                    <img src={iit_bhubaneswar} className="w-100" />
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
                                                        IIT Bhubaneswar, founded in <b>2008</b> by the Indian government, stands as a prominent public technical university in <b>Bhubaneswar, Odisha, India</b>. The institute enrolls students for bachelor's and master's programs via <b>JEE Advanced</b> and the <b>Graduate Aptitude Test in Engineering</b>, correspondingly.<br /><br />

                                                        The auspicious inauguration of the permanent campus in <b>Argul, Khordha District</b> took place on <b>December 24, 2018</b>, with the esteemed presence of India's Prime Minister, <b>Narendra Modi</b>. The institute's research endeavours span across <b>science, engineering, and humanities domains</b>.
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
                                                        Located at the foot of <b>Barunei Hill</b>, the main campus of IIT Bhubaneswar enjoys a captivating historical backdrop. Barunei Hill's compelling history includes its steadfast resistance against British rule during <b>1803 – 1804</b> and its role in the <b>Paika Bidroha, India's inaugural struggle for independence spanning 1810 – 1817</b>.<br /><br />

                                                        Beyond its historical significance, <b>Barunei Hill</b> is a picturesque tourist destination, boasting attractions like the revered <b>Barunei temple</b>, the tranquil <b>Swarna Ganga</b>, sites connected to the <b>Pandavas' sojourn</b>, and a refreshing <b>verdant landscape</b>.<br /><br />

                                                        For several decades, there was an enduring call for the establishment of an IIT in Odisha. This demand was finally met in the year <b>2008</b> when <b>IIT Bhubaneswar</b> was founded.
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
                                                        Established on <b>July 22, 2008</b>, the <b>Indian Institute of Technology Bhubaneswar (IITBBS)</b> is dedicated to delivering exceptional engineering education through innovative curriculum approaches. Despite its recent inception, <b>IITBBS</b> has rapidly emerged as a premier technological institution in India. This ascent is fueled by a consistent focus on generating knowledge and fostering innovation, as demonstrated by its robust research endeavours and unwavering commitment to a comprehensive educational experience.<br /><br />

                                                        The institute's mission involves cultivating adaptable and dynamic <b>curricula</b> that promote <b>creativity</b> and <b>critical thinking</b>. This goal is achieved through meaningful collaborations with <b>industries</b>, providing students with a diverse range of opportunities. <b>Societies and clubs</b> spanning liberal arts, design, dramatics, robotics, music, dance, and sports enrich students' experiences, instilling values of <b>social consciousness, innovation, entrepreneurship</b>, and a <b>thirst for exploration</b>.<br /><br />

                                                        Nestled in the historically significant state of <b>Odisha, India</b>, the institute conducts all academic activities at its charming permanent campus in <b>Argul</b>. Encompassing <b>936 acres</b> of land, this campus offers a serene and pollution-free atmosphere, nestled at the foothills of the majestic <b>Barunei mountain range</b>. These foothills hold connections to <b>India's struggle for independence</b>, adding an additional layer of historical significance to the institute's surroundings.

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
                                                                                Basic
                                                                            </strong>
                                                                            <span className="ms-1">Sciences</span>
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
                                                                                Earth, Ocean
                                                                            </strong>
                                                                            <span className="ms-1">and Climate Sciences</span>
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
                                                                                Electrical
                                                                            </strong>
                                                                            <span className="ms-1">Sciences</span>
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
                                                                                humanities,
                                                                            </strong>
                                                                            <span className="ms-1">Social Sciences and Management</span>
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
                                                                                Infrastructure
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
                                                                                Mechanical
                                                                            </strong>
                                                                            <span className="ms-1">Sciences</span>
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

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19", fontSize: '15px' }}>
                                                                                Minerals, Metallurgical
                                                                            </strong>
                                                                            <span className="ms-1" style={{ fontSize: '14px' }}>and Materials Engineering</span>
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
                                                        <table className="table table-striped">
                                                            <tr>
                                                                <td className="p-2 border table-primary">Branch</td>
                                                                <td className="table-secondary p-2 border">2017-2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2 border table-primary">CSE</td>
                                                                <td className="table-secondary p-2 border">100%</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2 border table-primary">EE</td>
                                                                <td className="table-secondary p-2 border">83.3%</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2 border table-primary">MMME</td>
                                                                <td className="table-secondary p-2 border">88.88%</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2 border table-primary">ME</td>
                                                                <td className="table-secondary p-2 border">91.42%</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2 border table-primary">Civil</td>
                                                                <td className="table-secondary p-2 border">62%</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2 border table-primary">Overall</td>
                                                                <td className="table-secondary p-2 border">87%</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-2 border table-primary">Overall Average Salary</td>
                                                                <td className="table-secondary p-2 border">11.15L</td>
                                                            </tr>
                                                        </table>
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

export default IIT_bhubaneswar