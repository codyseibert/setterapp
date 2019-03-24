import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import createZone from "../../../actions/createZone.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";

class CreateZone extends React.Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = {
      form: {
        gymId: this.props.match.params.gymId
      }
    };
  }

  setFormValue(options) {
    this.setState({
      form: {
        ...this.state.form,
        [options.key]: options.value
      }
    });
  }

  render() {
    return (
      <div className="col-sm-6">
        <h1>Create Zone</h1>

        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.createZone(this.state.form);
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="name"
              onChange={e => {
                this.setFormValue({
                  key: e.target.name,
                  value: e.target.value
                });
              }}
            />
          </div>

          <button
            disabled={this.props.loading}
            className="btn btn-primary float-right"
            type="submit"
          >
            {this.props.loading && (
              <FontAwesomeIcon
                className="fa-spin spinner mr-2"
                icon="spinner"
              />
            )}
            Create Zone
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  createZone: route => {
    dispatch(createZone(route));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateZone)
);
