import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {spacing} from "@material-ui/system";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh", marginTop: "5rem"}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h2>
              Welcome 
            </h2>
            <br />
            <Grid
                container
                justify="center"
                alignItems="baseline"
                spacing={5}
                >
                <Grid item xs={4}>
                    <div className="col s6" style={{display:"inline-block"}}>
                        <Button variant="outlined" color="gray">
                      <Link
                        to="/register"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          color: "indigo"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                      >
                        Register
                      </Link>
                            </Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="col s6" style={{display:"inline-block"}}>
                        <Button variant="outlined" color="gray">
                      <Link
                        to="/login"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px"
                        }}
                        className="btn btn-large btn-flat waves-effect white black-text"
                      >
                        Log In
                      </Link>
                        </Button>
                    </div>
                </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
