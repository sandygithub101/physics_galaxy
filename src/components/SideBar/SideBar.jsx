import React, { useState } from 'react'
import './SideBar.css'
import ExpandableNav from './ExpandableNav/ExpandableNav'
import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
export default function SideBar(props) {

  const [mentorShipList, setMentorhipList] = useState();
  const [parentData, setParentData] = useState([])
  const [activeTabId, setActiveTabId] = useState();
  const [openIndex, setOpenIndex] = useState(null);
  const { pathname } = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();
  const id = searchParam.get('courses_id')
  // const { id } = useParams()
  const sendChildId = (value) => {
    props.getChildId(value.id)
    setActiveTabId(value)
  }
  useEffect(() => {
    if (props.list) {
      const filteredData = props.list.filter(item => item.parent_id === "0");
      setParentData(filteredData)

    }
  }, [props.list])

  useEffect(() => {
    const id = searchParam.get('courses_id')
    const pathArray = pathname.split('/');

    // Remove the last ID by slicing the array
    pathArray.pop();

    // Reconstruct the new path
    const newPath = pathArray.join('/');
    if (pathname == '/allcourses' && id != null) {
      // console.log(childData(parentData[0]?.id)[0])
      setActiveTabId(activeTabData(id))
      props.getChildId(id)
    }
    if (typeof parentData[0]?.id != 'undefined' && pathname !== '/allcourses') {
      // console.log(childData(parentData[0]?.id)[0])
      setActiveTabId(childData(parentData[0]?.id)[0])
      props.getChildId(childData(parentData[0]?.id)[0]?.id)
      // setSearchParam()
    }
    if (typeof parentData[0]?.id != 'undefined' && pathname == '/allcourses' && !id) {
      setActiveTabId(childData(parentData[0]?.id)[0])
      props.getChildId(childData(parentData[0]?.id)[0]?.id)
    }
    // if(pathname == '/allcourses' && id == null){
    //   setActiveTabId(childData(parentData[0]?.id)[0])
    //   props.getChildId(childData(parentData[0]?.id)[0]?.id)
    // }
    // console.log(childData(parentData[0]?.id))

  }, [parentData, searchParam])




  // const parentDatafunction = () =>{
  //   const  filteredData = props.list.filter(item => item.parent_id === "0");
  //   return filteredData;
  // }

  const childData = (value) => {
    return props.list.filter(item => item.parent_id === value);
  }

  const activeTabData = (value) => {
    // console.log(props?.list?.find(item => item.id == id), typeof id);
    return props.list?.find(item => item.id == id)
  }

  const handleExpand = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Toggle the index
  };

  return (
    <ul className="nav nav-pills flex-column nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">

      {parentData && parentData.map((item, i) => {
        return (
          <ExpandableNav name={item.name} key={i} index={i} childId={sendChildId} id={item.id} expandList={childData(item.id)} ActiveTab={activeTabId} isOpen={i === openIndex} handleExpand={handleExpand} />
        )
      })}



    </ul>
  )
}

