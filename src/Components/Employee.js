import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export const Employee = ({ employee, onDelete }) => {
  return (

    <MDBTable>
      <MDBTableBody>
        <tr>
          <th scope='row'>{employee.eId}</th>
          <td>{employee.eName}</td>
          <td>{employee.eAge}</td>
          <td><button className="btn btn-danger" onClick={() => { onDelete(employee) }}>Delete</button></td>
        </tr>

      </MDBTableBody>
    </MDBTable>
  )
}
