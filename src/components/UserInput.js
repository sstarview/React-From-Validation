import React, { Component } from "react";
import "./UserInput.css";

export default class UserInput extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      name,
      email,
      phone,
      password,
      address,
      errors
    } = this.props;
    return (
      <div className="Form">
        <h1>Form</h1>
        <div className="myform">
          <form onSubmit={handleSubmit}>
            <div className="form1">
              <label>Name: </label>
              <input
                name="Name"
                value={name}
                type="text"
                onChange={handleChange}
                placeholder="Name"
              ></input>
              <div>{errors.nameError}</div>
            </div>
            <div className="form1">
              <label>Email: </label>
              <input
                value={email}
                name="Email"
                type="email"
                onChange={handleChange}
                placeholder="Email"
              ></input>
              <div>{errors.emailError}</div>
            </div>
            <div className="form1">
              <label>Password: </label>
              <input
                value={password}
                name="Password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
              ></input>
              <div>{errors.passwordError}</div>
            </div>
            <div className="form1">
              <label>Phone: </label>
              <input
                value={phone}
                name="Phone"
                type="tel"
                onChange={handleChange}
                placeholder="Phone"
              ></input>
              <div>{errors.phoneError}</div>
            </div>
            <div className="form1">
              <label>Address: </label>
              <input
                value={address}
                name="Address"
                type="text"
                onChange={handleChange}
                placeholder="Address"
              ></input>
              <div>{errors.addressError}</div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
