import React from "react";
import { Redirect } from "react-router-dom";

const LogoutPage = () => {
  localStorage.removeItem('token')
  localStorage.clear()
  return (
    <div>
      You have been logged out.
      <Redirect to="/signin" />
      </div>
  );
};

export default LogoutPage;