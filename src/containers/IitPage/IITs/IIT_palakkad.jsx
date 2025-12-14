import React from 'react';
import iit_palakkad from '../../../assets/IIT_images/IIT-Palakkad.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import './iit_palakkad.css';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_palakkad = () => {
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
                                    <img src={iit_palakkad} className="w-100" />
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
                                                        IIT Palakkad emerges as a <b>luminary</b> in the landscape of Palakkad, Kerala, India, <b>a public institution</b> devoted to the realms of technical acumen and research brilliance. It was developed within the evolution of the Indian Institutes of Technology (IITs), a constellation that expands via the <b>Institutes of Technology (Amendment) Act, 2011</b>, a testament to the foresight of the <b>MoHRD, GoI</b>. The institute casts its net wide, offering a suite of <b>undergraduate, postgraduate, and doctoral programs</b> in engineering, technology, sciences, and humanities.<br /><br />

                                                        At the present juncture, the institute finds its abode within the embrace of the <b>Ahalia Integrated Campus, Palakkad, Kerala</b>, a nurturing ground where ambitions grow and dreams take shape. The horizon awaits a transformation—a <b>500-acre landscape in Kanjikode, Palakkad, Kerala</b>, where the permanent campus is poised to breathe life into aspirations. This terrain stands as <b>a testament to the institute's commitment to innovation and excellence</b>. In its stride, IIT Palakkad forges collaborative alliances with <b>esteemed international and national institutions</b>, igniting a spark that propels research and academic enrichment to newer heights.
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
                                                        The year <b>2015 marked a significant chapter</b> in the annals of education as <b>IIT Palakkad</b> stepped onto the stage. A new member of the <b>Indian Institutes of Technology (IITs)</b>, an initiative of the Government of India, formed through <b>The Institutes of Technology (Amendment) Act, 2011</b>, the institute embarked on its journey.<br /><br />

                                                        At present, the institute calls <b>the Ahalia Integrated Campus, Palakkad, Kerala</b>, its home—a temporary sanctuary for aspirations. Yet, the future casts its gaze toward the sprawling expanse of <b>Kanjikode, Palakkad, Kerala—a 500-acre canvas earmarked for the institute's permanent campus</b>. With <b>sustainability at its core</b>, this canvas paints a picture of <b>solar-powered realms, rainwater harvesting, and an innovative waste management system</b>.<br /><br />

                                                        From its inception, <b>IIT Palakkad has sculpted its identity as a realm of exploration, spanning the horizons of undergraduate, postgraduate, and doctoral programs across the contours of engineering, technology, sciences, and humanities</b>. A rich tapestry of <b>research centers and collaborations with esteemed entities—both national and international—enriches its fabric, propelling the realms of research and academia</b>. Not confined to its physical realm, the institute amplifies its intellectual footprint through <b>a myriad of workshops, seminars, and conferences, nurturing the spirit of knowledge dissemination.</b>
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
                                                        IIT Palakkad, <b>a crucible of intellectual growth</b>, extends <b>a hand of opportunity</b> through its comprehensive spectrum of <b>educational avenues encompassing undergraduate, postgraduate, and doctoral dimensions</b>. Its canvas unfurls across the diverse landscape of <b>engineering, technology, sciences, and humanities</b>, beckoning curious minds to embark on <b>a transformative journey</b>.<br /><br />

                                                        At its core, IIT Palakkad presents <b>a mosaic of undergraduate programs</b>, inviting students to immerse themselves in diverse realms of knowledge:<br /><br />
                                                        <ul>
                                                            <li>B.Tech in Computer Science and Engineering</li>
                                                            <li>B.Tech in Electrical Engineering</li>
                                                            <li>B.Tech in Mechanical Engineering</li>
                                                            <li>B.Tech in Civil Engineering</li>
                                                            <li>B.Tech in Chemical Engineering</li>
                                                            <li>B.Tech in Materials Science and Engineering</li>
                                                            <li>B.Tech in Metallurgical Engineering and Materials Science</li>
                                                            <li>B.Tech in Physics</li>
                                                            <li>B.Tech in Chemistry</li>
                                                        </ul>

                                                        The narrative continues to flourish as aspirations ascend, with the institute illuminating the path toward deeper understanding and expertise through <b>postgraduate offerings</b>:<br /><br />
                                                        <ul>
                                                            <li>M.Tech</li>
                                                            <li>M.Sc</li>
                                                            <li>MBA</li>
                                                        </ul>

                                                        Fueling the pursuit of innovation and knowledge, IIT Palakkad's rich legacy endures through its diverse array of <b>doctoral programs</b>, spanning the horizons of <b>engineering, sciences, and humanities.</b>
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
                                                        In the realm of <b>IIT Palakkad</b>, the orchestration of academic courses—ranging from <b>BTech to MTech and MSc</b>—unfolds as an intricate tapestry woven by individual <b>departments</b>. These departments don the <b>dual role of architects of educational journeys and conduits for research pursuits within their specialized domains</b>.<br /><br />

                                                        However, the tapestry extends beyond departments, embracing <b>thematic interdisciplinary research centres</b>. These centres, characterized by their <b>steadfast devotion to exploration</b>, magnify their impact by offering <b>MTech programs and crafting minor courses and electives tailored to the landscape of BTech programs</b>. This comprehensive symphony of <b>academia and research forms the very essence of IIT Palakkad's pursuit of excellence</b>.
                                                    </p>
                                                    <div className="accordion faq_sec" id="accordionExample">
                                                        <div className="row">
                                                            {/* left side item  */}
                                                            <div className="col-md-6">
                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Biological Sciences
                                                                            </strong>
                                                                            <span className="ms-1">and Engineering</span>
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
                                                                                Chemistry
                                                                            </strong>
                                                                            <span className="ms-1"></span>
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

                                                                    <Accordion.Item eventKey="3" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Biological Sciences
                                                                            </strong>
                                                                            <span className="ms-1">and Engineering</span>
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
                                                                                Environmental Sciences
                                                                            </strong>
                                                                            <span className="ms-1">and Sustainable Engineering Centre</span>
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

                                                                    <Accordion.Item eventKey="4" className='my-2'>
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

                                                                    <Accordion.Item eventKey="5" className='my-2'>
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
                                                        IIT Palakkad, <b>a budding presence within the IIT fraternity</b>, is meticulously crafting its narrative of <b>industry engagement and prominence</b>. As the institute strides forward, <b>a comprehensive portrayal of placement statistics might still be in the making</b>. Guiding this journey is the <b>diligent Placement Cell</b>, steering the orchestration of the placement process for students.<br /><br />

                                                        Rooted in ambition, <b>IIT Palakkad channels its energies into cultivating a robust industry network and reputation</b>. This collective endeavour aspires to beckon an array of recruiters hailing from diverse sectors such as <b>IT, core engineering, consulting, finance, research and development, and management</b>.<br /><br />

                                                        The stage is set for <b>the placement expedition</b>, commencing in the seventh semester for undergraduates and the fifth semester for postgraduates. Anchoring this odyssey are <b>training initiatives and internships</b>, affording students <b>a preparatory arsenal for the placement arena</b>. While the percentage of students securing placements experiences fluctuations, contingent on variables like batch size and market dynamics, <b>a promising horizon awaits—a landscape where high placement rates and advantageous packages are envisioned for the majority of students</b>.
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

export default IIT_palakkad;