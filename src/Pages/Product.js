import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { Link, Route } from 'react-router-dom';
import samsung from '../images/samsung.jpg';
import apple from '../images/apple.jpg';
import oneplus from '../images/oneplus.jpg';


export const Product = () => {
  return (
    <div>
      <br />
      <h4 className="text-center"><u>Product List</u></h4>
      <br />

      <MDBTable>
        <MDBTableHead light>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Mobile</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td><Link to="/product/samsung">Samsung</Link>

            </td>
            <td>34000</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td><Link to="/product/apple">Apple</Link></td>
            <td>68000</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td><Link to="/product/oneplus">One Plus</Link></td>
            <td>30000</td>
            <td>8</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <br />
      <br />

      {/* Samsung Routing */}
      <Route path="/product/samsung">
        <div className="container">
          <MDBCard style={{ maxWidth: '60%' }}>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage src={samsung} alt='...' fluid />

              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardTitle>Samsung</MDBCardTitle>
                  <MDBCardText>
                    The Samsung Group is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul.
                    It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol.
                    As of 2020, Samsung has the 8th highest global brand value.
                  </MDBCardText>
                  <MDBCardText>
                    <MDBBtn href='#'>Read More</MDBBtn>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>

      </Route>

      {/* Apple Routing */}
      <Route path="/product/Apple">
        <div className="container">
          <MDBCard style={{ maxWidth: '60%' }}>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage src={apple} alt='...' fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardTitle>Apple</MDBCardTitle>
                  <MDBCardText>
                    The history of the iPhone development by Apple Inc. spans from the early 2000s to about 2010. The first iPhone was released in 2007.
                    By the end of 2009, iPhone models had been released in all major markets.
                  </MDBCardText>
                  <MDBCardText>
                    <MDBBtn href='#'>Read More</MDBBtn>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </Route>

      {/* OnePLus Routing */}
      <Route path="/product/oneplus">
        <div className="container">
          <MDBCard style={{ maxWidth: '60%' }}>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage src={oneplus} alt='...' fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardTitle>One Plus</MDBCardTitle>
                  <MDBCardText>
                    OnePlus was founded on 16 December 2013 by former Oppo vice-president Pete Lau and Carl Pei.
                    According to Chinese public records, OnePlus' only institutional shareholder is Oppo Electronics.
                  </MDBCardText>
                  <MDBCardText>
                    <MDBBtn href='#'>Read More</MDBBtn>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>

        </div>




      </Route>
    </div>
  );
}
