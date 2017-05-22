import React, {Component} from 'react';

export default
class App extends Component { 
  render(){
    return (
    <div>
      

      <div className="login-registration container">
        <div className="col-lg-6">
          <form action="route" method="POST" className="login">
            <h1 className="title">Login here</h1>
            <h2 className="subtitle">Enter your Email and Password </h2>
            <div className="field">
              <label for="name" className="label">Email</label>
              <p className="control">
                <input className="input" type="email" id="name" placeholder="Email" />
              </p>
            </div>
            <div className="field">
              <label for="password" className="label">Password</label>
              <p className="control">
                <input className="input" type="password" id="password" placeholder="Password"/>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary">Login</button>
              </p>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <form action="route" method="POST" className="registration">
            <h1 className="title">Sign Up here</h1>
            <h2 className="subtitle">Join in and bridge with your loved ones </h2>
            <div className="field">
              <label for="first-name" className="label">Firstname</label>
              <p className="control">
                <input className="input" type="text" id="first-name" placeholder="First Name"/>
              </p>
            </div>
            <div className="field">
              <label for="last-name" className="label">Last Name</label>
              <p className="control">
                <input className="input" type="text" id="last-name" placeholder="Last Name"/>
              </p>
            </div>
            <div className="field">
              <label for="email" className="label">Email</label>
              <p className="control">
                <input className="input" type="email" id="email" placeholder="Email"/>
              </p>
            </div>
            <div className="field">
              <label for="password" className="label">Password</label>
              <p className="control">
                <input className="input" type="password" id="password" placeholder="Password"/>
              </p>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <p className="control">
                <span className="select">
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary">Register</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div> 
    )
  }
}
