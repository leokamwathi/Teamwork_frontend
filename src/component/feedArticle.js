import React from "react";
import { MDBCardText,MDBBtn,MDBCardTitle,MDBCol,MDBCard,MDBCardBody } from 'mdbreact';
import FlagButton from '../component/flagButton'

// const handleFlag = (props) => {
//   const articleId = props.post.articleId
//   // console.log('Article ID Flaged' + articleId);
// }
const FeedArticle = (props) => {

  
  let linkAppend = "/";
  if (window.location.pathname.split('/')[1] === 'Teamwork_frontend') {
    linkAppend = "/Teamwork_frontend/"
  }

  const link = linkAppend + "articles/"+ props.post.articleId
   // 
  // const flagDisabled = () => { return props.post.flaged == true ? true:false}
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
          <FlagButton post={props.post} reRender={() => props.reRender()}/>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default FeedArticle;


/*
         <MDBBtn disabled={flagDisabled()} onClick={() => handleFlag(props)}>Flag</MDBBtn>
*/