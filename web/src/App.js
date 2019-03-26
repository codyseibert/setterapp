import React from "react";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";
import { connect } from "react-redux";
import getUserLikes from "./actions/getUserLikes.action";
import Navbar from "./components/Navbar";

class App extends React.Component {
  componentDidMount() {
    this.props.getUserLikes();
  }

  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <div className="container-fluid">
          <ConnectedRouter history={this.props.history}>
            {routes}
          </ConnectedRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getUserLikes: () => {
    dispatch(getUserLikes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
