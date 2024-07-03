import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>I am header</h1>
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
};

export default Header;
