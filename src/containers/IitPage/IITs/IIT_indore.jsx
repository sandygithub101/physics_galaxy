import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import iit_indore from '../../../assets/IIT_images/IIT-Indore.jpg';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';


const IIT_indore = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* <section className="pb-5 about_think_sec bg-light"> */}
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
                                                    Housed within the heart of Indore, Madhya Pradesh, India, <b>IIT Indore</b> is a prominent public technical and research university. Part of the vanguard of new Indian Institutes of Technology (IITs), its establishment materialized through <b>The Institutes of Technology (Amendment) Act, 2011</b>, a legislative testament to the <b>Ministry of Human Resource Development, Government of India's</b> commitment to educational advancement.<br /><br />

                                                    With a rich academic palette, <b>IIT Indore</b> extends offerings encompassing undergraduate, postgraduate, and doctoral programs across domains such as engineering, technology, sciences, and humanities. The campus unfolds across a sprawling <b>657-acre</b> tapestry, marked by strategic partnerships with esteemed international and national institutions to catalyze research pursuits and elevate academic excellence.
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
                                                    Established in <b>2009, IIT Indore</b> stands tall as one of the fresh faces among the Indian Institutes of Technology (IITs), a byproduct of the Ministry of Human Resource Development, Government of India's endeavour, manifested via <b>The Institutes of Technology (Amendment) Act, 2011</b>. The institute's inaugural academic voyage set sail in <b>2009-10</b>, unfurling a comprehensive canvas of undergraduate programs spanning <b>Computer Science and Engineering, Electrical Engineering, Mechanical Engineering, and Physics</b>.<br /><br />

                                                    Carved out across an extensive <b>657-acre</b> expanse in the Simrol region, nestled about <b>25 km from Indore, Madhya Pradesh</b>, the <b>IIT Indore campus</b> stands as a testament to eco-friendliness and sustainability. Its design integrates pioneering attributes including <b>solar energy harnessing, rainwater harvesting infrastructure, and an efficient waste management system</b>.<br /><br />

                                                    As time surged forward, <b>IIT Indore</b> witnessed marked growth, augmenting its offerings to encompass a diverse spectrum of undergraduate, postgraduate, and doctoral programs spanning fields such as <b>engineering, technology, sciences, and humanities</b>. A testament to its commitment to research, the institute has cultivated research centers and established strategic liaisons with renowned national and international institutions. The institute's dedication to knowledge exchange and learning is evident through an extensive lineup of <b>workshops, seminars, and conferences</b>.
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
                                                    IIT Indore presents a diverse academic landscape, embracing undergraduate, postgraduate, and doctoral programs spanning a multifaceted tapestry including <b>engineering, technology, sciences, and humanities</b>. Within the realm of undergraduate programs, the institute presently extends the following:<br /><br />
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
                                                    Complementing its undergraduate offerings, <b>IIT Indore</b> propels its academic pursuit by offering postgraduate programs encompassing <b>M.Tech, M.Sc, and MBA</b>. The institute further amplifies its academic footprint through a diverse array of <b>doctoral programs spanning engineering, sciences, and humanities disciplines</b>.
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
                                                            {/* item-1 */}

                                                            <Accordion defaultActiveKey="">
                                                                <Accordion.Item eventKey="0" className='my-2'>
                                                                    <Accordion.Header>
                                                                        <strong style={{ color: "#ffba19" }}>
                                                                            Astronomy
                                                                        </strong>
                                                                        <span className="ms-1">, Astrophysics and Space Engineering</span>
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
                                                                            Biosciences
                                                                        </strong>
                                                                        <span className="ms-1">and Biomedical Engineering</span>
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
                                                                            Chemistry
                                                                        </strong>
                                                                        <span className="ms-1"></span>
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

                                                                <Accordion.Item eventKey="4" className='my-2'>
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
                                                            </Accordion>
                                                        </div>

                                                        {/* right side item  */}
                                                        <div className="col-md-6">
                                                            {/* item-1 */}
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
                                                                            Humanities
                                                                        </strong>
                                                                        <span className="ms-1">and Social Sciences</span>
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
                                                                            Mathematics
                                                                        </strong>
                                                                        <span className="ms-1" style={{ fontSize: '14px' }}></span>
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
                                                                            Metallurgy
                                                                        </strong>
                                                                        <span className="ms-1">Engineering and Materials Science</span>
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
                                                    <b>IIT Indore</b> shines with its remarkable achievements in placements, as a significant multitude of students consistently secure promising roles in esteemed companies every year. Steering this success is the institute's adept <b>Training and Placement Cell</b>, entrusted with the seamless orchestration of the placement process, ensuring a smooth journey for students.<br /><br />

                                                    <b>IIT Indore</b> has garnered a strong reputation within the industry, serving as a magnet for diverse recruiters from <b>IT, core engineering, consulting, finance, research and development, as well as management sectors</b>. Notable corporations such as <b>Google, Microsoft, Amazon, Flipkart, and Goldman Sachs</b>, among others, frequent the campus, marking it as a pivotal hub for recruitment endeavours.<br /><br />

                                                    The placement expedition typically commences in the <b>seventh semester for undergraduates</b> and the <b>fifth semester for postgraduates</b>, harmonizing with the students' academic journey. To bolster students' readiness, the institute is proactive in offering <b>training initiatives and internship opportunities</b>.<br /><br />

                                                    While the percentage of placed students fluctuates annually based on factors like batch size and the prevailing job market conditions, the institute maintains a robust <b>placement rate</b>. This trajectory ensures that a significant majority of students secure placements accompanied by competitive compensation packages. As an illustration, the median salary for the batch of 2021 stood at an impressive <b>12 Lakhs per Annum</b>.
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
            {/* </section > */}
            {/* <App_Link /> */}
        </>
    )
}

export default IIT_indore