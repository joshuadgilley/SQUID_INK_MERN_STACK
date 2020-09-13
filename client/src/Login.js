import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./authActions";
import classnames from "classnames";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>

            <form noValidate autoComplete="on" onSubmit={this.onSubmit}>
                <FormControl>
                  <InputLabel htmlFor="component-simple">Email</InputLabel>
                  <Input id="email"
                         value={this.state.email}
                         onChange={this.onChange}
                         error={errors.email}
                         type="email"
                         className={classnames("", {
                           invalid: errors.email || errors.emailnotfound
                         })}/>
                  {errors.email}
                  {errors.emailnotfound}
                </FormControl>

              <FormControl>
                <InputLabel htmlFor="component-simple">Password</InputLabel>
                <Input id="password"
                       value={this.state.password}
                       onChange={this.onChange}
                       error={errors.password}
                       type="password"
                       className={classnames("", {
                         invalid: errors.password || errors.passwordincorrect
                       })}/>
                {errors.password}
                {errors.passwordincorrect}
              </FormControl>
              <div className="col s12" style={{paddingLeft: "11.250px"}}>
                <Button type="submit" variant="outlined" color="gray">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
