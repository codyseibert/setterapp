import React from "react";
import PropTypes from "prop-types";
import getGym from "../../actions/getGym.action";
import { connect } from "react-redux";

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
      textDecoration: "none",
      cursor: "pointer",
      color: this.state.hover ? "#FF0000" : "inherit"
    };

    return (
      <li
        onMouseEnter={() => this.toggleHover()}
        onMouseLeave={() => this.toggleHover()}
        style={style}
        onClick={() => this.props.history.push(this.props.route)}
      >
        {this.props.text}
      </li>
    );
  }
}

SideNavigationLink.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  gym: PropTypes.object.isRequired,
  getGym: PropTypes.func.isRequired
};

class SideNavigation extends React.Component {
  componentDidMount() {}

  render() {
    const routes = [
      {
        route: `/gyms/${this.props.match.params.gymId}/dashboard`,
        text: "Home"
      },
      {
        route: `/gyms/${this.props.match.params.gymId}/routes`,
        text: "Routes"
      },
      {
        route: `/gyms/${this.props.match.params.gymId}/zones`,
        text: "Zones"
      },
      {
        route: `/gyms/${this.props.match.params.gymId}/topo`,
        text: "Gym Map"
      },
      {
        route: `/gyms/${this.props.match.params.gymId}/members`,
        text: "Members"
      }
    ];

    const uiStyle = {
      listStyle: "none"
    };

    return (
      <div>
        <ul style={uiStyle}>
          {routes.map(route => (
            <SideNavigationLink key={route.text} {...route} {...this.props} />
          ))}
        </ul>
      </div>
    );
  }
}

SideNavigation.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  gym: PropTypes.object.isRequired,
  getGym: PropTypes.func.isRequired
};

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
