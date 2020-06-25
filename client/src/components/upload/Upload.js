import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { useHistory } from "react-router-dom";
import LinkButton from "../../actions/authActions";
import axios from 'axios';




class Upload extends React.Component {


  constructor(props) {
    super(props);
    this.state ={
        file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
}
onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myfile',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("http://localhost:5000/api/uploads",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
            console.log("uploaded"); 
        }).catch((error) => {
    });
}

onChange(e) {
    this.setState({file:e.target.files});
}
  render() {

    
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <p className="flow-text grey-text text-darken-1">
                Upload files to server
              </p>
            </h4>

            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-group">
                            <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange}/>
                            {console.log(this.state.file)}
                        </div>
                        <div className="form-group">
                            <button className="btn btn-small waves-effect waves-light hoverable blue accent-3" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>

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
)  (Upload);

