import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import AddressCard from './AddressCard';
import AddressModal from '../../components/SideModal/AddressModal';
import { getUserAddressService } from '../../services';
import { isLogin, resHandler } from '../../../helper';
import { address_Action } from '../Home/masterContentSlice';
import { useDispatch } from 'react-redux';

export default function AddressModal2({ AddressList, changeSelectAddress, deleteAddress }) {
  const [showAddressList, setShowAddressList] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [edit_id, setEdit_id] = useState()
  const dispatch = useDispatch()
  const handleChangeAddress = (value) => {
    changeSelectAddress(value)
  }

  const handleEditClick = (value) => {
    setEdit_id(value);
    setShowAddressForm(true)
  }

  const addre = (id) => {
    // console.log(AddressList.find(item => item.id == id), "find add")
    const address = AddressList.find(item => item.id == id);
    if (address) {
      return address.address;
    }
    // return AddressList.find(item => item.id == id)
  }

  const getSavedAddress = () => {
    if (isLogin) {
      getUserAddressService().then(res => {
        let { status, data, message } = resHandler(res);
        status && dispatch(address_Action(data))
        console.log(data, "getuserAddress")
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const handleClose = () => {
    setShowAddressForm(false);
    setEdit_id();
    getSavedAddress();
  }
  return (
    <>
      <button className="change-btn" onClick={() => setShowAddressList(true)}>Change</button>
      <Offcanvas show={showAddressList} onHide={() => setShowAddressList(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Change Address
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <div className='col-lg-4 mx-auto mt-4 mb-3'> */}
          {!showAddressForm ? <div className='pg-addressmodal p-3 bg-white shadow'>
            <div className='text-end pg-newaddress'>
              <button type='button' onClick={() => setShowAddressForm(true)}>+Add New Address</button>
            </div>
            <div className='savesaddress ps-4'>
              <h5>saved address</h5>
              {/* <p>1 saved address</p> */}
            </div>
            {
              AddressList && AddressList.map((item, i) => {
                return (
                  <AddressCard value={item} key={i} onEditClick={handleEditClick} onClickAddress={handleChangeAddress} deleteAddress={(value) => deleteAddress(value)} />
                )
              })
            }

            {/* <AddressCard/> */}
          </div> : <AddressModal editaddress={edit_id && addre(edit_id)} address_id={edit_id} closeAddresModal={handleClose} />}
          {/* </div> */}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
