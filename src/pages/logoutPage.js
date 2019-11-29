import React from "react";
import { Redirect } from "react-router-dom";

//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const LogoutPage = () => {
  localStorage.removeItem('token')
  return (
    <div>
      You have been logged out.
      <Redirect to="/signin" />
      </div>
  );
};

export default LogoutPage;