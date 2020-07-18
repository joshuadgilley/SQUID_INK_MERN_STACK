import React, { Component } from "react";
import { connect } from "react-redux";
import LinkButton from "../../actions/authActions";


class MyFiles extends Component {
 
  
  
    render() {
      const { user } = this.props.auth;
  
      return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              
            <h4>Files you've uploaded</h4>
  
    



 




  
  
            </div>
          </div>
        </div>
      );
    }


    
  }
  
 
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    {}
  )(MyFiles);
  