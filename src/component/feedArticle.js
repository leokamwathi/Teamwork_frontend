import React from "react";
import { MDBIcon,MDBInput,MDBCardText,MDBBtn,MDBCardTitle,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage } from 'mdbreact';

const FeedArticle = (props) => {
  localStorage.removeItem('token')
  return (
      <MDBCol md="8">
      <MDBCard style={{ margin: "10px" }}>
        <MDBCardBody>
          <MDBCardTitle>{props.post.title}</MDBCardTitle>
          <MDBCardText>
            {props.post.post}
          </MDBCardText>
          <MDBBtn href="#">Comments</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default FeedArticle;


/*

*/