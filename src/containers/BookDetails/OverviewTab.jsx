import React, { useState } from 'react'
import Combo from './Combo';

export default function OverviewTab({ value }) {
  const [language, setLanguage] = useState(true);
  return (
    <div><div className="bg-white pg-tabs-description pb-3 shadow">
      <div className="d-flex align-items-center justify-content-between p-3">
        <h3>Description</h3>
        <span><button className='toggle' onClick={() => setLanguage(!language)}>{language ? 'Hindi' : 'English'}</button></span>
        {/* <i className="fa fa-toggle-on" aria-hidden="true"></i> */}
      </div>
      {language ? <div className='overview' dangerouslySetInnerHTML={{ __html: value.description.data }} />
        :
        <div className='overview' dangerouslySetInnerHTML={{ __html: value.description_2.data }} />
      }
    </div>
      <div>
        <h4 className='text-black '>Related Courses</h4>
        <Combo data={value.related_courses} />
      </div>
    </div>
  )
}
