import React from "react";
import { connect } from "react-redux";
import signout from "../actions/signout.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  render() {
    const profileImageDiv = {
      width: "50px",
      height: "50px",
      cursor: "pointer",
      marginRight: "10px",
      borderRadius: "50%",
      backgroundImage: "url('/me.jpg')",
      backgroundSize: "cover"
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="btn btn-link mr-4 ml-4"
          href="/"
          onClick={() => this.props.history.push(`/`)}
        >
          Setter
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="mr-2">
              {this.props.user && (
                <button
                  className="btn btn-link"
                  onClick={() =>
                    this.props.history.push(`/gyms/${this.props.user.gymId}`)
                  }
                >
                  <FontAwesomeIcon icon="home" className="mr-2" />
                  Home
                </button>
              )}
            </li>

            <li>
              {this.props.user && (
                <button
                  className="btn btn-link"
                  href={`/find-gyms`}
                  onClick={() => this.props.history.push(`/find-gym`)}
                >
                  <FontAwesomeIcon icon="search" className="mr-2" />
                  Find Gym
                </button>
              )}
            </li>
          </ul>

          {this.props.user && (
            <div
              style={profileImageDiv}
              onClick={() =>
                this.props.history.push(`/profile/${this.props.user.id}`)
              }
            />
          )}

          {!this.props.token && (
            <button
              className="btn btn-outline-primary mr-2"
              onClick={() => this.props.history.push("/login")}
            >
              Login
            </button>
          )}

          {this.props.token && (
            <button className="btn btn-link mr-2" onClick={this.props.signout}>
              <FontAwesomeIcon icon="sign-out-alt" />
            </button>
          )}

          {!this.props.token && (
            <button
              className="btn btn-primary"
              onClick={() => this.props.history.push("/register")}
            >
              Sign Up
            </button>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signout: event => {
    dispatch(signout());
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
