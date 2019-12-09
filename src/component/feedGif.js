import React from "react";
import {MDBBtn,MDBCardTitle,MDBCol,MDBCard,MDBCardBody,MDBCardImage } from 'mdbreact';
import FlagButton from '../component/flagButton'

// const handleFlag = (props) => {
//   const gifId = props.post.gifId
//   // console.log('Gif ID Flaged' + gifId);
// }

const FeedGif = (props) => {
  const link = "/gifs/"+ props.post.gifId
 // const flagDisabled = () => { return props.post.flaged == true ? true : false }
  return (
      <MDBCol md="8">
      <MDBCard style={{ margin: "10px" }}>
        <MDBCardBody>
          <div className="content">
              {props.post.authorName} 
            </div>
          <MDBCardTitle>{props.post.title}</MDBCardTitle>
          <MDBCardImage className="img-fluid" src={props.post.imageUrl} waves />
          <MDBBtn href={link}>View</MDBBtn>
          <FlagButton post={props.post} reRender={() => props.reRender()} />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default FeedGif;


/*

*/