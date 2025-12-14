import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import About_iits_assets from '../about/About_iits_assets';
import './think_navbar.css';

const Ab_think_navbar = () => {

    const location = useLocation();
    const path_text = location.pathname.split('/')[1];

    return (
        <>
            <div className="col-md-3 py-2">
                <div className="ab_think_navbar w-100">
                    <ul className="navbar-nav ab_think_menu">
                        {
                            About_iits_assets.map((item, i) => {
                                return (
                                    <li className="nav-item">
                                        <Link className={`nav-link ${path_text === item.to && 'active'}`} aria-current="page" key={i} to={`/${item.to}`}>
                                            {i.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Ab_think_navbar