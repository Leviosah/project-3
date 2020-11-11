import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Main from './pages/Main';
import './components/App.css';
import Login from "./components/login";
import SignUp from "./components/signup";

class App extends Component {
  constructor(){
    super();
    this.loggedIn = this.loggedIn.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  state = {
    user: null
  }

  componentDidMount(){
    if(localStorage.getItem("currentUser")){
      this.setState({user: JSON.parse(localStorage.getItem("currentUser"))})
    }
  }

  loggedIn(user){
    console.log("setting current user...", user)
    this.setState({user})
  }

  handleLogout(){
    localStorage.removeItem("currentUser");
    this.setState({user:null})
    window.location.replace("/")
  }
  
  render(){

    return (
      <div className="App">
      <Router>
      {this.state.user && <Redirect to="/member"/>}
    <div className="App">
      {!this.state.user ? <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>SAFESPACE</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> : <button onClick={this.handleLogout}>Log Out</button>}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={() => <Login setUser={this.loggedIn}/>} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/member" component={Main}/>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
      
    </div>
  );
}
}

export default App;
