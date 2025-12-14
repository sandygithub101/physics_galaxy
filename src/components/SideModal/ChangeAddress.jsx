import React, { useState } from 'react'
import ChangeAddressCard from './ChangeAddressCard'
import { parseJson } from '../../../helper'
import AddressModal from './AddressModal'

export default function ChangeAddress({ AddressList, changeSelectAddress }) {
    const [showAddress, setShowAddress] = useState(false)

    const handleChangeAddress = (value) => {
        changeSelectAddress(value)
        console.log(value);



    }

    return (
        <>
            {!showAddress ? <div className='mx-auto mt-4 mb-3'> <div className='pg-addressmodal p-3 bg-white shadow'>
                {console.log(AddressList, "ChangeAddress")}
                {/* <div className='my-3 pg-changedadd'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h5>Change Delivery Address</h5>
                    <button type='button'><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
            </div> */}
                {AddressList && AddressList.map((item, i) => {
                    return (
                        <ChangeAddressCard key={i} address={parseJson(item.address)} value={item} onClickAddress={handleChangeAddress} />
                    )
                })
                }
                <div>
                    {/* <button onClick={() => setShowAddress(true)}>Update Address</button> */}
                </div>

            </div> </div> :
                <AddressModal closeAddresModal={() => setShowAddress(false)} />
            }
        </>

    )
}
