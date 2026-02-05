import React from "react";

function Login() {
  return (
    <div>
      <h2>Login Form</h2>

      <div>
        <label>Email Id </label>
        <input type="text" />
      </div>

      <div>
        <label>Password </label>
        <input type="password" />
      </div>

      <button>Login</button>
    </div>
  );
}

export default Login;
