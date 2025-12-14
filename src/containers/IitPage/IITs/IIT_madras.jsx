import React from 'react'
// import App_Link from '../app_link/App_Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iit_madras from '../../../assets/IIT_images/IIT-Madras.jpg';
// import Ab_think_navbar from '../ab_think_navbar/Ab_think_navbar';
import { faHouse, faLink } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Tabs, Tab, Accordion } from "react-bootstrap";

const IIT_madras = () => {
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
                                    <img src={iit_madras} className="w-100" />
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
                                                        The Indian Institute of Technology Madras stands as a beacon of distinction, garnering
                                                        <b>accolades</b>
                                                        both on the national and international stages for its sterling contributions to <b>technical
                                                            education</b>, fundamental and applied <b>research, innovation, entrepreneurship,</b> and
                                                        <b>industrial
                                                            consultancy</b>. A <b>faculty</b> esteemed across the globe, a <b>student community</b> driven
                                                        by zeal and
                                                        intellectual prowess, proficient <b>technical and support staff</b>, and an <b>administrative
                                                            machinery</b>
                                                        characterized by efficiency – all coalesce to solidify IIT Madras's eminent position.<br /><br />
                                                        The Institute takes justifiable pride in its mantle as the <b>premier engineering</b> university
                                                        in
                                                        India. In a more recent testament to its eminence, IIT Madras has been bestowed with the coveted
                                                        designation of an <b>Institute of Eminence.</b><br />
                                                        IIT Madras functions as a <b>residential edifice</b>, providing domicile to an approximate
                                                        <b>faculty tally</b>
                                                        of 550, an assembly of <b>8000 students</b>, and a <b>supportive staff complement</b> of 1250. It
                                                        is an
                                                        <b>autonomous enclave</b> encompassing a <b>verdant expanse</b> spanning roughly <b>250
                                                            hectares</b>. This <b>picturesque
                                                                campus</b> finds its haven in Chennai, previously recognized as Madras, which presently holds
                                                        the
                                                        mantle of being the capital of Tamil Nadu – a southern Indian state.<br /><br />
                                                        Within the Institute's precincts thrive <b>sixteen academic departments</b>, accompanied by select
                                                        <b>advanced research centres</b> spanning domains as diverse as engineering and pure sciences. The
                                                        academic landscape flourishes with nearly <b>100 laboratories</b>, meticulously arrayed in a
                                                        configuration that distinguishes the Institute's approach.
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
                                                        IIT Madras has solidified its position as a premier hub for <b>education, research</b>, and
                                                        <b>industrial
                                                            consultancy</b> on the national stage. This distinction is fortified by its cadre of <b>16
                                                                academic
                                                                departments</b> and a constellation of <b>advanced research centres</b> spanning diverse
                                                        academic domains.
                                                        The bedrock of the Institute's curriculum furnishes students with a robust and comprehensive
                                                        academic foundation, a shared <b>stepping stone</b> propelling them toward specialized courses
                                                        germane to
                                                        their chosen fields.<br /><br />
                                                        The academic framework and instructional methodology at IIT Madras deeply engage students'
                                                        intellectual faculties, catalyzing the pragmatic application of technical knowledge, nurturing the
                                                        seeds of <b>creative thinking</b>, and cultivating a capacity for <b>critical evaluation</b>, all
                                                        the while nurturing attributes of <b>leadership</b> and an <b>entrepreneurial mindset</b>.
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
                                                    <h3>Department</h3>
                                                    <p>
                                                        IIT Madras has various <b>departments</b> that provide <b>education training</b> in science so
                                                        that they
                                                        contribute to the growth of India. In every department, a <b>comprehensive curriculum</b> is
                                                        followed.
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

                                                                    <Accordion.Item eventKey="2" className='my-2'>
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

                                                                    <Accordion.Item eventKey="3" className='my-2'>
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

                                                                    <Accordion.Item eventKey="4" className='my-2'>
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

                                                                    <Accordion.Item eventKey="5" className='my-2'>
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

                                                                    <Accordion.Item eventKey="5" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Ocean
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                                Metallurgical
                                                                            </strong>
                                                                            <span className="ms-1">and Materials Engineering</span>
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
                                                        In the realm of 2022 placements, IIT Madras marked a remarkable milestone, with the <b>highest
                                                            package</b> scaling an impressive INR 2.14 crore per annum, exclusively benefiting BTech/ DD/
                                                        IDDD
                                                        students.<br /><br />

                                                        Today, the Indian Institute of Technology (IIT) Madras embarked on its <b>placement endeavours</b>
                                                        for
                                                        the academic year 2022-23. A noteworthy cohort of <b>25 students</b> secured packages exceeding Rs
                                                        1
                                                        crore this year. The culmination of <b>session 1.1</b> on the first day of placements witnessed
                                                        the
                                                        successful placement of <b>445 students</b>.<br /><br />

                                                        This year, IIT-Madras attained an <b>unprecedented feat</b> by notching up the <b>highest-ever
                                                            count</b> of pre-placement offers, signifying a nearly 10 percent augmentation compared to the
                                                        previous year's figure.<br /><br />

                                                        Prominent enterprises emerging as the front-runners in offering placements to IIT-Madras students
                                                        this year encompass <b>Texas Instruments</b> (14 offers), <b>Bajaj Auto Ltd. & Chetak Tech.
                                                            Ltd.</b> (10
                                                        offers), <b>Qualcomm</b> (8 offers), <b>J P Morgan Chase & Co</b> (9 offers), <b>Proctor &
                                                            Gamble</b> (7 offers),
                                                        <b>Morgan Stanley</b> (6 offers), <b>Graviton</b> (6 offers), <b>McKinsey & Company</b> (5
                                                        offers), and <b>Cohesity</b> (5
                                                        offers).
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

export default IIT_madras;