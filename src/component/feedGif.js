import React from "react";
import { MDBIcon,MDBInput,MDBCardText,MDBBtn,MDBCardTitle,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage } from 'mdbreact';

const FeedGif = (props) => {
  localStorage.removeItem('token')
  return (
      <MDBCol md="8">
      <MDBCard style={{ margin: "10px" }}>
        <MDBCardBody>
          <MDBCardTitle>{props.post.title}</MDBCardTitle>
          <MDBCardImage className="img-fluid" src={props.post.imageUrl} waves />
          <MDBBtn href="#">Comments</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default FeedGif;


/*

*/