import React from 'react';
import iit_bhilai from '../../../assets/IIT_images/IIT-Bhilai.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import { Accordion, Tab, Tabs } from 'react-bootstrap';
import Academic from '../academic_admission/Academic';


function IIT_bhilai() {
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
                                    <img src={iit_bhilai} className="w-100" />
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
                                                        IIT Bhilai is <b>a public technical and research university located in Bhilai, Chhattisgarh, India</b>. As one of the newest additions to the IITs, it was created by <b>the Ministry of Human Resource Development, Government of India</b> under <b>the Institutes of Technology (Amendment) Act, 2016</b>. Inaugurating its academic voyage in <b>2016-17</b>, IIT Bhilai extends <b>a bouquet of undergraduate and postgraduate programs spanning engineering, technology, sciences, and humanities</b>. The institute has fostered partnerships with <b>prestigious international and national establishments</b>, shaping <b>a fertile ground for research and academic pursuits</b>. While the campus is currently stationed at <b>Government Engineering College, Raipur,</b> the construction of a permanent campus is underway.
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
                                                        Founded in <b>2016</b> with the support of <b>the Ministry of Human Resource Development of GOI</b>, through <b>the Institutes of Technology (Amendment) Act, 2016, IIT Bhilai</b> shines as <b>one of the newly formed Indian Institutes of Technology (IITs)</b>. Its academic odyssey started in <b>2016-17</b>, offering <b>a wide range of undergraduate and postgraduate programs in engineering, technology, sciences, and humanities</b>.<br /><br />

                                                        Currently situated at <b>Government Engineering College, Raipur</b>, the institute's permanence takes shape in <b>Bhilai, Chhattisgarh,</b> with <b>a campus poised to fuse advanced infrastructure and amenities</b> that will catalyze its academic and research undertakings. <b>IIT Bhilai's portfolio is further enriched by synergistic associations with esteemed global and domestic institutions</b>, fostering an environment that nurtures research and academia.<br /><br />

                                                        The growth trajectory of <b>IIT Bhilai</b> has been marked by <b>the establishment of impactful research centres and collaborations</b>, reinforcing its commitment to cultivating <b>a vibrant scholarly community</b>. This commitment is upheld through <b>an engaging calendar of workshops, seminars, and conferences</b> that crystallize as <b>platforms for the exchange of knowledge and learning</b>. Bolstered by its ethos, the institute remains steadfast in its endeavour to <b>endow students with top-notch education and training, equipping them to flourish in industries or pursuits of research</b>.
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
                                                        IIT Bhilai's academic canvas unfurls in a vibrant tapestry, encompassing both undergraduate and postgraduate programs that traverse the realms of <b>engineering, technology, sciences, and humanities</b>. Within this expanse, <b>the following undergraduate programs take center stage</b>:<br /><br />

                                                        <ul>
                                                            <li>B.Tech in Computer Science and Engineering</li>
                                                            <li>B.Tech in Electrical Engineering</li>
                                                            <li>B.Tech in Mechanical Engineering</li>
                                                            <li>B.Tech in Civil Engineering</li>
                                                            <li>B.Tech in Materials Science and Engineering</li>
                                                            <li>B.Tech in Environmental Engineering</li>
                                                            <li>B.Tech in Materials Science and Engineering</li>
                                                        </ul>

                                                        Synchronizing with this diverse portfolio are <b>the institute's postgraduate offerings: M.Tech, M.Sc, and MBA</b>. Augmenting its scholarly ecosystem further are <b>the various doctoral programs, spanning a gamut of engineering disciplines, sciences, and humanities</b>, thereby illuminating <b>a holistic path of academic pursuit</b>.
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
                                                                                Chemistry
                                                                            </strong>
                                                                            <span className="ms-1"></span>
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
                                                                                Electrical Engineering
                                                                            </strong>
                                                                            <span className="ms-1">and Computer Science</span>
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
                                                                                Mathematics
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
                                                                                Mathematics
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                                Physics
                                                                            </strong>
                                                                            <span className="ms-1"></span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minin voluptate velit esse cillum dolore eu fugiat nulla
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
                                                        IIT Bhilai, being a recent addition to the IIT fold, is meticulously nurturing its <b>reputation and industry interface</b>. While comprehensive placement data continues to evolve, the institute's unwavering commitment finds resonance in its <b>dedicated placement cell, orchestrating the placement tableau for students</b>. Anchored in this trajectory is the institute's concerted endeavour to <b>fortify its standing, fostering linkages with industry across domains including IT, core engineering, consulting, finance, research and development, and management</b>.<br /><br />

                                                        The orchestration of <b>the placement phase commences in the seventh semester for undergraduates and the fifth semester for postgraduates</b>. Enriching this path, the institute endows students with <b>training and internships</b> to ensure they are poised for this chapter. Acknowledging the inherent variability tied to batch strength and market dynamics, <b>optimism prevails regarding a robust placement rate</b>. Predominantly, <b>a substantial proportion of students are anticipated to embrace promising professional avenues, buoyed by gratifying remuneration packages</b>.
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

export default IIT_bhilai;