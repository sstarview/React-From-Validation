import React from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserData from "./components/UserData";

class App extends React.Component {
  state = {
    // initialState: {
    //   name: "",
    //   email: "",
    //   password: "",
    //   phone: "",
    //   address: "",
    // errors: {
    //   nameError: "jbjbj",
    //   emaiError: "",
    //   passwordError: "",
    //   phoneError: "",
    //   addressError: ""
    // }
    // },
    userData: [],
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    errors: {
      nameError: "",
      emailError: "",
      passwordError: "",
      phoneError: "",
      addressError: ""
    }
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

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let phoneError = "";
    let addressError = "";

    if (!this.state.name) {
      nameError = "Name is must";
    }
    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }
    if (!this.state.password || this.state.password.length < 6) {
      passwordError = "Password must be 6 character long";
    }
    if (
      !this.state.phone ||
      isNaN(this.state.phone) ||
      this.state.phone.length < 10
    ) {
      phoneError = "Invalid Phone Number";
    }
    if (!this.state.address) {
      addressError = "Invalid Address";
    }
    if (
      nameError ||
      emailError ||
      passwordError ||
      phoneError ||
      addressError
    ) {
      this.setState({
        errors: {
          nameError,
          emailError,
          passwordError,
          phoneError,
          addressError
        }
      });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();

    const isValid = this.validate();

    const updatedData = [
      {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address
      }
    ];

    // setting the array with only one user
    // setting data to initial state
    if (isValid) {
      this.setState({
        userData: [...updatedData],
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",

        errors: {
          nameError: "",

          emailError: "",
          passwordError: "",
          phoneError: "",
          addressError: ""
        }
      });
    }
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
          errors={this.state.errors}
        />
        <div className="vl"></div>
        <UserData userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
