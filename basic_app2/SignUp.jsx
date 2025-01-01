import React from 'react';
import './app.css'
function SignUp() {
    return (
        <>
            <div className="login-container">
      <div className="login-background">
        <h2 className="login-heading">Register</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" className="form-input" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone Number" className="form-input" />
          </div>
          <div className="form-group">
            <input type='password' placeholder="Password" className="form-input" />
          </div>
          <div className="form-group">
            <select className="form-input">
              <option value="Select Role">Select Role</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
          </div>
          <div className="form-group">
            <button className="form-button" type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div> 
        </>
    );
}

export default SignUp;
