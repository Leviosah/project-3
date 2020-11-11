import React, { Component } from "react";
import {signup} from "../utils/API";

export default class SignUp extends Component {
    state = {
        nickname: "",
        email: "",
        password: ""
    }

    handleInputChange = ({target:{value,name}}) => {
        this.setState({[name]:value})
    }

    handleSignUp = () => {
       signup(this.state)
        .then(res => console.log(res));;
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Nick Name</label>
                    <input type="text" onChange={this.handleInputChange} value={this.state.nickname} name="nickname" className="form-control nickname" placeholder="Nick Name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={this.handleInputChange} value={this.state.email} name="email"  className="form-control email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.handleInputChange} value={this.state.password} name="password" className="form-control password" placeholder="Enter password" />
                </div>

                <button type="button" className="btn btn-light btn-block" onClick={this.handleSignUp}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <button type="button" className="btn btn-light btn-block" >Sign In</button>
                </p>
            </form>
        );
    }
}