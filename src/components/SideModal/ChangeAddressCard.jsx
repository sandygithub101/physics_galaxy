import React from 'react'

export default function ChangeAddressCard({ value, address, onClickAddress }) {

  return (
    <div className='mb-3 cursor' onClick={() => onClickAddress(value.id)}>
      <div className='d-flex justify-content-between border-bottom'>
        <div className='d-flex '>
          <div className='p-1 me-2'>  <input className="form-check-input shadow-none" type="radio" onChange={() => onClickAddress(value.id)} checked={value.is_default == 1} /></div>
          <div>
            <span className='fw-bold'>{address.Name}</span><br />
            {/* <span className='ms-2'>(Default)</span><br/> */}
            <span>{address.flat_no}</span><br />
            <span>{address.landmark}</span><br />
            <span>{address.city},</span><br />
            <span>{address.state} - {address.pin}</span><br />
            <span>{address.mobile}</span>
          </div>
        </div>
        {value.is_default == 1 && <div className='pg-changedaddbtn'>
          <button type='button' disabled>Default</button>
        </div>}
      </div>
    </div>
  )
}
