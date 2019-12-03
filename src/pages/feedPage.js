import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import FeedArticle from '../component/feedArticle'
import FeedGif from '../component/feedGif'
import { MDBContainer, MDBRow } from 'mdbreact';
import NavBar from '../component/navBar'
import {APIendpoint} from '../config/variables'

class FeedPage extends Component {
  constructor() {
    super();
    this.state = {
      feed: []
    };
  }
getFeed = () => {
  return new Promise((resolve,reject)=>{
    fetch(APIendpoint +'/feed', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')} 4`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
        res.json().then((data)=>{
          const result = data.data.map((post)=>{
          if(post.articleId){
            return (<FeedArticle key= {post.articleId} post={post}></FeedArticle>)
          }else{
            return (<FeedGif key={post.gifId} post={post}></FeedGif>)
          }
          })
          console.log('FEED', result);
            resolve(result)
        })
    })
    .catch(err => {
      console.log(err)
      reject(err)
    });
  })}
  
componentDidMount() {
    if(this.state.feed.length===0){
    this.getFeed().then((data)=>{
      this.setState({feed:data})
    }).catch((err)=>console.log(err))
  }
}
render(){
  const token = localStorage.getItem('token')
  if(!token){
      return <Redirect to="/signin" />
  }
  return ( 
    <>
      <MDBContainer> 
        <MDBRow>
          {this.state.feed}
        </MDBRow>
      </MDBContainer>
   </>
  );
};
}

export default FeedPage;