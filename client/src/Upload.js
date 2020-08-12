import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import './Upload.css';




class Upload extends Component {
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
    fetch('/api/users/files')
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
 fileChanged(event) {
   const f = event.target.files[0];
   this.setState({
     file: f
   });
 }
 deleteFile(event) {
   event.preventDefault();
   const id = event.target.id;
   fetch('/api/users/files'+id, {
     method: 'DELETE'
   }).then(res => res.json())
     .then(response => {
       console.log(response);
       if (response.success) this.loadFiles()
       else alert('Delete Failed');
     })
 }
 uploadFile(event) {
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
   fetch('/api/users/files', {
     method: 'POST',
     body: data
   }).then(res => res.json())
     .then(data => {
       if (data.success) {
       this.loadFiles();
     } else {
       alert('Upload failed');
     }
   });
 }
render() {
  const { files } = this.state;
  return (
       <div className="Upload">
        <header className="Upload-header">
          <h5 className="Upload-title"></h5>
        </header>
        <div className="Upload-content">
          <input type="file" onChange={this.fileChanged.bind(this)}/>
          <button onClick={this.uploadFile.bind(this)}>Upload</button>
          <table className="Upload-table">
            <thead>
              <tr>
                  <th>File</th>
                  <th>Uploaded</th>
                  <th>Size</th>
                  
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => {
                const dateUpload = new Date(file.uploadDate);
                return (
                  <tr key={index}>
                    <td><a href={`http://localhost:5000/api/users/files/${file.filename}`}>{file.filename}</a></td>
                    <td>{`${dateUpload.toLocaleDateString()} ${dateUpload.toLocaleTimeString()}`}</td>
                    <td>{(Math.round(file.length/100) / 10)+'KB'}</td>
                    <td><button onClick={this.deleteFile.bind(this)} id={file._id}>Remove</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
);
 }
}

/* export default connect(
  mapStateToProps,
  { }
)  (Upload);
 */


export default Upload; 