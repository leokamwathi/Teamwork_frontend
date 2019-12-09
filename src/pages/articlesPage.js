import React,{ Component } from "react";
import ArticlePost from '../component/articlePost'
import { MDBContainer, MDBRow } from 'mdbreact';
import {APIendpoint} from '../config/variables'

class FeedPage extends Component {
  constructor() {
    super();
    this.state = {
      isReRender:false,
      feed:[]
    };
  }
getFeed = () => {
  return new Promise((resolve,reject)=>{

    const articleId = this.props.match.params.articleId
    // console.log("ARTICLE_ID:",articleId);
    fetch(APIendpoint + '/articles/'+articleId, {
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
         //  console.log('DATA-ARTICLE',JSON.stringify(post));
          let result
          if(post.articleId){
            result =  (<ArticlePost key= {post.articleId} post={post}></ArticlePost>)
          }else{
            result =  (<h2>Article post not found</h2>)
          }
          // console.log('Article', result);
            resolve(result)
        })
    })
    .catch(err => {
      console.log(err)
      reject(err)
    });
  })}
  

render(){
  if(this.state.feed.length===0){
    this.getFeed().then((data)=>{
      this.setState({feed:data})
    }).catch((err)=>console.log(err))
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