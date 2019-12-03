import React from "react";
import NavBar from "./NavBar";

function Login() {
  return (
    <div>
      <NavBar />
      <div>
        "Login Form";
        <form id="LoginForm">
        <div className="form-group col-sm-4">
            <input type="text" className="form-control" name="username" placeholder="User Name" />
        </div>
        <div className="form-group col-sm-4">
            <input type="text" className="form-control" name="password" placeholder="Password" />
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login;