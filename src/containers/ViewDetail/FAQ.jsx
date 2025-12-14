import React from 'react'
import NotFound from '../../assets/images/no_data_found.png'
import { Accordion } from 'react-bootstrap'
import './Faq.css'
export default function FAQ({ value }) {
  // console.log('vvvalue', value)

  return (
    <div className="tabs-deschovr pb-3 tbSectionOption shadow">
      <div className="text-center 1212 p-3">
        {value != '' ?
          <Accordion>{
            value.map((item, i) => {
              return (

                <Accordion.Item className='mb-3' eventKey={i} key={i}>
                  <Accordion.Header>
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.description}
                  </Accordion.Body>
                </Accordion.Item>

              )
            })}  </Accordion>
          :
          <>
            <img src={NotFound} className='img-fluid' />
            <p>No Data Found</p>
          </>

        }
      </div>
    </div>
  )
}
