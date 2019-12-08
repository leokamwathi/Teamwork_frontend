import React from "react";
import { MDBCardTitle, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBCollapseHeader, MDBIcon, MDBCollapse } from 'mdbreact';
import CommentsPage from '../pages/commentsPage'

const articlePost = (props) => {
  const link = "/articles/"+ props.post.articleId
  const { collapseID } = props.post.articleId;
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
          <div>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Comments
            </button>
          </div>
          <div class="collapse" id="collapseExample">
            Post comments
            <CommentsPage articleId={props.post.articleId} />
          </div>
         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default articlePost;


