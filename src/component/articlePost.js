import React from "react";
import { MDBCardTitle, MDBCol, MDBCard, MDBCardBody, MDBCardText } from 'mdbreact';
import CommentsPage from '../pages/commentsPage'

const articlePost = (props) => {
 // const link = "/articles/"+ props.post.articleId
 // const { collapseID } = props.post.articleId;
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
          <CommentsPage articleId={props.post.articleId} />         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default articlePost;


