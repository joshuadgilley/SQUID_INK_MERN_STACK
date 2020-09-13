import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../src/authActions";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
class Navbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();



  };

  render() {

    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
            <Grid container alignItems="center" >
                <ButtonGroup  fullWidth disableElevation color="primary" aria-label="contained primary button group" >
                    <Button>
                        <Link
                            style={{
                                width: "150px",
                                borderRadius: "10px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                fontFamily: "helvetica"
                            }}
                            to="/"
                            onClick={(event) => {
                                console.log('custom event here!', event)
                            }}
                            className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                        >
                            HOME
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                fontFamily: "helvetica"
                            }}
                            to='/dashboard'
                            onClick={(event) => {
                                console.log('custom event here!', event)
                            }}
                            className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                        >Dashboard</Link>
                    </Button>
                    <Button>
                        <Link
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                fontFamily: "helvetica"
                            }}
                            to='/squid'
                            onClick={(event) => {
                                console.log(event)
                            }}
                            className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                        >SQUID</Link>
                    </Button>
                    <Button>
                        <Link
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                fontFamily: "helvetica"
                            }}
                            to='/upload'
                            onClick={(event) => {
                                console.log('custom event here!', event)
                            }}
                            className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                        >upload form</Link>
                    </Button>
                    <Button>
                        <Link
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                fontFamily: "helvetica"
                            }}
                            to='/myfiles'
                            onClick={(event) => {
                                console.log('custom event here!', event)
                            }}
                            className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                        >See my files</Link>
                    </Button>
                </ButtonGroup>
            </Grid>
        </nav>
      </div>
    );
  }
}

export default Navbar;
