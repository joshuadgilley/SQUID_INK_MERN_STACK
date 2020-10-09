import React, { Component } from "react";
import './Upload.css';
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
//import exec from "child_process";
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileInfo: [],
      files: [],
      file: '',
      dockstate: '',
      responses : ''
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
  webTest(){
    const { user } = this.props.auth;
    console.log(this.props.auth.user.id)
    fetch('/api/users/tester/web/' + user.id,{
      method: 'POST',
      body: this.props.auth.user.id
    })
        .then(res => res.json())
        .then(resp => {
          var split = resp.split("\n")
          let final = split[4]
          final = final.replace(/{"body":"/, "")
          final = final.replace(/"}/, "")
          this.setState({
            responses: final
          })
        });
  }
  dockerTest(){
    fetch('/api/users/tester',{
      method: 'GET'
    })
        .then(res => res.json())
        .then(dock => {
          this.setState({
            dockstate: dock
          })
        });
  }
  fileChanged(event) {
    const f = event.target.files[0];
    f.userId = this.props.auth.user.id;
    console.log(f)
    this.setState({
      file: f
    });
  }



  deleteFile(event) {
    event.preventDefault();
    const id = event.target.id;
    fetch('/api/users/files' + id, {
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

    let arr = this.state.fileInfo;
    arr.push(this.state.file);

    // add to fileInfo array to display below upload...
    this.setState({
      fileInfo: arr
    });
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
      <Grid container
        justify="center"
        spacing={12}
      >
        <Grid item xs={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">File Name</TableCell>
                  <TableCell align="center">Uploaded Date</TableCell>
                  <TableCell align="center">Size</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.fileInfo.map((file, index) => {
                  return (
                    <TableRow key={file.index}>
                      <TableCell align="center">
                        {file.name}
                      </TableCell>
                      <TableCell align="center">
                        {/*Returns NaN, not pulling date appropriately?*/}
                        {new Date(file.uploadDate).getDate()}
                      </TableCell>
                      <TableCell align="center">
                        {(Math.round(file.size / 100) / 10) + 'KB'} &nbsp;
                      <Button variant="outlined" color="secondary" onClick={() => {
                          this.deleteFile.bind(this)
                          let arr = this.state.fileInfo;
                          arr.splice(index, 1);
                          this.setState({
                            fileInfo: arr
                          })
                        }} id={file._id}>Remove</Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <div className="Upload">
            <header className="Upload-header">
              <h5 className="Upload-title"></h5>
            </header>
            <div className="Upload-content">
              <input type="file" onChange={this.fileChanged.bind(this)} />
              <Button style={{
                marginTop: "10px",
                display: "inline-block"
              }} variant="outlined" color="Primary" onClick={this.uploadFile.bind(this)}>Upload</Button>
              <h5>Squid-Simulator Button</h5>
              <Button style={{
                marginTop: "20px",
                display: "inline-block"
              }} variant="outlined" color="Primary" onClick={this.dockerTest.bind(this)}>Upload</Button>
              <h5>{this.state.dockstate}</h5>
              <h5>Web Service Simulator</h5>
              <Button style={{
                marginTop: "20px",
                display: "inline-block"
              }} variant="outlined" color="Primary" onClick={this.webTest.bind(this)}>Upload</Button>
              <h5>{this.state.responses}</h5>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Upload);
