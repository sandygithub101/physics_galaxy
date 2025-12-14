import React from 'react'

import './TestTable.css'
import galaxy_logo from '../../assets/images/galaxy-logo.png'
import { Link } from 'react-router-dom';
export default function TestTable() {
    return (
        <>
            <section className='table_header '>
                <div className='container'>

                    <div className="h-logo p-1">
                        <Link className="navbar-brand logo" to='/'>
                            <img src={galaxy_logo} alt="Physics Galaxy" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className='text-center bg-warning'>
                <strong className='fs-3 text-dark'>SKT</strong>
            </div>
            <div className="table_main container mt-4">
                <div className='table_div row py-3 px-3'>
                    {/* table 1 */}
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Total Question</th>
                                <th>Total Time (Minutes)</th>
                                <th>Total Marks</th>
                                <th>Total Number Of Sections</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>5 Min's</td>
                                <td>10</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* table 2 */}
                    <div className="table_2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Section Name</th>
                                    <th>Total Questions</th>
                                    <th>Total Marks</th>
                                    <th>Marks per question</th>
                                    <th>Negatie marks per question</th>
                                    <th>Total Time (Minutes)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>subject</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='container-fluid'>
                        <div className='row table_btn_main border'>
                            <div className="col-lg-8 col-md-8 d-flex align-items-center">
                                <span><input type='checkbox' /> I head read, understood and agreed the instruction and disqualification rules of the exam.</span>
                            </div>
                            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-end flex-wrap table_btn_div">
                                <button>
                                    <select>
                                        <option>English</option>
                                        <option>Hindi</option>
                                    </select>
                                </button>
                                <button>Start Test</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
