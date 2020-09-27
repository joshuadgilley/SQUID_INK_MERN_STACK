import React, { Component } from "react";
import { connect } from "react-redux";
import LinkButton from "./authActions";


class MyFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      file: ''
    }
    this.loadFiles = this.loadFiles.bind(this);
  }
  componentDidMount() {
    this.loadFiles();
  }
  loadFiles() {
    fetch('http://localhost:5000/api/users/files/:filename')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
          console.log('No Files');
          this.setState({ files: [] })
        } else {
          this.setState({ files })
        } 
      });
  }
  
  
    render() {
      const { files } = this.state;
      const { user } = this.props.auth;
  
      return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              
            <h4>Files you've uploaded</h4>
  
      
            <table className="App-table">
            <thead>
              <tr>
                  <th>My files and folders</th>

              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => {
                var d = new Date(file.uploadDate);
                return (
                  <tr key={index}>
                    <td><a href={`http://localhost:5000/api/users/files/${file.filename}`}>{file.filename}</a></td>
                    <td><a href={`http://localhost:5000/api/users/files/${file.filename}`}>{file.filename}</a></td>
                    <td>{`${d.toLocaleDateString()} ${d.toLocaleTimeString()}`}</td>
                    <td>{(Math.round(file.length/100) / 10)+'KB'}</td>
                    <td><button onClick={this.deleteFile.bind(this)} id={file._id}>Remove</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>


 




  
  
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
  
  