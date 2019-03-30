import React from "react";
import getSetter from "../../actions/getSetter.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import getActiveRoutes from "../../actions/getActiveRoutes.action";
import SetSetterAsActiveButton from "../shared/SetSetterAsActiveButton";
import SetSetterAsInactiveButton from "../shared/SetSetterAsInactiveButton";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class RouteChart extends React.Component {
  render() {
    const getCountsByType = (routes, type) => {
      const data = [];
      const counts = {};
      routes
        .filter(route => route.type === type)
        .forEach(route => {
          counts[route.grade] = (counts[route.name] || 0) + 1;
        });
      for (const key in counts) {
        data.push({
          name: key,
          count: counts[key]
        });
      }
      return data;
    };

    return (
      this.props.routes && (
        <div style={{ height: "300px" }}>
          <ResponsiveContainer>
            <BarChart
              data={getCountsByType(this.props.routes, this.props.type)}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#FF0000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )
    );
  }
}

class Setter extends React.Component {
  componentDidMount() {
    this.props.getSetter(parseInt(this.props.match.params.setterId));
    this.props.getActiveRoutes(this.props.gymId);
  }

  render() {
    const imageDiv = {
      width: "100%",
      paddingBottom: "100%",
      borderRadius: "50%",
      backgroundImage: "url('/me.jpg')",
      backgroundSize: "cover"
    };

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-2">
            <div style={imageDiv} />
          </div>
          <div className="col-sm-10">
            <h1>{this.props.setter.name}</h1>
            {!this.props.setter.active && (
              <SetSetterAsActiveButton setter={this.props.setter} />
            )}
            {this.props.setter.active && (
              <SetSetterAsInactiveButton setter={this.props.setter} />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <React.Fragment>
              <h1>Bouldering</h1>
              <RouteChart type="bouldering" routes={this.props.routes} />
            </React.Fragment>
          </div>

          <div className="col-sm-4">
            <React.Fragment>
              <h1>Lead</h1>
              <RouteChart type="lead" routes={this.props.routes} />
            </React.Fragment>
          </div>

          <div className="col-sm-4">
            <React.Fragment>
              <h1>Top Rope</h1>
              <RouteChart type="toprope" routes={this.props.routes} />
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  user: state.user,
  setter: state.setter,
  routes: state.routes,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getSetter: setterId => {
    dispatch(getSetter(setterId));
  },
  getActiveRoutes: gymId => {
    dispatch(getActiveRoutes(gymId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Setter)
);
