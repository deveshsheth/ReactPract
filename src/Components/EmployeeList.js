import React from 'react'
import { Employee } from './Employee'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export const EmployeeList = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">Employee List</h3>
            <MDBTable>
                <MDBTableHead light>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>Action</th>
                    </tr>
                </MDBTableHead>
            </MDBTable>
            {
                props.employeeList.length <= 0 ? "No Employee Found" :

                    props.employeeList.map((employee) => {

                        return <Employee employee={employee} key={employee.eId} onDelete={props.onDelete} />
                    })
            }

            {/* <Employee employee = {props.employeeList[0]}/> */}

        </div>
    )
}
