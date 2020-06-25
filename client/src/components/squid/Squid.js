import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { useHistory } from "react-router-dom";
import LinkButton from "../../actions/authActions";





class Squid extends Component {



  render() {

    
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <p className="flow-text grey-text text-darken-1">
                Squid
              </p>
            </h4>




   
   
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
  { }
)(Squid);

