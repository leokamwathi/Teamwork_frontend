import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
// import {linkAppend} from '../config/variables'


class NavbarPage extends Component {
   constructor() {
  super()
     const token = localStorage.getItem('token')
      this.state = {
      isOpen: false,
      token
    };
   // console.log('constructor',this.state);
   }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
componentDidMount(){
 // console.log('component_dm',this.state.token,localStorage.getItem('token'));
  // this.setState({token:localStorage.getItem('token')})
  // setTimeout(() => {
  //   this.setState({ token: localStorage.getItem('token') })
  //   console.log('I WAS setTimeOUT', this.state.token);
  // }, 2000)
}

componentWillMount() {
 // this.setState({ token: localStorage.getItem('token') })
  // console.log('wum',localStorage.getItem('token'));

  }
render() {
  setTimeout(() => {
    this.setState({ token: localStorage.getItem('token') })
  }, 0)

  let linkAppend = this.props.reponame
  if (window.location.pathname.split('/')[1] === 'Teamwork_frontend') {
    linkAppend = "/Teamwork_frontend/"
  } else {
    linkAppend = "/"
  }
  // || 
  const feedlink = linkAppend;
  const postArticleLink = linkAppend + "post-article";
  const postGifLink = linkAppend + "post-gif";
  const signOutLink = linkAppend + "signout";
  let navbuttons = (<></>);

  if ((this.state.token && this.state.token.length===0)|| !this.state.token){
    navbuttons = (<></>)
  }else{
    navbuttons = (<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBDropdownItem href={feedlink}><MDBIcon icon="rss" /> Feed</MDBDropdownItem>
        </MDBNavItem>
        <MDBNavItem>
          <MDBDropdownItem href={postArticleLink}><MDBIcon icon="newspaper" /> Post Article</MDBDropdownItem>
        </MDBNavItem>
        <MDBNavItem>
          <MDBDropdownItem href={postGifLink}><MDBIcon icon="image" /> Post Gif</MDBDropdownItem >
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <MDBIcon icon="user" />
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default">
              <MDBDropdownItem href={signOutLink}>logout</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBCollapse>);
  }


  return (
    <Router>
      <MDBNavbar color="aqua-gradient" dark expand="md">
        <MDBNavbarBrand>
  <strong className="white-text">TEAMWORK</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        {navbuttons}
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;