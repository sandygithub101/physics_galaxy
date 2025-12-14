import React, { useEffect, useState } from "react";
import "./ExpandableNav.css";
import { Link } from "react-router-dom";
export default function ExpandableNav(props) {
  const [expand, setExpand] = useState(false);
  const [active, setActive] = useState(false);

  const handleExpand = (indexValue) => {
    // props.getIndex(indexValue);
    setExpand(!expand);

  };
  const getchildId = (value) => {
    props.childId(value)
  }

  useEffect(() => {

  }, [])
  const Activetab = (TargetId) => {

    if (props.ActiveTab === TargetId) {
      setActive(true)
      return true;
    }

  }

  function truncateTitle(value, maxLength = 26) {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }

  return (
    <li className="nav-item my-1 dropdown">
      <Link
        className={`nav-link p-2 dropdown-toggle d-flex justify-content-between ${props.ActiveTab && props.ActiveTab.parent_id == props.id && `active`}`}
        data-bs-toggle="collapse"
        onClick={() => props.handleExpand(props.index)}
        role="button"
        aria-expanded={props.isOpen}
        aria-controls="jee11th"
      >
        <span>{truncateTitle(props.name)}</span>
        <span>
          <i
            className={`fa ${expand ? "fa-angle-down" : "fa-angle-right"
              } fw-bold ${active && 'active'}`}
            aria-hidden="true"
          ></i>
        </span>
      </Link>

      {props.isOpen && <ul className="pg-colaps" >
        {
          props.expandList && props.expandList.map((item, i) => {
            return (
              <li key={i} onClick={() => getchildId(item)}><Link className={props.ActiveTab.id === item.id ? "nav-link active" : "nav-link"}>	{truncateTitle(item.name)}</Link></li>
            )
          })
        }

      </ul>}

    </li>
  );
}
