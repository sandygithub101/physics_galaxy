import React, { useEffect, useState } from 'react'
import Carousel2 from '../../../components/Carousel2/Carousel2'
import './BestSeller.css'
import Button4 from '../../../components/Buttons/Button4/Button4';
import { useSelector } from 'react-redux';
import { getCourses_Service } from '../../../services';
import { resHandler } from '../../../../helper';
export default function BestSellar() {
  const allCategory = useSelector((state) => state.allCategory.allCategory);
  const [bestSellingData, setBestSellingData] = useState()

  useEffect(() => {
    console.log('allCategory', allCategory)
    if (allCategory) {
      const allCatData = allCategory.course_type_master;
      const bestSellerData = allCatData.find(item => item.name === "Best Seller");
      console.log('bestSellerData', bestSellerData)

      if (bestSellerData) {
        getCourseData(bestSellerData.id, bestSellerData.sub_cat_id)
      }
      // console.log(bestSellerData, "best")
    }
  }, [allCategory])

  const getCourseData = async (value, sub_cat) => {
    // setCourseId(value)
    const formData = new FormData();
    formData.append('course_type', value);
    formData.append('main_cat', 0)
    // formData.append('is_paid',)
    // formData.append('lang')
    formData.append('page', 1);
    formData.append('sub_cat', 1);

    await getCourses_Service(formData).then(res => {
      // console.log(res)
      let { status, data, message } = resHandler(res)
      // console.log(res, "best")
      console.log('getCourses_Service', data)
      if (status) {
        //  const filteredcourseData = data.filter(item => item.cat_type === "0");
        console.log(data, "best")
        setBestSellingData(data)
        //  console.log(data)
        //  setCourseData(filteredcourseData)
        // courses_Action(filteredcourseData)
        // dispatch(courses_Action(filteredcourseData))

      }
      //  else{
      //   // courses_Action()
      //     setCourseData(null)
      //   }
    }).catch(err => {
      console.log(err)
    })

  }

  const handleButtonClick = () => {

  }

  return (
    <section className="py-4 pg-courses">
      <div className="container">
        {bestSellingData && <div className="row">
          <header className="my-3  pb-3 text-white d-flex justify-content-between align-items-center">
            <h1 className="text-dark fw-bold">Our Bestselling Courses</h1>
            {/* <Button4 name={"View Details"}  onButtonClick={handleButtonClick}/> */}
          </header>
          <div className="owl-carousel owl-theme owl_custom owl-loaded owl-drag bestcourses p-2">
            <div className="item">
              {bestSellingData && <Carousel2 bestSellingData={bestSellingData} />}
            </div>
          </div>
        </div>}
      </div>
    </section>
  )
}
