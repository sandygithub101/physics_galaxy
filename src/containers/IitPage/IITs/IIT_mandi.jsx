import React from 'react';
import iit_indore from '../../../assets/IIT_images/IIT-Mandi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_mandi = () => {
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
                                    <img src={iit_indore} className="w-100" />
                                </div>
                                <div className="card about_think_nav">
                                    <div className="py-2 about_think_card_heading">

                                        <Tabs
                                            defaultActiveKey={2}
                                            className="nav nav-pills about_think_nav_tabs"
                                            id="uncontrolled-tab-example"
                                        >
                                            <Tab eventKey={1} title={
                                                <FontAwesomeIcon icon={faHouse} onClick={() => navigate("/about-iits")} fontSize='20px' />
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
                                                        Rooted in Mandi, Himachal Pradesh, India, <b>IIT Mandi</b> unfurls its identity as a vibrant public technical and research university. This stature within the academic landscape was achieved as part of the consortium of new Indian Institutes of Technology (IITs), stemming from <b>The Institutes of Technology (Amendment) Act, 2011</b>, a legislative testament to the <b>Ministry of Human Resource Development, Government of India's</b> commitment. <b>IIT Mandi's academic canvas is rich and diverse, extending across undergraduate, postgraduate, and doctoral programs within the realms of engineering, technology, sciences, and humanities</b>.<br /><br />

                                                        Anchoring its presence is an extensive campus sprawled across approximately <b>400 acres</b>, synergizing with collaborative ventures involving prominent international and national institutions, designed to propel research initiatives and elevate the academic horizon.
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
                                                        In <b>2009</b>, the foundation of <b>IIT Mandi</b> was laid, marking its place within the cohort of eight fresh Indian Institutes of Technology (IITs). This realization unfolded under the umbrella of <b>The Institutes of Technology (Amendment) Act, 2011</b>, a legislative embodiment of the <b>Ministry of Human Resource Development, Government of India's</b> commitment. The inaugural academic session in <b>2009-10</b> introduced undergraduate programs spanning <b>Computer Science and Engineering, Electrical Engineering, Mechanical Engineering, and Physics</b>.<br /><br />

                                                        Spanning an expansive <b>400-acre</b> stretch in Kamand, Himachal Pradesh, the <b>IIT Mandi campus</b> is a testimony to ecological mindfulness and sustainability. Its blueprint seamlessly integrates innovative features including <b>solar power utilization, rainwater harvesting systems, and a robust waste management framework</b>.<br /><br />

                                                        Since its inception, <b>IIT Mandi</b> has journeyed along a trajectory of substantial expansion, culminating in a comprehensive offering of undergraduate, postgraduate, and doctoral programs enveloping fields spanning <b>engineering, technology, sciences, and humanities</b>. A fervor for research and academic prowess has fueled the establishment of multiple research centres and strategic partnerships with esteemed national and international counterparts. Beyond its educational charter, <b>IIT Mandi</b> evolves into a dynamic nexus for <b>knowledge exchange and experiential learning</b> through its array of workshops, seminars, and conferences.
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
                                                        IIT Mandi emerges as a multifaceted haven of education, embracing a holistic range of academic tiers, namely <b>undergraduate, postgraduate, and doctoral levels</b>, spanning a diverse tapestry of domains encompassing <b>engineering, technology, sciences, and humanities</b>. The institute's present portfolio of undergraduate programs is as follows:<br /><br />

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

                                                        To enrich the academic spectrum, <b>IIT Mandi</b> extends its purview to encompass <b>postgraduate programs, encompassing M.Tech, M.Sc, and MBA offerings</b>. Additionally, the institute resonates with scholarly vibrance, fostering diverse <b>doctoral programs that span the gamut of engineering, sciences, and humanities domains</b>.
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
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Biosciences and Bioengineering</span>
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
                                                                            <span className="ms-1">of Biosciences and Bioengineering</span>
                                                                        </Accordion.Header>
                                                                        <Accordion.Body>
                                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
                                                                            <span className="ms-1">of Civil and Environmental Engineering
                                                                            </span>
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
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Chemical Sciences</span>
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
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Humanities and Social Sciences</span>
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
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Management</span>
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
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Mechanical and Materials Engineering</span>
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
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1" style={{ fontSize: '14px' }}>of Mathematical and Statistical Sciences
                                                                            </span>
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
                                                                                School
                                                                            </strong>
                                                                            <span className="ms-1">of Physical Sciences</span>
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
                                                        <b>IIT Mandi</b> Stands as a testimony to prolific placements, witnessing a substantial influx of students securing positions in prominent corporations each year. Guiding this feat is the institute's proficient <b>Training and Placement Cell</b>, entrusted with choreographing and steering the placement process for students.<br /><br />

                                                        The proportion of placed students experiences year-to-year undulations, intricately woven with variables like batch size and the ever-evolving job market dynamics. Nonetheless, the institute consistently achieves an impressive <b>placement rate</b>, ensuring that a noteworthy majority of students secure placements accompanied by alluring remuneration packages. A shining illustration of this accomplishment, the <b>median salary for the batch of 2021 rested at an impressive 12 Lakhs per Annum</b>.
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

export default IIT_mandi