import React from "react";
import PropTypes from "prop-types";
import getGym from "../../actions/getGym.action";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideNavigationLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    const style = {
      fontSize: "24px",
      cursor: "pointer",
      color: this.state.hover ? "#666" : "inherit",
      paddingLeft: "80px",
      paddingTop: "10px",
      paddingBottom: "10px",
      position: "relative",
      marginBottom: "10px"
    };

    const iconStyle = {
      position: "absolute",
      left: "40px",
      top: "15px"
    };

    return (
      <div
        onMouseEnter={() => this.toggleHover()}
        onMouseLeave={() => this.toggleHover()}
        style={style}
        onClick={() => this.props.history.push(this.props.route)}
      >
        <FontAwesomeIcon icon={this.props.icon} style={iconStyle} />
        {this.props.text}
      </div>
    );
  }
}

class SideNavigation extends React.Component {
  componentDidMount() {}

  render() {
    const routes = [
      {
        route: `/gyms/${this.props.match.params.gymId}`,
        text: "Home",
        icon: "home"
      },
      {
        route: `/gyms/${this.props.match.params.gymId}/zones`,
        text: "Zones",
        icon: "th"
      },
      {
        route: `/gyms/${this.props.match.params.gymId}/routes`,
        text: "Routes",
        icon: "route"
      },
      // {
      //   route: `/gyms/${this.props.match.params.gymId}/topo`,
      //   text: "Gym Map"
      // },
      {
        route: `/gyms/${this.props.match.params.gymId}/climbers`,
        text: "Climbers",
        icon: "users"
      }
    ];

    const uiStyle = {
      listStyle: "none"
    };

    return (
      <div>
        {routes.map(route => (
          <SideNavigationLink key={route.text} {...route} {...this.props} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym
});

const mapDispatchToProps = dispatch => ({
  getGym: gymId => {
    dispatch(getGym(gymId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavigation);
