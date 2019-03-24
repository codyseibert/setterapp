import React from "react";
import PropTypes from "prop-types";
import getZones from "../../../actions/getZones.action";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import ZoneRoutes from "./ZoneRoutes";
import CreateZone from "./CreateZone";
import Alert from "../../Alert";

class Zones extends React.Component {
  componentDidMount() {
    this.props.getZones(parseInt(this.props.gymId));
  }

  render() {
    const renderZone = zone => {
      return (
        <div key={zone.id} className="card mb-4">
          <img className="card-img-top" src="/vv.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{zone.name}</h5>
            {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p> */}
            <button
              onClick={() =>
                this.props.history.push(
                  `/gyms/${this.props.gymId}/zones/${zone.id}`
                )
              }
              className="btn btn-primary"
              type="submit"
            >
              View
            </button>
          </div>
        </div>
      );
    };

    const renderZones = () => {
      return (
        <React.Fragment>
          <h1>Zones</h1>
          <button
            onClick={() =>
              this.props.history.push(`/gyms/${this.props.gymId}/zones/create`)
            }
            className="btn btn-outline-primary mb-4"
          >
            Create Zone
          </button>
          <div className="row">
            <div className="col-sm-4">
              {this.props.zones.map(
                (zone, idx) => idx % 3 === 0 && renderZone(zone)
              )}
            </div>
            <div className="col-sm-4">
              {this.props.zones.map(
                (zone, idx) => idx % 3 === 1 && renderZone(zone)
              )}
            </div>
            <div className="col-sm-4">
              {this.props.zones.map(
                (zone, idx) => idx % 3 === 2 && renderZone(zone)
              )}
            </div>
          </div>
        </React.Fragment>
      );
    };

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12">
            <Switch>
              <Route
                exact
                path={"/gyms/:gymId/zones"}
                render={props => renderZones()}
              />
              <Route
                path={"/gyms/:gymId/zones/create"}
                render={props => (
                  <CreateZone
                    gymId={this.props.match.params.gymId}
                    {...props}
                  />
                )}
              />
              <Route
                path={"/gyms/:gymId/zones/:zoneId"}
                render={props => (
                  <ZoneRoutes
                    gymId={this.props.match.params.gymId}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  zones: state.zones
});

const mapDispatchToProps = dispatch => ({
  getZones: gymId => {
    dispatch(getZones(gymId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Zones);
