import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';
import {APIendpoint} from '../config/variables'

// Fix #4 Employee can login and get a token.
class CommentsPostPage extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = () => {
    if (!this.state.comment){
        alert('Enter valid comment ')
        return
    }
    const id = this.props.id 
    const link = APIendpoint + '/articles/'+id+'/comments'
    fetch(link, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')} ${localStorage.getItem('userId')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: this.state.comment,
        postId:id,
        authorId:localStorage.getItem('userId'),
        flaged:false,
        createdOn:new Date()
      })
    })
    .then(res => {
        res.json().then((data)=>{
            console.log('DATA:', data)
            this.setState({comment:''})
            this.props.reLoadComments()
        }).catch((err)=>console.log('ERROR!!!!',err))
    })
    .catch(err => {
      console.log(err)
      alert('Invalid comment')
    });
  }

   render() {

    return (
        <>
<MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <br/>
          <form onSubmit={this.sendForm}>
            <p className="h5 mb-8">Post Comment</p>
            <div className="grey-text">
              <MDBInput
                type="textarea"
                rows="2"
                name="comment"
                autoComplete="comment" 
                label="Enter Your Comment"
                icon="pencil-alt"
                value={this.state.comment}
                onInput={this.handleInput}
              />
            </div>
            <div className="text-right">
              <MDBBtn onClick={()=>this.sendForm()}>Post</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br/>
    </>
    )}
}


export default CommentsPostPage;