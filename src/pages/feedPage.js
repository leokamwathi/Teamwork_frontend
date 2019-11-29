import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import FeedArticle from '../component/feedArticle'
import FeedGif from '../component/feedGif'
import { MDBContainer, MDBRow } from 'mdbreact';
// , MDBCol, MDBInput, MDBBtn
/*
 data.gifId = post.id
                
                data.createdOn = post.createdAt
                data.title = post.title
                data.flag = post.flaged
                data.imageUrl = post.post
                data.flag = post.flaged
            } else {
                data.articleId = post.id
                data.message = 'Article was successfully posted';
                data.createdOn = post.createdAt
                data.flag = post.flaged
                data.title = post.title
                data.post = post.post
                data.flag = post.flaged
*/
class FeedPage extends Component {
  constructor() {
    super();
    this.state = {
      feed: []
    };
  }
getFeed = () => {
  return new Promise((resolve,reject)=>{
    // http://localhost:3337/api/v1/auth/signin
    // https://teamwork-leo.herokuapp.com/
    // console.log('STATE',this.state);
    fetch('https://teamwork-leo.herokuapp.com/api/v1/feed', {
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
  

render(){
  const token = localStorage.getItem('token')
  if(!token){
      return <Redirect to="/signin" />
  }
  if(this.state.feed.length===0){
    this.getFeed().then((data)=>{
      this.setState({feed:data})
    }).catch((err)=>console.log(err))
  }
  return (     
      <MDBContainer> 
        <MDBRow>
          {this.state.feed}
        </MDBRow>
      </MDBContainer>
   
  
  );
};
}

export default FeedPage;