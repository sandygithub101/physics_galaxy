import React from "react";
import iit_delhi from "../../../assets/IIT_images/IIT-Delhi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import Ab_think_navbar from '../ab_think_navbar/Ab_think_navbar';
// import App_Link from '../app_link/App_Link';
import Student_select from "../student_select/Student_select";
import Academic from "../academic_admission/Academic";
import { Tabs, Tab, Accordion } from "react-bootstrap";

const IIT_delhi = () => {
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
                                    <img src={iit_delhi} className="w-100" />
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
                                                        <b>Indian Institute of Technology Delhi</b>, among the <b>23 IITs</b> established, stands as a
                                                        <b>Center of
                                                            Excellence</b> aimed at education, research, and advancement in science, engineering, and
                                                        technology
                                                        in India.<br /><br />

                                                        Originating as the <b>College of Engineering</b> in 1961, this institute was later granted the
                                                        status of an <b>Institution of National Importance</b> through the "Institutes of Technology
                                                        (Amendment) Act, 1963" and was subsequently renamed as <b>"Indian Institute of Technology
                                                            Delhi."</b> It gained the stature of a <b>Deemed University</b>, empowered to formulate its own
                                                        academic policies, conduct examinations, and confer its own degrees.<br /><br />

                                                        Since its inception, <b>IIT Delhi</b> has witnessed over <b>48,000 graduates</b> across diverse
                                                        fields such as <b>Engineering, Physical Sciences, Management</b>, and <b>Humanities & Social
                                                            Sciences</b>. Among these, approximately <b>5,070</b> individuals earned their <b>Ph.D.
                                                                degrees</b>. The tally of <b>B.Tech. graduates</b> surpass <b>15,738</b>, while others have
                                                        attained master's degrees in <b>Engineering, Sciences</b>, and <b>Business Administration</b>.
                                                        These alumni have forged pathways as <b>scientists</b>, <b>technologists, business leaders</b>,
                                                        and <b>entrepreneurs</b>. Notably, several have ventured beyond their initial domains into
                                                        <b>administrative services</b>, active <b>politics</b>, or engagement with <b>NGOs</b>. This
                                                        broader spectrum of influence has significantly contributed to the nation's growth and global
                                                        industrialization.
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
                                                        The inception of the concept of <b>IITs</b> traces back to a 1945 report presented by Sh. N.M. Sircar,
                                                        who was then a member of Education on the Viceroy's Executive Council. This report paved the way
                                                        for the establishment of the first <b>Indian Institute of Technology</b> in <b>Kharagpur</b> in 1950. Shri
                                                        Sircar's recommendations extended to the notion of diversifying these Institutes across various
                                                        regions of the nation. The Indian Government, embracing these suggestions from the Sircar
                                                        Committee, embarked on establishing additional <b>Institutes of Technology</b> through collaborations
                                                        with supportive countries. The initial offer of assistance emanated from the <b>USSR</b>, which agreed to
                                                        collaborate via <b>UNESCO</b> to set up an Institute in <b>Bombay</b>. Subsequently, <b>Institutes of Technology</b>
                                                        were established in <b>Madras, Kanpur, and Delhi</b> through partnerships with <b>West Germany, the USA, and
                                                            the UK</b> respectively. The timeline of <b>IIT</b> growth includes the establishment of the <b>Indian Institute
                                                                of Technology, Guwahati</b> in 1995 and the conversion of the <b>University of Roorkee</b> into an <b>IIT</b> in
                                                        2001.<br /><br />

                                                        An intergovernmental dialogue between the <b>Government of India</b> and the <b>British Government</b> initiated
                                                        a collaboration to establish an Institute of Technology in <b>Delhi</b>. While the British Government
                                                        expressed a preliminary inclination towards a modest beginning, it endorsed the establishment of a
                                                        <b>College of Engineering & Technology</b> in Delhi. The fruition of this collaboration led to the
                                                        establishment of the <b>Delhi Engineering College Trust</b>, supported by the UK Government and the
                                                        Federation of British Industries in London. In a significant symbolic gesture, <b>H.R.H. Prince
                                                            Philip, Duke of Edinburgh</b>, laid the foundation stone of the college on <b>January 28, 1959</b>, during
                                                        his visit to India.<br /><br />

                                                        Formally registered as a Society under the <b>Societies Registration Act No. XXI of 1860</b>
                                                        (Registration No. S1663 of 1960-61) On <b>June 14, 1960</b>, the <b>College of Engineering & Technology</b>
                                                        embarked on its journey. The initial admissions took place in <b>1961</b>, with students commencing their
                                                        journey on <b>August 16, 1961</b>. The formal inauguration transpired on August 17, 1961, with Prof.
                                                        Humayun Kabir, Minister of Scientific Research & Cultural Affairs, gracing the occasion. The
                                                        college was affiliated with the University of Delhi.<br /><br />

                                                        Operationalizing as per Section 4 of the Act, each Institute functions as a perpetual corporate
                                                        entity with a common seal, enabling legal actions in its name. The corporate body for each
                                                        Institute comprises a Chairman, a Director, and other Board members. IIT Delhi operates as an
                                                        autonomous statutory organization in alignment with the Institutes of Technology Act, of 1961,
                                                        which was subsequently amended by the Institutes of Technology (Amendment) Act, of 1963.
                                                        Centralized control, direction, and oversight over the Institute's activities rests with the Board
                                                        of Governors. The Board functions through its Standing Committees - Finance Committee, Building &
                                                        Works Committee, and ad hoc committees constituted to address specific matters. The Senate, on the
                                                        other hand, governs academic standards, curricula, courses, and examination regulations. Operating
                                                        through its Standing Boards/Committees and Sub-committees, the Senate remains engaged in
                                                        addressing evolving academic matters.
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
                                                        IIT Delhi stands as a leading institution, offering a diverse range of <b>Bachelor of Technology programs</b> across various domains, complemented by dual degree <b>B.Tech. - M.Tech. pathways</b>. The gateway to these programs opens through the competitive <b>Joint Entrance Examination – Advanced</b>.<br /><br />

                                                        Additionally, IIT Delhi enriches the academic landscape with an array of postgraduate offerings, bestowing <b>M.Tech. (by coursework), M.S . (by research), M.Sc., M. Des.</b>, and <b>MBA (DMS Delhi)</b> degrees through its varied departments and centres. Admission into the M.Tech. program hinges upon excelling in the <b>Graduate Aptitude Test in Engineering (GATE)</b>. The <b>Master of Design (M.Des)</b> aspirants chart their path via the <b>Common Entrance Examination for Design (CEED)</b>, while <b>M.Sc.</b> hopefuls embrace the journey through the <b>Joint Admission Test for Masters (JAM)</b>. Prospective <b>MBA</b> candidates tread the path paved by the <b>Common Admission Test (CAT)</b>.<br /><br />

                                                        In a notable development, March 2018 witnessed the formal inauguration of IIT Delhi's <b>Department of Design</b>, aimed at bolstering <b>Design-centric Research and Education</b>. The institution's storied 25-year-old design course, formerly under the umbrella of <b>IDDC (Instrument Design and Development Centre)</b>, foreshadows the inception of the eagerly awaited <b>B.Des (Bachelor of Design)</b> program, poised to commence in the academic year <b>2022–2023</b>.
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
                                                        IIT Delhi is committed to fostering engineer-scientists through its <b>science-oriented engineering education</b>. The curriculum provides a <b>robust knowledge base</b> and instills an enduring spirit of continuous <b>learning and exploration</b>.
                                                    </p>
                                                    <div className="accordion faq_sec" id="accordionExample">
                                                        <div className="row">

                                                            {/* left side item  */}
                                                            <div className="col-md-6">

                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Applied Mechanics
                                                                            </strong>
                                                                            <span className="ms-1"></span>
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
                                                                                Biochemical
                                                                            </strong>
                                                                            <span className="ms-1">Engineering and Biotechnology</span>
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

                                                                    <Accordion.Item eventKey="3" className='my-2'>
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

                                                                    <Accordion.Item eventKey="4" className='my-2'>
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

                                                                    <Accordion.Item eventKey="5" className='my-2'>
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

                                                                    <Accordion.Item eventKey="6" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Design
                                                                            </strong>
                                                                            <span className="ms-1"></span>
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
                                                                </Accordion>
                                                            </div>

                                                            {/* right side item  */}
                                                            <div className="col-md-6">

                                                                <Accordion defaultActiveKey="">
                                                                    <Accordion.Item eventKey="0" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Energy
                                                                            </strong>
                                                                            <span className="ms-1">Science &  Engineering</span>
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
                                                                            <span className="ms-1">& Social Sciences</span>
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
                                                                                Management
                                                                            </strong>
                                                                            <span className="ms-1">Studies</span>
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
                                                                                Textile
                                                                            </strong>
                                                                            <span className="ms-1">& Fibre Engineering</span>
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
                                                                                Materials
                                                                            </strong>
                                                                            <span className="ms-1">Science and Engineering</span>
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

                                                                    <Accordion.Item eventKey="6" className='my-2'>
                                                                        <Accordion.Header>
                                                                            <strong style={{ color: "#ffba19" }}>
                                                                                Mechanical
                                                                            </strong>
                                                                            <span className="ms-1"></span>
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
                                                        Per media reports, <b>the pinnacle of the first phase of IIT Delhi's 2023 placements was marked by an INR 4 crore per annum highest package (PPO)</b>. The inaugural phase saw over 1300 offers extended, with more than 260 PPOs in the mix. This phase yielded a unique selection of 1150 students, among whom <b>50 received salary packages surpassing INR 1 crore per annum</b>, while <b>30 secured coveted international offers</b>. A substantial cohort of approximately 400 companies, presenting over 800 job profiles spanning diverse sectors, have enlisted for the <b>IIT Delhi placements 2023 drive</b>.<br /><br />


                                                        <b>Prior reports conveyed that for the class of 2023, IIT Delhi had received 150 offers until August 18</b>, a contrast to the 230 offers received in 2022. Notably, the dominant recruiting sectors included <b>IT/Software, Finance, Core Engineering, Technology, and Analytics</b>.<br /><br />

                                                        The preceding year's <b>IIT Delhi placements saw a resounding close to Phase 2, with a staggering count of 1,300 offers</b>. Within this, <b>230 PPOs were secured</b>. The overall placement rate for <b>IIT Delhi placements in 2022 stood at 82%</b>. Impressively, <b>over 600 companies were part of the ecosystem, extending more than 1000 job profiles during the same period. While IIT Delhi's highest packages remain undisclosed in official documents</b>, media sources indicate that <b>the zenith of international and domestic packages in IIT Delhi placements 2022 were INR 2 crore per annum and INR 1 crore per annum</b>, respectively. The <b>average package for IIT Delhi in 2022 is still pending release</b>.
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
    );
};

export default IIT_delhi;
