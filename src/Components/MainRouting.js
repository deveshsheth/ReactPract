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
                <Link to="/product" style={{ textDecoration: 'none' }}>Product</Link>
              </MDBNavbarLink>

              <MDBNavbarLink active aria-current='page'>
                <Link to="/productdetails">Product Details</Link>
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
