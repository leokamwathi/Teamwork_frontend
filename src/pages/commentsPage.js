import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import CommentsPost from '../component/commentsPost'
import CommentsPostPage from './commentsPostPage'
import { MDBContainer, MDBRow } from 'mdbreact';
import {APIendpoint} from '../config/variables'


class CommentsPage extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      checkedComments:false,
      postId:null
    };
  }
getComments = () => {
  return new Promise((resolve,reject)=>{
    const id = this.props.articleId || this.props.gifId
    this.setState({postId:id})
    const link = APIendpoint + '/articles/'+id+'/comments'
    fetch(link, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')} 4`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
        res.json().then((data)=>{
          if(!data.data || data.data.length===0){
            return <></>
          }
            const result = data.data.map((comment)=>{
              // console.log(JSON.stringify(comment));
            return (<CommentsPost key= {comment.commentId} comment={comment}></CommentsPost>)
          })
          // console.log('FEED', result);
            resolve(result)
        })
    })
    .catch(err => {
      console.log(err)
      reject(err)
    });
  })}
  
reLoadComments(){
  this.setState({ comments: []})
  this.getComments().then((data) => {
    this.setState({ comments: data})
  }).catch((err) => console.log(err))
}
render(){
  const token = localStorage.getItem('token')
  if(!token){
      return <Redirect to="/signin" />
  }
  if (this.state.comments.length === 0){
    this.getComments().then((data)=>{
      this.setState({ comments: data})
    }).catch((err)=>console.log(err))
  }
  return ( 
    <>
      <MDBContainer> 
          <MDBRow>
          <CommentsPostPage reLoadComments={() => this.reLoadComments()} id={this.props.articleId || this.props.gifId || this.state.postId}/>
          </MDBRow>
        <MDBRow>
          {this.state.comments}
        </MDBRow>
      </MDBContainer>
   </>
  );
};
}

export default CommentsPage;