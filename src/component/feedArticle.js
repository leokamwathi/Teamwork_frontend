import React from "react";
import { MDBCardText,MDBBtn,MDBCardTitle,MDBCol,MDBCard,MDBCardBody } from 'mdbreact';

const FeedArticle = (props) => {
   const link = "/articles/"+ props.post.articleId
  return (
      <MDBCol md="8">
      <MDBCard style={{ margin: "10px" }}>
        <MDBCardBody>
            <div className="content">
              {props.post.authorName} 
            </div>
          <MDBCardTitle>{props.post.title}</MDBCardTitle>
          <MDBCardText>
            {props.post.post}
          </MDBCardText>
          <MDBBtn href={link}>View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default FeedArticle;


/*

*/