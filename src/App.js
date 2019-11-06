import React from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserData from "./components/UserData";

class App extends React.Component {
  state = {
    userData: [],
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "Name":
        this.setState({
          name: value
        });
        break;
      case "Email":
        this.setState({
          email: value
        });
        break;
      case "Password":
        this.setState({
          password: value
        });
        break;
      case "Phone":
        this.setState({
          phone: value
        });
        break;
      case "Address":
        this.setState({
          address: value
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = e => {
    // const updatedUserData
    e.preventDefault();
    const updatedData = [
      {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address
      }
    ];
    this.setState({
      userData: [...updatedData],
      name: "",
      email: "",
      password: "",
      phone: "",
      address: ""
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          phone={this.state.phone}
          address={this.state.address}
        />
        <UserData userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
