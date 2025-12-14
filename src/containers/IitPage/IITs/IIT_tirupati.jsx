import React from 'react';
import iit_tirupati from '../../../assets/IIT_images/IIT-Tirupati.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_tirupati = () => {
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
                                    <img src={iit_tirupati} className="w-100" />
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
                                                        In the vibrant tapestry of <b>Tirupati, Andhra Pradesh, Indian Institute of Technology Tirupati (IIT Tirupati)</b> takes its place as <b>a public technical and research university</b>. An integral part of the newer lineage of <b>Indian Institutes of Technology (IITs)</b>, its inception found roots through <b>The Institutes of Technology (Amendment) Act, 2011, a testament to its commitment to excellence</b>.<br /><br />

                                                        The institute's canvas of education stretches wide, housing diverse <b>undergraduate, postgraduate, and doctoral programs</b> that span <b>engineering, technology, sciences, and humanities</b>. Presently, its academic journey is nurtured within the precincts of its <b>temporary campus in Tirupati, Andhra Pradesh</b>, while <b>a grander vision awaits realization on a sprawling 538-acre plot in Merlapaka village, Tirupati</b>.<br /><br />

                                                        IIT Tirupati thrives on collaboration, fostering connections with esteemed <b>international and national institutes</b> to fuel the flames of <b>research and academic progress</b>.
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
                                                        Embarking on its academic odyssey in <b>2015, Indian Institute of Technology Tirupati (IIT Tirupati)</b> emerges as a product of visionary legislation—the offspring of <b>The Institutes of Technology (Amendment) Act, 2011</b>. This IIT lineage of eight new institutions, marked by their commitment to progress, finds manifestation in <b>IIT Tirupati</b>. The inaugural academic year of <b>2015-16</b> unveiled the institute's maiden offerings: <b>undergraduate programs in Computer Science and Engineering, Electrical Engineering, and Mechanical Engineering</b>.<br /><br />

                                                        In the present epoch, <b>IIT Tirupati thrives within the precincts of its temporary campus in Tirupati, Andhra Pradesh</b>. Yet, it looks to the horizon with anticipation as <b>a permanent campus unfurls its potential across a sprawling 538 acres in Merlapaka village, Tirupati</b>. This visionary canvas is infused with <b>a commitment to sustainability, housing sustainable features like solar power generation, rainwater harvesting, and a futuristic waste management system</b>.<br /><br />

                                                        Over the years, <b>IIT Tirupati's narrative has evolved, embracing a rich spectrum of undergraduate, postgraduate, and doctoral programs spanning the realms of engineering, technology, sciences, and humanities</b>. As a harbinger of collaboration, the institute has nurtured <b>research centers and forged partnerships with distinguished national and international institutions, fostering a fertile ground for research and academic growth</b>. Amidst this academic vibrancy, the institute also serves as <b>a crucible for knowledge-sharing and learning, orchestrating a myriad of workshops, seminars, and conferences</b>.
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
                                                        IIT Tirupati orchestrates a comprehensive educational spectrum embracing undergraduate, postgraduate, and doctoral endeavours spanning diverse realms of <b>engineering, technology, sciences, and humanities</b>. At the undergraduate level, the institute unfurls an array of <b>B.Tech programs</b>:<br /><br />

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

                                                        Furthermore, the institute extends opportunities for postgraduate enrichment, encompassing <b>M.Tech, M.Sc, and MBA programs</b>, while its commitment to advanced research and scholarship is evidenced by the diverse spectrum of <b>doctoral programs spanning engineering, sciences, and humanities</b>.
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
                                                        At IIT Palakkad, the academic journey of students in <b>BTech, MTech, and MSc programs</b> is a symphony orchestrated by individual <b>departments—each an architect of knowledge, an enabler of growth</b>. As guardians of specialized fields, these departments curate <b>educational experiences that transcend the conventional, instilling excellence and shaping minds</b>.<br /><br />

                                                        Yet, their contributions ripple beyond <b>conventional confines</b>. Some departments, in their pursuit of enriching education, introduce <b>minor streams that offer a kaleidoscope of perspectives to students, adding hues of versatility to their academic palette</b>. It's not just diversity within a domain but also <b>the creation of bridges between different domains that defines IIT Palakkad's interdisciplinary approach</b>.
                                                    </p>
                                                    <div className="accordion faq_sec" id="accordionExample">
                                                        <div className="row">
                                                            {/* left side item  */}
                                                            <div className="col-md-6">
                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Chemical
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                            <span className="ms-1">& Environmental Engineering</span>
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
                                                                                Computer Science
                                                                            </strong>
                                                                            <span className="ms-1">and Engineering</span>
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
                                                                            <span className="ms-1">and Social Science</span>
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
                                                                            <span className="ms-1">& Statistic</span>
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
                                                        IIT Tirupati, in its nascent stage as a newly established IIT, is proactively crafting its identity and resonance within the industry landscape. Consequently, comprehensive data on <b>placement statistics might be relatively limited at this juncture</b>. Orchestrating this intricate process is the institute's <b>dedicated placement cell</b>, entrusted with the coordination and orchestration of the placement mechanisms for the student cohort. With a fervent focus on augmenting its standing and cultivating industry affiliations, the institute endeavours to entice an expansive array of recruiters hailing from diverse sectors such as <b>IT, core engineering, consulting, finance, research and development, and management</b>.<br /><br />

                                                        For undergraduates, the <b>placement timeline typically unfolds in the seventh semester</b>, whereas <b>postgraduate students initiate their placement journey in the fifth semester</b>. The institute underscores the significance of equipping students for this pivotal phase through <b>comprehensive training and immersive internships</b>, tailored to enhance their preparedness for the impending placement drive. While the exact <b>percentage of students attaining placements can vary based on batch size and the prevalent job market landscape</b>, a sanguine projection envisages <b>a high placement rate</b>. This anticipates that a substantial majority of students will secure placements characterized by <b>commendable compensation packages</b>.
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

export default IIT_tirupati;