import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


class NavbarPage extends Component {
   constructor() {
  super()
    this.state = {
      isOpen: false,
      token: localStorage.getItem('token')
    };
    console.log('constructor',this.state);
   }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
componentDidMount(){
  console.log('dm',this.state.token,localStorage.getItem('token'));
  this.setState({token:localStorage.getItem('token')})
  
}

componentWillUnmount() {
  console.log('wum',localStorage.getItem('token'));
  }
render() {
  // || 
  if ((this.state.token && this.state.token.length==0)|| !this.state.token){
    return (<></>)
  }
  return (
    <Router>
      <MDBNavbar color="aqua-gradient" dark expand="md">
        <MDBNavbarBrand>
  <strong className="white-text">TEAMWORK</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              
              <MDBDropdownItem href="/"><MDBIcon icon="rss" /> Feed</MDBDropdownItem>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdownItem href="/post-article"><MDBIcon icon="newspaper" /> Post Article</MDBDropdownItem>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdownItem href="/post-gif"><MDBIcon icon="image" /> Post Gif</MDBDropdownItem >
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/signout">logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;