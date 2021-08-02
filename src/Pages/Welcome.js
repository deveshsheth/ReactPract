import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Welcome() {
  return (
    <div>

      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem itemId={0}>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>



      <br /><br />
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This card has supporting text below as a natural lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                card has even longer content than the first to show that equal height action.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>








    </div>
  )
}
