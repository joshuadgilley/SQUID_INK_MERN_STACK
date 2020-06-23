import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";





class Upload extends Component {
  
  
    
  
    render() {
  
      return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
        <p>Upload</p>
        </div>
      );
    }
  }


Upload.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
