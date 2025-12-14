import React from 'react';
import iit_dhanbad from '../../../assets/IIT_images/IIT-Dhanbad.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_dhanbad = () => {
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
                                    <img src={iit_dhanbad} className="w-100" />
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
                                                        Nestled in <b>Dhanbad, Jharkhand, India, IIT Dhanbad</b> commands distinction as <b>a venerable public technical and research university</b>. With an enduring legacy, it ranks among India's earliest <b>Indian Institutes of Technology (IITs)</b>, tracing its origins back to <b>1926</b> when it emerged as the <b>Indian School of Mines (ISM) Dhanbad</b>. The transformative epoch dawned in <b>2016</b>, as it attained the esteemed <b>IIT status</b> through <b>The Institutes of Technology (Amendment) Act, 2011</b> passed by the <b>Ministry of Human Resource Development, Government of India</b>. Reverberating with intellectual dynamism, <b>IIT Dhanbad</b> extends <b>a comprehensive spectrum of academic pursuits spanning undergraduate, postgraduate, and doctoral domains</b>, enshrining disciplines encompassing <b>engineering, technology, sciences, and humanities</b>. With its precincts situated in <b>the heart of the coal mining hub</b>, its campus stands as <b>a crucible for innovative ideas and inter-disciplinary exchange</b>, bolstered by steadfast affiliations with <b>esteemed international and national counterparts</b>, fostering the nurturing ground for progressive research and academic advancement.
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
                                                        A testament to its founding in <b>1926, IIT Dhanbad's genesis unfolds in Dhanbad, Jharkhand</b>, where the <b>Indian School of Mines (ISM)</b> came to life, pioneering education and training in <b>mining and mineral engineering</b>. This historical chapter holds intrinsic value, having significantly shaped India's <b>mining and mineral sectors</b>.<br /><br />

                                                        A defining chapter emerged in <b>2016</b> as <b>ISM Dhanbad was elevated to an Indian Institute of Technology (IIT)</b> under <b>The Institutes of Technology (Amendment) Act, 2011</b>, a landmark move orchestrated by the <b>Ministry of Human Resource Development, Government of India</b>. This transformation was <b>a springboard for IIT Dhanbad's growth</b>, forging <b>an inclusive academic landscape spanning engineering, technology, sciences, and humanities</b>.<br /><br />

                                                        Embedded in its DNA is <b>an unrelenting pursuit of research and innovation</b>, embodied by <b>an intricate mosaic of research centers and partnerships with esteemed national and international institutions</b>. This ethos resonates through <b>its diverse student collective and dedicated faculty</b>, united by <b>a shared commitment to delivering education that epitomizes excellence</b>.<br /><br />

                                                        Hand in hand with its academic mission, <b>IIT Dhanbad embraces its role as a steward of society, channeling its energy into community service and outreach endeavours that ripple with impact, fostering education and development in the regions it touches</b>.
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
                                                        IIT Dhanbad's academic mosaic is an intricate blend of <b>undergraduate, postgraduate, and doctoral avenues spanning engineering, technology, sciences, and humanities</b>. The institute's undergraduate realm comprises:<br /><br />

                                                        <ul>
                                                            <li>B.Tech in Mining Engineering</li>
                                                            <li>B.Tech in Petroleum Engineering</li>
                                                            <li>B.Tech in Computer Science and Engineering</li>
                                                            <li>B.Tech in Electrical Engineering</li>
                                                            <li>B.Tech in Mechanical Engineering</li>
                                                            <li>B.Tech in Civil Engineering</li>
                                                            <li>B.Tech in Environmental Engineering</li>
                                                            <li>B.Tech in Materials Science and Engineering</li>
                                                            <li>B.Tech in Geological Technology</li>
                                                        </ul>

                                                        Beyond this, IIT Dhanbad extends an array of <b>postgraduate offerings, embracing M.Tech, M.Sc, MBA, and M.Phil programs</b>. The institute's commitment to advanced exploration is manifested through <b>its diverse doctoral programs spanning engineering, sciences, and humanities</b>.
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
                                                                            <span className="ms-1">Geology</span>
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
                                                                                Applied
                                                                            </strong>
                                                                            <span className="ms-1">Geophysics</span>
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
                                                                                Chemical
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minin voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="3" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Chemistry
                                                                            </strong>
                                                                            <span className="ms-1">and Chemical Biology</span>
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
                                                                                Civil
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minin voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="5" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Computer
                                                                            </strong>
                                                                            <span className="ms-1">Science and Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minin voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="6" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Electrical
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minin voluptate velit esse cillum dolore eu fugiat nulla
                                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>

                                                                    <Accordion.Item eventKey="7" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Electronics
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                                Environmental
                                                                            </strong>
                                                                            <span className="ms-1">Science & Engineering</span>
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
                                                                                Fuel, Minerals
                                                                            </strong>
                                                                            <span className="ms-1">and Metallurgical Engineering
                                                                            </span>
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
                                                                                Humanities
                                                                            </strong>
                                                                            <span className="ms-1" style={{ fontSize: '14px' }}>and Social Sciences</span>
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
                                                                                Management Studies
                                                                            </strong>
                                                                            <span className="ms-1">and Industrial Engineering</span>
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
                                                                                Mathematics
                                                                            </strong>
                                                                            <span className="ms-1">and Computing</span>
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

                                                                    <Accordion.Item eventKey="6" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Mining
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
                                                                                Petroleum
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                        IIT Dhanbad houses <b>a dedicated placement cell</b>, orchestrating and navigating the labyrinth of placements for its students. Within the industry, the institute holds <b>a sturdy stature</b>, pulling in <b>an eclectic array of recruiters hailing from IT, core engineering, consulting, finance, research and development, and management domains</b>.<br /><br />

                                                        With the advent of <b>the seventh semester for undergraduates and the fifth for postgraduates</b>, the curtains rise on the placement spectacle. Backed by <b>training and internships</b>, students are honed and primed for the rendezvous with recruitment. The outcome is <b>a robust placement rate</b>, ushering <b>a significant majority into roles bedecked with compelling remuneration</b>.<br /><br />

                                                        An analysis of the institute's official records discloses <b>a consistently commendable average placement rate, spanning 80-90% across recent years</b>. Particularly laudable is <b>the prevalence of placements in core engineering companies and Research and Development organizations</b>. The list of eminent campus visitors reads like <b>a who's who, featuring luminaries like TATA Steel, SAIL, ONGC, BHEL, Coal India Limited, Deloitte, Infosys, Tata Consultancy Services (TCS), and more</b>.
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

export default IIT_dhanbad