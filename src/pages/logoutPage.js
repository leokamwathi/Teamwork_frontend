import React, { Component} from "react";
import { Redirect } from "react-router-dom";


class LogoutPage extends Component {

  constructor() {
    super()
    this.state = {
      token: localStorage.getItem('token')
    };
  }

  componentDidMount() {
    localStorage.setItem('token', '')
    localStorage.removeItem('token')
    localStorage.clear()
  }

  componentWillUnmount() {
    localStorage.setItem('token', '')
    localStorage.removeItem('token')
    localStorage.clear()
  }

render(){
  let linkAppend = this.props.reponame
  if (window.location.pathname && window.location.pathname.split('/')[1] === 'Teamwork_frontend') {
    linkAppend = "/Teamwork_frontend/"
  } else {
    linkAppend ="/"
  }

  localStorage.setItem('token','')
  localStorage.removeItem('token')
  localStorage.clear()
  const singinLink = linkAppend+"signin"
  return (
    <div>
      You have been logged out.
      <Redirect to={singinLink} />
      </div>
  );
}
};

export default LogoutPage;