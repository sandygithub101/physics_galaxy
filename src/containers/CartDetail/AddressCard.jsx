import React, { useEffect, useState } from 'react'
import { parseJson, resHandler } from '../../../helper'
import { deleteUserAddressService } from '../../services'
import toast from 'react-hot-toast'

export default function AddressCard({ value, onClickAddress, deleteAddress, onEditClick }) {
    const [address, setAddress] = useState()
    useEffect(() => {
        if (typeof value !== 'undefined') {
            setAddress(parseJson(value.address))
        }
    }, [value])

    const handleDeleteAddress = (id) => {
        const formData = new FormData()
        formData.append("id", id)
        deleteUserAddressService(formData).then(res => {
            let { status, data, message } = resHandler(res);
            status && toast.success(message);
            // status && 
        })
    }
    return (

        <div className='d-flex mb-2'>

            {value && <div className='p-1'>  <input className="form-check-input shadow-none" type="radio" onChange={() => onClickAddress(value.id)} checked={value.is_default == 1} readOnly /></div>}
            <div className='addressdetails p-3 w-100'>
                {/* <h5>Office</h5> */}
                {/* <span className='fw-bold'>Location :</span><span> Noida</span><br/> */}
                <span className='fw-bold'>Name :</span><span>{address && address.name}</span><br />
                {/* <span className='fw-bold'>House No./ Building Name :</span><span>{address && address.flat_no}</span><br/> */}
                <span className='fw-bold'>Address :</span><span>{address && address.address}</span><br />
                {/* <span className='fw-bold'>Landmark :</span><span>{address && address.landmark}</span><br/> */}
                <span className='fw-bold'>Mobile no :</span><span> {address && address.mobile}</span><br />
                <span className='fw-bold'>Email :</span><span> {address && address.email}</span><br />
                <span className='fw-bold'>City :</span><span> {address && address.city}</span><br />
                <span className='fw-bold'>Distt :</span><span>{address && address.district}</span><br />
                <span className='fw-bold'>Area Pin:</span><span> {address && address.pincode}</span><br />
                <span className='fw-bold'>State:</span><span> {address && address.state}</span><br />
                <div className='d-flex align-items-center justify-content-between pt-3 my-2  pg-newaddress border-top'>
                    <button type='button' onClick={() => onEditClick(value.id)}>Edit</button>
                    <button type='button' onClick={() => deleteAddress(value.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
