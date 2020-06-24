import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { useHistory } from "react-router-dom";



class Upload extends Component {


   routeChange=()=> {
    //let path = `/`;
    //let history = useHistory();
    //history.push(path);
  };
 


  render() {

    
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <p className="flow-text grey-text text-darken-1">
                My files
              </p>
            </h4>

            



            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
             // onClick={this.routeChange}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Upload
            </button>


            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.routeChange}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Dashboard
            </button>

   
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
)(Upload);

