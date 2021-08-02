import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';

export const AddForm = () => {
  return (

    <div class="container" style={{ width: '50rem' }}>

      <h3 className="text-center">Register Form</h3><br />

      <MDBInput label='Name' id='formControlDefault' type='text' />

      <br />
      <MDBInput label='Age' id='formControlDefault' type='text' />

      <br />

      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I Agree Terms and Conditions' />

      <br />


      <MDBBtn>Submit</MDBBtn>

      <br /> <br /> <br /> <br />

    </div>


  )
}
