// @flow
import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { createProject } from "actions";
import axios from "axios";
import { CookiesProvider } from 'react-cookie';
import cookie from "react-cookie";
import ls from 'local-storage'; 
import LogIn from "./components/login";
import "styles/squid.scss";
import React from 'react';


class index extends React.Component {

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
      axios.post("http://localhost:5000/upload",formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
      });
  }

  onChange(e) {
      this.setState({file:e.target.files});
  }

  render() {
      return (
          <form onSubmit={this.onFormSubmit}>
              <h1>Upload Files</h1>
              <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <button className="upload-button" type="submit">Upload to MongoDB</button>
          </form>
      )
  }
}

export default index;