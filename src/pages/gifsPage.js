import React,{ Component } from "react";
import GifPost from '../component/gifPost'
import { MDBContainer, MDBRow } from 'mdbreact';
import {APIendpoint} from '../config/variables'

class GifFeedPage extends Component {
  constructor() {
    super();
    this.state = {
      giffeed:[]
    };
  }
getGifFeed = () => {
  return new Promise((resolve,reject)=>{

    const gifId = this.props.match.params.gifId
    console.log("GIF_ID:",gifId);
    fetch(APIendpoint + '/gifs/'+gifId, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')} 4`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    .then(res => {
        res.json().then((data)=>{
            const post = data.data
          console.log('DATA-ARTICLE',JSON.stringify(post));
          let result
          if(post.gifId){
                result =  (<GifPost key={post.gifId} post={post}></GifPost>)
          }else{
             result =  (<h2>Gif post not found</h2>)
          }
          console.log('Gif', result);
            resolve(result)
        })
    })
    .catch(err => {
      console.log(err)
      reject(err)
    });
  })}
  

render(){
  if(this.state.giffeed.length===0){
    this.getGifFeed().then((data)=>{
      this.setState({giffeed:data})
    }).catch((err)=>console.log(err))
  }
  return ( 
    <>
      <MDBContainer> 
        <MDBRow>
          {this.state.giffeed}
        </MDBRow>
      </MDBContainer>
   </>
  );
};
}

export default GifFeedPage;