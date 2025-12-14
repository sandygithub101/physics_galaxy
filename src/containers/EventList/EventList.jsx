import React, { useEffect, useState } from 'react'
import './EventBlog.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LinkSend from '../../components/LinkSend/LinkSend'
import BlogImage from '../../assets/images/user-p.jpg'
import EventListCard from './EventListCard'
import Pagination from '../../components/Paggination/Paggination'
import { getCourses_Service } from '../../services'
import { resHandler } from '../../../helper'
import { useNavigate } from 'react-router-dom/dist'
import NoDataFound from '../NoDataFound/NoDataFound'
export default function EventList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventList, setEventList] = useState()
  const navigate = useNavigate()
  const pageChange = (page) => {
    console.log(page, "pg no.");
    setCurrentPage(page)
    // router.push({
    //   pathname: "/users",
    //   query: { p: page },
    // }); 
  };
  useEffect(() => {
    getEvents(currentPage);
  }, [currentPage])


  const getEvents = async (page) => {
    const formData = new FormData();
    formData.append("course_type", 0);
    formData.append('sub_cat', 1)
    formData.append('cat_type', 2)
    formData.append("page", page);
    formData.append("main_cat", 0);

    await getCourses_Service(formData)
      .then((res) => {
        let { status, data, message } = resHandler(res);
        if (status) {
          const filteredBookData = data.filter((item) => item.cat_type === "2");
          console.log(filteredBookData)
          setEventList(data)
          //   setBooks(filteredBookData);
          //  console.log(filteredBookData, "book")
        }
        else {
          // courses_Action()
          setBooks()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Header />

      <section className='pg-event-blog-section'>
        <div className='pg-event-blog-title'>
          <div className="container">
            <div className="row">

              <div className='pg-event-blog-heading '>
                <h1>Events</h1>
                <div className='pg-event-blog-breadcrumb'>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item" onClick={() => navigate('/')}><i className='fa fa-home me-1'></i>Home</li>
                      <li className="breadcrumb-item">Events</li>
                      {/* <li className="breadcrumb-item active" aria-current="page">Data</li> */}
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className='my-4'>

            {
              eventList ? eventList.map((item, i) => {
                return (
                  <EventListCard id={item.id} key={item.id} value={item} />
                )
              }) : <div className='text-center'>

                <NoDataFound />
              </div>
            }


          </div>

        </div>
      </div>
      {/* <Pagination
         className="pagination-bar"
         currentPage={currentPage}
         totalCount={5}
         pageSize={4}
         onPageChange={(page) => pageChange(page)}/>
                */}


      <LinkSend />
      <Footer />
    </>
  )
}
