import React from "react";
import { MDBCardTitle,MDBCol,MDBCard,MDBCardBody,MDBCardImage } from 'mdbreact';
import CommentsPage from '../pages/commentsPage'

const FeedGif = (props) => {
 // const link = "/gifs/"+ props.post.gifId
  return (
      <MDBCol md="8">
      <MDBCard style={{ margin: "10px" }}>
        <MDBCardBody>
          <div className="content">
              {props.post.authorName} 
            </div>
          <MDBCardTitle>{props.post.title}</MDBCardTitle>
          <MDBCardImage className="img-fluid" src={props.post.imageUrl} waves />
          <CommentsPage gifId ={props.post.gifId} />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default FeedGif;


/*

*/