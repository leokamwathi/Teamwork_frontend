import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard,MDBCardBody} from 'mdbreact';
import { Redirect } from "react-router-dom";
import {APIendpoint} from '../config/variables'

// Fix #4 Employee can login and get a token.
class LoginFormPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loggedIn:false
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = () => {

    fetch(APIendpoint + '/auth/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(res => {
      console.log('RAW RES', res);
        res.json().then((data)=>{
          console.log('RAW DATA:', data)
            console.log('DATA:', `${data.data.token} ${data.data.userId}`)

            localStorage.removeItem('token')
            localStorage.removeItem('userId')
          if(data.data.token){
            localStorage.setItem('token', data.data.token)
            localStorage.setItem('userId', data.data.userId)
          }
            console.log("LOCAL TOKEN",localStorage.getItem('token'))
            this.setState({loggedIn:true})
        }).catch(err => {
            console.log(err)
            alert('Invalid username or password')
        });
        
    })
    .catch(err => {
      console.log(err)
      alert('Invalid username or password')
    });
  }

   render() {
    if(this.state.loggedIn){
       return <Redirect to="/" />
    }

    return (
<MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard style={{ margin: "10%" }}>
        <MDBCardBody>
          <form onSubmit = {this.sendForm}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email"
                autoComplete="email" 
                value={this.state.email}
                onInput={this.handleInput}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                autoComplete="password" 
                validate
                name="password"
                value={this.state.password}
                onInput={this.handleInput}
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.sendForm}>Login</MDBBtn>
            </div>
          </form>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )}
}


export default LoginFormPage;