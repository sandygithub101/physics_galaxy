import React from 'react';
import iit_patna from '../../../assets/IIT_images/IIT-Patna.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Student_select from '../student_select/Student_select';
import Academic from '../academic_admission/Academic';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const IIT_patna = () => {

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
                                    <img src={iit_patna} className="w-100" />
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
                                                        Located in <b>Patna, Bihar, India, IIT Patna</b> has emerged as a key player in <b>technical and research education</b>. Its status as one of the <b>new Indian Institutes of Technology (IITs)</b>, established under <b>The Institutes of Technology (Amendment) Act, 2011</b> by the <b>MoHRD of GoI</b> speaks to its significance.<br /><br />

                                                        The educational landscape at <b>IIT Patna</b> provides a range of offerings, including, undergraduate, postgraduate, and doctoral programs in <b>Engineering, Sciences, Humanities, and Management</b>. Encompassing an extensive campus sprawling across around <b>654 acres</b>, the institute shines a light on its collaborations with distinguished national and international institutions, aimed at propelling research initiatives and elevating the academic environment.
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
                                                        With its inception in <b>2008, IIT Patna</b> secured its position among the <b>eight new Indian Institutes of Technology (IITs)</b>, formed through the <b>MoHRD of  GoI enactment of The Institutes of Technology (Amendment) Act, 2011</b>. Unveiling its first academic chapter in <b>2008-09</b>, the institute laid the foundation for its undergraduate programs in <b>Computer Science and Engineering (Electrical and Mechanical, and Civil Engineering)</b>.<br /><br />

                                                        Located approximately <b>20 km from Patna, Bihar</b>, the sprawling <b>IIT Patna campus</b> envelops an expansive <b>654-acre expanse</b>. Distinctive for its eco-conscious design, the campus seamlessly integrates <b>solar energy utilization, rainwater harvesting systems</b>, and a robust <b>waste management framework</b>.<br /><br />

                                                        As time progressed, <b>IIT Patna</b> experienced notable evolution, expanding its academic repertoire to encompass a diverse spectrum of undergraduate, postgraduate, and doctoral programs spanning fields such as <b>engineering, sciences, humanities, and management</b>. The institute's commitment to research is evident through the establishment of research centers and strategic partnerships with esteemed national and international institutions. This collaborative approach has cultivated a thriving ecosystem for <b>research and development</b>, underscored by commendable funding support from various governmental and non-governmental entities.
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
                                                        Starting its operations in the year <b>2008, IIT Patna</b> started its educational journey with B.Tech programs within three departments: <b>CSE, EE, and Mechanical Engineering</b>. Today, the institute stands as a bastion of academic diversity, hosting an expansive roster of departments, including six in Engineering <b>(Chemical and Biochemical Engineering, Civil and Infrastructure, Computer Science and Engineering (CSE), Electrical Engineering, Material Science and Engineering, and Mechanical Engineering)</b>, three in Basic Science <b>(Chemistry, Mathematics, and Physics)</b>, and an exclusive department dedicated to <b>Humanities and Social Science</b>.<br /><br />

                                                        Eager to fulfill its mandate of nurturing adept educators and researchers, <b>IIT Patna</b> aspires to elevate its student strength from approximately <b>1100 to 5000</b> in the imminent future. Encouraging perpetual evolution, the institute exhorts each department to contemporize existing programs and introduce novel ones, with a distinctive emphasis on addressing pragmatic real-world demands.<br /><br />

                                                        In the context of <b>IIT Patna's educational ethos</b>, the measure of distinction hinges on the caliber and ethical foundation of its academic endeavours. A steadfast commitment to <b>academic integrity</b> is paramount, underpinned by fundamental values such as <b>Honesty, Trust, Fairness, Respect, and Responsibility,</b> as delineated in a document by the International Center for Academic Integrity (ICAI, 1999). The institute steadfastly upholds the principles of academic integrity, all the while relentlessly pursuing excellence in both pedagogy and pioneering research.
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
                                                                                Engineering
                                                                            </strong>
                                                                            <span className="ms-1">& Technology</span>
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
                                                                                Basic Sciences
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
                                                                                Humanities and Social
                                                                            </strong>
                                                                            <span className="ms-1">Sciences Computer Center</span>
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
                                                                                Center for
                                                                            </strong>
                                                                            <span className="ms-1">Endangered Language Studies</span>
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
                                                                                Center for Earthquake Engineering Research
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
                                                            {/*  */}
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
                                                        A testament to its prowess, <b>IIT Patna</b> has fostered a potent culture of placements, with numerous students securing coveted positions within esteemed companies each year. Orchestrating this triumph is the institute's designated <b>Training and Placement Cell</b>, entrusted with the seamless execution of the placement process for the student body.<br /><br />

                                                        Within the corporate domain, <b>IIT Patna</b> enjoys a well-earned reputation, capturing the attention of diverse recruiters spanning sectors such as <b>IT, core engineering, consulting, finance, research and development, and management</b>. The campus plays host to an array of distinguished companies including the likes of <b>Google, Microsoft, Amazon, Flipkart, and Goldman Sachs,</b> all of which actively recruit from the institution.<br /><br />

                                                        The placement journey commences in the <b>seventh semester</b> for undergraduates and the <b>fifth semester</b> for postgraduates, meticulously adhering to a well-strategized timeline. To bolster students' efficacy in this process, the institute imparts crucial <b>training modules</b> and <b>internship opportunities</b>. While the percentage of placed students undergoes yearly fluctuations dictated by batch dynamics and market trends, the institute consistently upholds an impressive <b>placement rate</b>. This robust trend ensures that a substantial majority of students secure placements encompassing promising <b>compensation packages</b>. For instance, the median salary for the batch of 2021 averaged approximately <b>12 Lakhs per Annum</b>.
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

export default IIT_patna