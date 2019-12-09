import React from "react";
import { MDBCardText } from 'mdbreact';

const FeedGif = (props) => {
    // console.log('COMMENTS POST:>>',JSON.stringify(props.comment));
  return (
          <MDBCardText style={{margin:"10px",width:"100%"}}>
            <b>{props.comment.authorName}:</b>
            {props.comment.comment}
            <hr/>
          </MDBCardText>
  );
};

export default FeedGif;


/*

*/