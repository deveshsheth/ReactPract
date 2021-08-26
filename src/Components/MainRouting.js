import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export const MainRouting = () => {


  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'

          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar >
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current='page' href='/Welcome'>
                Home
              </MDBNavbarLink>
              <MDBNavbarLink active aria-current='page'>
                <Link to="/product" style={{ color: '#000' }}>Product</Link>
              </MDBNavbarLink>

              <MDBNavbarLink active aria-current='page'>
                <Link to="/productdetails" style={{ color: '#000' }}>Product Details</Link>
              </MDBNavbarLink>

              <MDBNavbarLink active aria-current='page'>
                <Link to="/form" style={{ color: '#000' }}>Forms</Link>
              </MDBNavbarLink>

              <MDBNavbarLink active aria-current='page'>
                <Link to="/userlist" style={{ color: '#000' }}>API</Link>
              </MDBNavbarLink>
              {/* <MDBNavbarLink href='#'>Features</MDBNavbarLink>
          <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
          <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
            Disabled
          </MDBNavbarLink> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
