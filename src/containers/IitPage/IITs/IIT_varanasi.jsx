import React from 'react';
import iit_varanasi from '../../../assets/IIT_images/IIT-Vanarasi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_varanasi = () => {
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
                                    <img src={iit_varanasi} className="w-100" />
                                </div>
                                <div className="card about_think_nav">
                                    <div className="p-2 about_think_card_heading">

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
                                                        Since its inception in <b>1919</b> as the <b>Benaras Engineering College, IIT Varanasi</b> has carved a distinctive niche as a pivotal public technical and research university in Varanasi, Uttar Pradesh, India. Its transformative journey includes being rechristened as the <b>Indian Institute of Technology (Banaras Hindu University)</b> in <b>1968</b>, culminating in its present incarnation, the <b>Indian Institute of Technology Varanasi</b>, as of <b>2012</b>. With a broad academic embrace spanning <b>engineering, technology, sciences, and humanities, IIT Varanasi</b> stands as a beacon for diverse educational pursuits at the undergraduate, postgraduate, and doctoral levels.<br /><br />

                                                        Stretching across an expansive <b>800-acre expanse</b>, the campus becomes an incubator of learning and innovation. Collaborative bonds with esteemed international and national institutions amplify its potential as a fertile ground for rigorous research and holistic academic growth.
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
                                                        A chronicle dating back to <b>1919</b> unearths the roots of <b>IIT Varanasi</b>, initially established as the <b>Benaras Engineering College</b>. Its inception marked the early steps in imparting education, offering undergraduate programs in <b>civil, mechanical, and electrical engineering</b> under the tutelage of the <b>University of Allahabad</b>.<br /><br />

                                                        The year <b>1968</b> heralded a transformative chapter, as the institution earned the identity of the <b>Indian Institute of Technology (Banaras Hindu University)</b>, achieving autonomy in the process. The year <b>2012</b> brought a new identity, reshaping it into the <b>Indian Institute of Technology Varanasi</b>. This transformation aligned with the visionary mission set forth by the <b>Ministry of Human Resource Development, Government of India</b>, manifested through <b>The Institutes of Technology (Amendment) Act, 2011</b>, integrating <b>IIT Varanasi</b> into the distinguished cohort of new Indian Institutes of Technology (IITs).<br /><br />

                                                        Through decades, <b>IIT Varanasi's</b> trajectory evolved and expanded, offering a comprehensive range of undergraduate, postgraduate, and doctoral programs spanning the realms of <b>engineering, technology, sciences, and humanities</b>. The institute's devotion to pioneering research and academic distinction finds expression in the establishment of <b>research centres and strategic partnerships with esteemed national and international counterparts</b>. Furthermore, the institute nurtures a culture of knowledge dissemination and growth, achieved through a dynamic schedule of <b>workshops, seminars, and conferences. IIT Varanasi's sprawling campus spanning 800 acres</b> thrives in the heart of the revered city of Varanasi.
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
                                                        <b>IIT Varanasi</b> stands as a nexus of educational possibilities, weaving together an intricate tapestry of academic pursuits encompassing undergraduate, postgraduate, and doctoral echelons across diverse realms including <b>engineering, technology, sciences, and humanities</b>. At present, the institute's array of undergraduate programs encompasses:<br /><br />

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

                                                        Enriching its academic mosaic, <b>IIT Varanasi</b> extends its reach to encompass postgraduate horizons, embracing <b>M.Tech, M.Sc, and MBA offerings</b>. Pioneering scholarly inquiry, the institute fosters diverse avenues of exploration through an array of <b>doctoral programs spanning engineering, sciences, and humanities disciplines</b>.
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
                                                                                Architecture
                                                                            </strong>
                                                                            <span className="ms-1">, Planning & Design</span>
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
                                                                                Ceramic
                                                                            </strong>
                                                                            <span className="ms-1">Engineering</span>
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
                                                                </Accordion>
                                                            </div>

                                                            {/* right side item  */}
                                                            <div className="col-md-6">
                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
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

                                                                    <Accordion.Item eventKey="1" className='my-2'>
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

                                                                    <Accordion.Item eventKey="2" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19", fontSize: '15px' }}>
                                                                                Electronics
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
                                                                                Metallurgical
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

                                                                    <Accordion.Item eventKey="6" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Pharmaceutical
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
                                                        <b>IIT Varanasi</b> resonates with a commendable legacy of placements, consistently propelling a considerable number of students toward top-tier companies annually. Spearheading this triumph is the institute's dedicated <b>Placement Cell</b>, an adept entity entrusted with orchestrating and supervising the intricate placement process.<br /><br />

                                                        An illustrious reputation within the industry magnetizes a diverse array of recruiters from domains such as <b>IT, core engineering, consulting, finance, research and development, and management</b>. Powerhouses of enterprise such as <b>Google, Microsoft, Amazon, Flipkart, and Goldman Sachs</b> form a distinguished lineup, converging on the campus to engage with and recruit exceptional talent.<br /><br />

                                                        The placement voyage unfurls in the <b>seventh semester for undergraduates</b> and the <b>fifth semester for postgraduates</b>, an approach tailored to the rhythm of academic progress. Equipping students for this transformative phase, the institute curates a palette of holistic <b>training and immersive internships</b>, nurturing skills and bolstering readiness.<br /><br />

                                                        While the percentage of placed students experiences annual shifts contingent on factors like batch size and prevailing market dynamics, the institute sustains an impressive <b>placement rate</b>. This translates into a significant majority of students securing roles accompanied by enticing compensation packages. The year 2021 witnessed a <b>median salary of around 12 Lakhs per Annum</b>, underscored by a remarkable <b>peak salary package of 35 LPA</b>.
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

export default IIT_varanasi;