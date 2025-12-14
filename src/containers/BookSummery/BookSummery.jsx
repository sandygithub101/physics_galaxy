import React from 'react'

import './BookSummery.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LinkSend from '../../components/LinkSend/LinkSend'
import SideBar from '../../components/SideBar/SideBar'
import AddImages from '../../assets/images/Rectangle 7957.png'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardBookList from '../../components/CardBookList/CardBookList'
export default function BookSummery() {
    const [key, setKey] = useState('home');
    return (
        <>
            <Header />

            {/* <!-- Explore books --> */}
            <section className="py-4 header books pg-category">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-mg-5 col-6">
                            <div className="p-3 pg-course-link">
                                <SideBar />
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-7 col-6'>
                            <div className="vjed-book-img mb-2 shadow ">
                                <img src={AddImages} className="img-fluid" alt="Rectangle" />
                            </div>
                            <div className='text-center'>
                                <CardBookList />
                                {/* <Tabs
                    id="controlled-tab-example"
                    // activeKey={key}
                    // onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-center border-0 shadow">
                    <Tab eventKey="all" title="All" className='shadow-none'>
                      <CardBookList/>
                    </Tab>
                    <Tab eventKey="ebook" title="E-Books" className='shadow-none'>
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="physical Book" title="Phsical Book" className='shadow-none'>
                        Tab content for Profile
                    </Tab>
                   
                    </Tabs> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <LinkSend />
            <Footer />


        </>
    )
}
