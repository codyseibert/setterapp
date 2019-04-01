import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import moment from "moment";
import getSendsForRoute from "../../../actions/getSendsForRoute.action";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSendsForRoute(parseInt(this.props.routeId));
  }

  render() {
    const imageDiv = {
      width: "100%",
      paddingBottom: "100%",
      borderRadius: "50%",
      backgroundImage: "url('/me.jpg')",
      backgroundSize: "cover",
      display: "inline-block"
    };

    return (
      <div>
        <h2>Sends</h2>
        <div className="row">
          {this.props.sends.map(send => (
            <div key={send.id} className="col-sm-3">
              <div style={imageDiv} />
              <h4 className="text-center">{send.userName}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sends: state.sends
});

const mapDispatchToProps = dispatch => ({
  getSendsForRoute: routeId => {
    dispatch(getSendsForRoute(routeId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Comments)
);
