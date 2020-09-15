import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../src/authActions";


class Navbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();



  };


  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">


          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "helvetica"
              }}
              className="col s5 brand-logo center black-text"
            >
              SQUID INK
            </Link>


            <div style={{ height: "20vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">


            <LinkButton
            style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "5rem"
              }}
            to='/dashboard'
            onClick={(event) => {
                console.log('custom event here!', event)
              }}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
          >Home</LinkButton>


            <LinkButton
            style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "5rem"
              }}
            to='/squid'
            onClick={(event) => {
                console.log(event)
              }}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
          >SQUID</LinkButton>



          <LinkButton
            style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "5rem"
              }}
            to='/upload'
            onClick={(event) => {
                console.log('custom event here!', event)
              }}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
          >upload form</LinkButton>



            <LinkButton
            style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "5rem"
              }}
            to='/myfiles'
            onClick={(event) => {
                console.log('custom event here!', event)
              }}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
          >See my files</LinkButton>



 



    


            </div>
            </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
