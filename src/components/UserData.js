import React, { Component } from "react";
import "./UserData.css";

export default class UserData extends Component {
  render() {
    const { userData } = this.props;
    console.log(userData);

    return (
      <div className="user-data">
        <h1>User Information</h1>

        {userData.map((item, index) => (
          <div key={index}>
            <h5>Name: {item.name}</h5>
            <h5>Email: {item.email}</h5>
            <h5>Password: {item.password}</h5>
            <h5>Phone: {item.phone}</h5>
            <h5>Address: {item.address}</h5>
          </div>
        ))}
      </div>
    );
  }
}
