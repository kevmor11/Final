import React, {Component} from 'react';
import AlertContainer from 'react-alert'
import axios from 'axios';
import http from 'http';

export default
class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: ""
    }
  }

  alertOptions = {
    offset: 255,
    position: 'top right',
    theme: 'dark',
    time: 8000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Sorry, your credentials are not valid. Please try again or Register.', {
      type: 'error',
    })
  }

  enterKeyPress = (e) => {
    if(e.charCode==13){
      this.submitForm();
    }
  }

  redirectToUserPage = (res) => {
    window.location.href = '/';
  }

  goLoginPage = (e) => {
    axios.post('/api/sessions', {
      email: this.state.email,
      password: this.state.password
    })
    .then(this.redirectToUserPage)
  }

  handleRegistrationChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleRegistrationSubmit = (e) => {
    if (this.state.gender === "Other" || this.state.gender === "Prefer Not to Say") {
      this.state.gender = "n/a";
    }
    e.preventDefault();
    axios.post('/api/users', {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender
    })
    .then((response) => {
      this.redirectToUserPage();
    }).catch(this.showAlert);

  }

  render(){
    return (
        <div className="col-lg-6 register-form">
          <form action="/" method="POST" className="registration" onSubmit={this.handleRegistrationSubmit}>
            <h1 className="title register-title">Register</h1>
            <div className="field">
              <label htmlFor="first-name" className="label">Firstname</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  name="first_name"
                  id="first-name"
                  value={this.state.first_name}
                  onChange={this.handleRegistrationChange}
                  placeholder="First Name"
                />
              </p>
            </div>
            <div className="field">
              <label htmlFor="last-name" className="label">Last Name</label>
              <p className="control">
                <input
                className="input"
                type="text"
                name="last_name"
                id="last-name"
                value={this.state.last_name}
                onChange={this.handleRegistrationChange}
                placeholder="Last Name"
              />
              </p>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <p className="control">
                <input
                  className="input"
                  type="email" name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleRegistrationChange}
                  placeholder="Email"
                />
              </p>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <p className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleRegistrationChange}
                  placeholder="Password"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <p className="control">
                <span className="select-gender select">
                  <select name="gender" value={this.state.gender} onChange={this.handleRegistrationChange}>
                    <option value="" disabled>Please Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer Not to Say</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button className="button hover register" >Register</button>
              </p>
            </div>
          </form>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        </div>
      )
    }
}

