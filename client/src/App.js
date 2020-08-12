import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "../src/authActions";
//../Users/caitlin/SQUID_MERN/server/actions/authActions.js
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "../src/Navbar";
import Landing from "../src/Landing";
import Register from "../src/Register";  
import Login from "./Login"; 
import PrivateRoute from "../src/PrivateRoute";
import Dashboard from "./Dashboard";
import Upload from "../src/Upload";
import Squid from "../src/Squid";
import MyFiles from "../src/MyFiles";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";

    
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
        
            <Navbar />
           
            
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={withRouter(Landing)} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={withRouter(Dashboard)} />
              <PrivateRoute exact path="/upload" component={withRouter(Upload)} />
              <PrivateRoute exact path="/squid" component={Squid} />
              <PrivateRoute exact path="/myfiles" component={withRouter(MyFiles)} />
            </Switch>

           
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
