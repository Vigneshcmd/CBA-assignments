import React from "react";

function Register() {
  return (
    <div>
      <h2>Registration Form</h2>

      <div>
        <label>Name </label>
        <input type="text" />
      </div>

      <div>
        <label>Email </label>
        <input type="email" />
      </div>

      <div>
        <label>Password </label>
        <input type="password" />
      </div>

      <div>
        <label>Confirm Password </label>
        <input type="password" />
      </div>

      <button>Register</button>
    </div>
  );
}

export default Register;
