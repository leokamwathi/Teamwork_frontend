import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Redirect } from "react-router-dom";

// Fix #4 Employee can login and get a token.
class LoginFormPage extends Component {
  constructor() {
    super();
    const token = localStorage.getItem('token')
    this.state = {
      email: '',
      password: '',
      token,
      userId: '',
      loggedIn:false
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = () => {

    // http://localhost:3337/api/v1/auth/signin
    // https://teamwork-leo.herokuapp.com/
    // console.log('STATE',this.state);
    fetch('https://teamwork-leo.herokuapp.com/api/v1/auth/signin', {
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
        res.json().then((data)=>{
            console.log('DATA:', `${data.data.token} ${data.data.userId}`)
            const token = data.data.token
            const userId = data.data.userId
            localStorage.setItem('token', token)
            localStorage.setItem('userId', userId)
            this.setState({token})
            this.setState({loggedIn:true})
        })
        
    })
    .catch(err => {
      console.log(err)
      alert('Invalid username or password')
    });
  }

   render() {
    localStorage.setItem('token', this.state.token)
    localStorage.setItem('userId', this.state.userId)
    if(this.state.loggedIn){
       return <Redirect to="/" />
    }

    return (
<MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
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
                value={this.state.email}
                onInput={this.handleInput}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
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
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )}
}


export default LoginFormPage;