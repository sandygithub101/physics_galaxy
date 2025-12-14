import React from 'react'

import './TestSubmit.css'
export default function TestSubmit() {
    return (
        <>
            <div className='container submit_table_main my-4'>
                <h3 className='text-center py-3'>Submit Your Test</h3>
                <table className="table">
                    <thead className='table-thead'>
                        <tr>
                            <th>No. of questions</th>
                            <th>Answered</th>
                            <th>Not Answered</th>
                            <th>Marked for reiew</th>
                            <th>Not isited</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>30</td>
                            <td>20</td>
                            <td>05</td>
                            <td>05</td>
                            <td>00</td>
                        </tr>
                    </tbody>
                </table>
                <div className='submit_btn_main d-flex align-items-center justify-content-end'>
                    <button>Close</button>
                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}
