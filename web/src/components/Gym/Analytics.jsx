import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import getActiveRoutes from "../../actions/getActiveRoutes.action";
import { PureComponent } from "react";
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

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: "bouldering"
    };
  }

  componentDidMount() {
    this.props.getActiveRoutes(this.props.gymId);
  }

  setPanel(panel) {
    this.setState({
      panel
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 mb-4">
            <button
              type="button"
              className={`btn btn-secondary mr-2 ${
                this.state.panel === "bouldering" ? "active" : ""
              }`}
              onClick={() => this.setPanel("bouldering")}
            >
              Bouldering
            </button>

            <button
              type="button"
              className={`btn btn-secondary mr-2 ${
                this.state.panel === "lead" ? "active" : ""
              }`}
              onClick={() => this.setPanel("lead")}
            >
              Lead
            </button>

            <button
              type="button"
              className={`btn btn-secondary ${
                this.state.panel === "toprope" ? "active" : ""
              }`}
              onClick={() => this.setPanel("toprope")}
            >
              Top Rope
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {this.state.panel === "bouldering" && (
              <React.Fragment>
                <h1>Bouldering</h1>
                <RouteChart type="bouldering" routes={this.props.routes} />
              </React.Fragment>
            )}

            {this.state.panel === "lead" && (
              <React.Fragment>
                <h1>Lead</h1>
                <RouteChart type="lead" routes={this.props.routes} />
              </React.Fragment>
            )}

            {this.state.panel === "toprope" && (
              <React.Fragment>
                <h1>Top Rope</h1>
                <RouteChart type="toprope" routes={this.props.routes} />
              </React.Fragment>
            )}
          </div>
          <div className="col-sm-6">Display Route Table maybe?</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  routes: state.routes
});

const mapDispatchToProps = dispatch => ({
  getActiveRoutes: gymId => {
    dispatch(getActiveRoutes(gymId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Analytics)
);
