import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import { Redirect } from "react-router-dom";
import NavBar from '../component/navBar'
import {APIendpoint} from '../config/variables'

// Fix #4 Employee can login and get a token.
class ArticlesPostPage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      post: '',
      articleId:0
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = () => {
    if (!this.state.title || !this.state.post){
        alert('Enter valid Title or Post ')
        return
    }

    fetch(APIendpoint + '/articles', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')} 4`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        post: this.state.post,
        isGif:false,
        authorId:4,
        flaged:false,
        createdOn:new Date()
      })
    })
    .then(res => {
        res.json().then((data)=>{
            console.log('DATA:', JSON.stringify(data.data))
            this.setState({articleId:data.data.articleId})
        })
        
    })
    .catch(err => {
      console.log(err)
      alert('Invalid username or password')
    });
  }

   render() {
    if(this.state.articleId>0){
        const articlePath = '/articles/'+this.state.articleId
       return <Redirect to={articlePath} />
    }

    return (
        <>
<MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard style={{ margin: "10%" }}>
        <MDBCardBody>
          <form onSubmit={this.sendForm}>
            <p className="h5 text-center mb-4">Post Article</p>
            <div className="grey-text">
              <MDBInput
                label="Article Title"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="title"
                autoComplete="title" 
                value={this.state.title}
                onInput={this.handleInput}
              />
              <MDBInput
                label="Article Post"
                group
                type="textarea"
                validate
                error="wrong"
                success="right"
                name="post"
                autoComplete="post" 
                value={this.state.post}
                onInput={this.handleInput}
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.sendForm}>Post Article</MDBBtn>
            </div>
          </form>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
    )}
}


export default ArticlesPostPage;