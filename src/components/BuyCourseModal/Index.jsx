import React, { useEffect, useState } from 'react'
import "./Index.css"
import Modal from '../Modal/Modal'
import Button4 from '../Buttons/Button4/Button4'
import BuyCourse from '../../assets/images/buycourse.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useParams, useSearchParams } from 'react-router-dom/dist'
import { freeTransactionService } from '../../services'
import { resHandler } from '../../../helper';
import SweetAlert2 from "react-sweetalert2";
import Modal1 from '../Modal1/Modal1'
import AddLibraryModel from './AddLibraryModel'
export default function BuyCourseModal({ ModalOpen, CloseModal, mrp }) {
  // const navigate = useNavigate()
  console.log(mrp)

  const [librarymodal, setLibraryModal] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();
  const [swalProps, setSwalProps] = useState({});
  const [id, setId] = useState()
  useEffect(() => {
    if (typeof searchParam !== "undefined") {
      setId(searchParam.get('course_id'))
    }
  }, [searchParam]);
  const isLogin = localStorage.getItem('jwt');
  const handleLoginClick = () => {
    const fullUrl = window.location.href;
    localStorage.setItem('redirect', fullUrl);
    navigate('/login')
  }
  const handleBuyClick = (value) => {
    // console.log(value)
    navigate(`/coursesorder/${id}`)

  }
  const handleAddtoLibary = async (value) => {
    const formData = new FormData();
    formData.append("course_id", value);
    if (isLogin) {
      await freeTransactionService(formData).then((res) => {
        let { data, status, message } = resHandler(res);
        if (status) {
          // console.log(data);
          message &&
            setLibraryModal(true)
          // setSwalProps({
          //   show: true,
          //   title: "You have successfully added this free course. You can find this course in my library section",
          //   icon: "success",
          // });
          CloseModal()
          // location.reload()
        } else {
        }
      });
    }
  }
  return (
    <>
      {librarymodal && <AddLibraryModel isOpen={librarymodal} CloseModal={() => setLibraryModal(false)} />}
      {/* <SweetAlert2 {...swalProps} onConfirm={result => {
                    location.reload()
                }}/> */}

      <Modal1 isOpen={ModalOpen} onClose={() => CloseModal()} modalCenter={'modal-center'} modalCenter1={'md-main'}>
        {
          // isLogin ? 
          <div >

            <div className='buydcurse text-center my-1'>
              <h4>Locked item</h4>


              <h5>{mrp > 0 ? 'Buy ' : 'Add to library for '}this course to unlock all the contents.</h5>

            </div>
            <div className='puydivpuc my-2 d-flex justify-content-center align-items-center mt-2'>
              {mrp > 0 ? <>
                <button name={'Cancel'} onClick={() => CloseModal()} >Cancel</button>
                <button name={'Buy Course'} className='scndbtn' onClick={() => navigate(`/coursesorder?course_id=${id}`)}>Buy Course</button></>
                :
                <><button name={'Cancel'} onClick={() => CloseModal()} >Cancel</button>
                  <button name={'Add'} className='scndbtn' onClick={() => handleAddtoLibary(id)}>Add To Library</button></>
              }
            </div>
          </div>
          //     : <div >
          //     <div className='text-center'>
          //        <div className='text-center my-1 pg-lock'>
          //        <i className="fa fa-lock text-warning" aria-hidden="true"></i>
          //        </div>
          //        <div className='my-3 pg-buycourse-heading'>
          //          <h5 className='text-dark my-3'>You have enrolled in this course</h5>
          //          <h6 className='text-muted my-3'>Please, <button className='fw-bold' onClick={handleLoginClick}>login</button> on to get access to free leson</h6>
          //        </div>

          //     </div>
          //  </div>
        }

      </Modal1></>
  )
}
