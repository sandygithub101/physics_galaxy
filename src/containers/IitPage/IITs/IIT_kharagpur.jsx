import React from "react";
import iit_kharagpur from "../../../assets/IIT_images/IIT-Kharagpur.jpg";
import { Link, useNavigate } from "react-router-dom";
import Student_select from "../student_select/Student_select";
import Academic from "../academic_admission/Academic";
import { Accordion, Tabs } from "react-bootstrap";
import Tab from "../../ViewDetail/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const IIT_kharagpur = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="pb-5 about_think_sec bg-light">
        <div className="container-fluid p-0">
          <div className="row mx-0">
            <div className=" p-0">
              <div>
                <div className="about_think_bnr1 position-relative">
                  <img src={iit_kharagpur} className="w-100" />
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
                            IIT Kharagpur or <b>IIT KGP</b>, holds the
                            distinction of being one of the
                            <b>
                              firsts institutes established among the IITs
                            </b>{" "}
                            in
                            <b>1951</b>, and is also acknowledged as an
                            <b>“Institute of National Importance.”</b> The
                            institute is also recognized as an independent
                            university; renowned for its exceptional engineering
                            programs. Additionally, the IIT KGP also holds the
                            position within the
                            <b>top 5 institutes in the NIRF rankings</b>. Back
                            in
                            <b>2019</b>, the Government of India awarded the IIT
                            Kharagpur university with the prestigious tag of an
                            “<b>Institute of Eminence</b>.”
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
                            To study the <b>history of the IIT</b> framework you
                            need to go all the way back to <b>1946</b>
                            when a board was set up by{" "}
                            <b>Hon'ble Sir Jogendra Singh</b>, an individual
                            from the
                            <b>
                              Emissary's Leader Committee, Branch of Training,
                              Wellbeing and Horticulture
                            </b>
                            . To consider the setting up of
                            <b>Higher Specialized Establishments</b> for post
                            war modern improvement in
                            <b>India</b>, he was the best personality. The 22
                            part council headed by <b>Sri N.R.Sarkar</b>, in its
                            report, suggested the foundation of four
                            <b>Higher Specialized Organizations</b> in the
                            <b>
                              Eastern, Western, Northern and Southern districts
                            </b>
                            , perhaps on the lines of the
                            <b>Massachusetts Establishment</b>
                            of Innovation, USA, with various renowned
                            organizations associated with it. <br />
                            <br />
                            The report likewise asked the fast foundation of the
                            multitude of
                            <b>
                              four establishments with the ones in the East and
                              the West
                            </b>
                            to be begun right away. The norm of the alumni ought
                            to be at standard with those from
                            <b>five star foundations abroad</b>. They felt that
                            the extent of students and postgraduate understudies
                            ought to be
                            <b>2:1</b>.
                            <br />
                            <br />
                            With the above suggestions of the{" "}
                            <b>Sarkar council</b> in view, the{" "}
                            <b>principal Indian Foundation</b> of Innovation was
                            brought into the world in
                            <b>
                              May 1950 in Hijli, Kharagpur, in the eastern part
                              of India
                            </b>
                            . At first the IIT began working from 5, Esplanade
                            East, Calcutta and exceptionally before long moved
                            to Hijli in
                            <b>Sept. 1950</b>. The current name 'Indian
                            Foundation of Innovation' was embraced before the
                            conventional introduction of the organization on
                            <b>August 18, 1951, by Maulana Abul Kalam Azad</b>.
                            IIT Kharagpur began its excursion in the
                            <b>old Hijli Confinement Camp</b> where a portion of
                            our extraordinary political dissidents worked and
                            forfeited their lives for the{" "}
                            <b>freedom of our country</b>. The historical
                            backdrop of IIT Kharagpur is in this way personally
                            connected with the historical backdrop of the
                            <b>Hijli Detainment Camp</b>. This is conceivably a
                            rare example of Foundations all around the world who
                            began life in a jail house.
                          </p>
                          <p>
                            <b>About the Confinement Camp: </b>
                            The region of Midnapore alongside the rest of Bengal
                            and India participated in an exceptionally critical
                            manner in the progressive battle against the British
                            Raj from the early
                            <b>20th centurary</b>.
                            <br />
                            The huge number of <b>adolescents</b> who took part
                            in the furnished battle or the non-collaboration
                            development couldn't be obliged in customary
                            correctional facilities. The then{" "}
                            <b>English Government</b> chose to lay out a couple
                            of detainment camps - the first was situated in Buxa
                            Post which was trailed by the setting up of the
                            <b>Hijli Confinement Camp in 1930</b>. The Hijli
                            Detainment Camp bears an exceptionally critical
                            imprint in our opportunity development. Two unarmed
                            prisoners were shot dead here by the{" "}
                            <b>English Police on Sept. 16, 1931</b>. Netaji
                            Subhas Chandra Bose came to Hijli to gather the
                            groups of the two incredible children of opportunity
                            development -
                            <b>Santosh Kumar Mitra and Tarakeswar Sengupta</b>.
                            Every one of the public chiefs including Gurudev
                            Rabindranath Tagore voiced areas of strength for
                            them against the English Raj over this occurrence.
                            The Hijli Confinement Camp was shut in <b>1937</b>{" "}
                            and was resumed again in <b>1940</b> to keep out the
                            political dissidents without preliminary notice.
                            Once more, in
                            <b>1942</b> the camp was and the prisoners were
                            moved somewhere else.
                            <br />
                          </p>
                          <p>
                            <b>IIT in its Earliest stages: </b>
                            There were 224 freshers and 42 educators in
                            <b>August 1951</b> when the principal meeting began.
                            The study halls, research centers and the regulatory
                            office were housed in the{" "}
                            <b>noteworthy structure</b> of the Hijli Confinement
                            Camp. The Establishment began its scholarly program
                            with just
                            <b>ten Offices</b>. In Walk, <b>1952</b>, Pandit
                            Nehru established the groundwork stone of the New
                            Structure.
                            <br />
                            <br />
                            The format of the current grounds and the plan of
                            our structures were completed by a large group of
                            <b>designers and engineers</b> under the direction
                            of a prominent Swiss modeler{" "}
                            <b>Dr. Werner M. Moser</b>. A lot of monetary
                            assistance was accessible for getting various
                            machine devices from the Service of industry and
                            supply. The Foundation Studio should be truly
                            outstanding in the country. The Organization was
                            adequately lucky to have
                            <b>Sir J.C.Ghosh</b>, a famous Researcher as its
                            most memorable Chief under whose capable stewardship
                            the Foundation filled in its early stages. The
                            principal Leading body of{" "}
                            <b>Lead representatives</b> was composed with Dr.
                            B.C. Roy, as the executive and Mr. N.R.Sarkar, Sir
                            Jehangir J. Gandhi, Dr. Tarachand, Mr. K.R.K. Menon,
                            Mr. T. Sivasankar, Dr. S.S. Bhatnagar, Mr. H. Kabir
                            and Dr. J.C. Ghosh as individuals. A few famous
                            researchers from
                            <b>Europe</b> had joined this Establishment in its
                            early stages and the initial two of them were
                            <b>Prof. R.A. Kraus and Prof.H. Tischner</b>, who
                            was unexpectedly the principal Head of Hardware and
                            ECE Division.
                            <br />
                            <br />
                            On <b>Sept. 15, 1956</b>, the Parliament of India
                            passed a demonstration known as the
                            <b>
                              Indian Foundation of Innovation (Kharagpur) Act
                            </b>
                            pronouncing this Organization as an Establishment of
                            public significance. The Foundation was additionally
                            given the situation with an independent College.
                            From this unobtrusive beginning in <b>1950</b>, IIT
                            Kharagpur has taken part in a consistent course of
                            improvement with around 18 scholastic divisions, 5
                            focuses of greatness. The huge heavily wooded
                            grounds, spreading north of <b>2100</b> sections of
                            land, has an independent municipality of more than{" "}
                            <b>15,000</b>
                            occupants. Presently we have around <b>550</b>{" "}
                            staff,
                            <b>1700</b> workers and <b>9000</b> understudies on
                            the grounds.
                            <br />
                          </p>
                        </div>
                      </Tab>
                      <Tab eventKey={5} title="Academic">
                        <div
                          className="my-1 card-body m-0 about_think_bg_light"
                          style={{ padding: "15px !important" }}
                        >
                          <h3>Undergraduate Admissions</h3>
                          <p>
                            <Academic />
                          </p>
                        </div>
                      </Tab>
                      <Tab eventKey={6} title="Department">
                        <div
                          className="my-1 card-body m-0 about_think_bg_light"
                          style={{ padding: "15px !important" }}
                        >
                          <h3>Department</h3>
                          <p>
                            IIT Kharagpur provides <b>science-based</b>{" "}
                            engineering education with a view to produce quality
                            <b>engineer-scientists</b>. The curriculum provides
                            broad based knowledge and simultaneously builds a
                            temper for the life long process of{" "}
                            <b>learning and exploring</b>. The activities of
                            Departments include teaching at all levels and
                            research.
                          </p>
                          <div
                            className="accordion faq_sec"
                            id="accordionExample"
                          >
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
                                        Agricultural
                                      </strong>
                                      <span className="ms-1">
                                        and Food Engineering
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
                                      <strong style={{ color: "#ffba19" }}>
                                        Chemical
                                      </strong>
                                      <span className="ms-1"> Engineering</span>
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

                                  <Accordion.Item eventKey="4" className='my-2'>
                                    <Accordion.Header>
                                      <strong style={{ color: "#ffba19" }}>
                                        Computer Science
                                      </strong>
                                      <span className="ms-1">
                                        and Engineering
                                      </span>
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
                                      <strong style={{ color: "#ffba19" }}>Electronics and Electrical</strong>
                                      <span className="ms-1">Communication Engineering</span>
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
                                        Energy Science
                                      </strong>
                                      <span className="ms-1">
                                        and Engineering
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
                                        Environmental Science
                                      </strong>
                                      <span className="ms-1">and Engineering</span>
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
                                        Metallurgical and
                                      </strong>
                                      <span className="ms-1">
                                        Materials Engineering
                                      </span>
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
                          <h3>Placement</h3>
                          <p>
                            <strong>
                              <span>
                                All-round Career Development Programme -
                              </span>
                            </strong>
                            <span>
                              The Institute organizes various programmes to
                              <strong>improve</strong>{" "}
                              <strong>soft skills</strong>,
                              <strong>professional communication</strong> and
                              <strong>personality</strong> through
                              <strong>career counselling</strong> by
                              <strong>professional agencies/experts</strong>.
                              Students are also assisted in preparing
                              <strong>professional resumes&nbsp;</strong>by
                              conducting
                              <strong>resume writing workshops</strong>.
                              <strong>Management development programs</strong>{" "}
                              are conducted by experts. The Career Development
                              Centre also assists the departments in organizing
                              <strong>Industry oriented workshops</strong>,
                              <strong>leadership talks</strong>,
                              <strong>lectures</strong>,{" "}
                              <strong>competitions</strong>
                              ,&nbsp;
                              <strong>
                                Curriculum Oriented Career Prospects
                              </strong>
                              (COCP) Workshops including specialized niche
                              areas.
                              <br />
                              &nbsp;
                              <br />
                              <strong>Choice of Companies -</strong>
                              <strong>IIT Kharagpur</strong> invites the
                              <strong>best</strong> recruiters in the market
                              during the internship and placement season
                              covering various sectors such as{" "}
                              <strong>Core Engineering</strong>,
                              <strong>IT</strong>,<strong>Finance</strong>,
                              <strong>Consulting</strong>,{" "}
                              <strong>Automobiles</strong>,<strong>PSUs</strong>
                              , etc. The sheer
                              <strong>diversity</strong> of recruiters across
                              all
                              <strong>domains</strong> and the extensive
                              participation of overseas companies is an
                              <strong>epitome</strong> of the
                              <strong>global stature&nbsp;</strong>of the
                              brand&nbsp;
                              <strong>IIT Kharagpur</strong>.<br />
                              &nbsp;
                              <br /> <strong>Flexible Curriculum -</strong>
                              The internship and placement trend at IIT
                              Kharagpur has shown that the{" "}
                              <strong>flexibility in curriculum</strong>
                              makes our students fit into any sector such
                              as&nbsp;
                              <strong>
                                Core Engineering, IT, Finance, Analytics,
                                Consulting
                              </strong>
                              et al. It does not matter which discipline you
                              study, you may make a successful in-road to
                              placement.
                              <br />
                              &nbsp;
                              <br />
                              <strong>Universally Compatible -</strong> More
                              than
                              <strong>1500</strong> students placed every year
                              in
                              <strong>250+</strong> top brands with
                              <strong>best</strong> compensation packages. KGP
                              students are{" "}
                              <strong>universally compatible</strong> to take up
                              challenges in any of the sector because of the
                              flexibility in our curriculum. The
                              <strong>entrepreneurial frame of mind</strong>
                              of the students of IIT Kharagpur has also received
                              <strong>appreciation</strong> from the
                              <strong>recruiters</strong>. The
                              <strong>corporate preparedness</strong> of the
                              students is indicated by the significantly large
                              number of students hired by the recruiters as
                              compared to other institutes.
                            </span>
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
    </>
  );
};

export default IIT_kharagpur;
