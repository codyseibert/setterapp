import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import createRoute from "../../../actions/createRoute.action";

class CreateRoutes extends React.Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = {
      form: {
        gymId: this.props.gymId
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
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.createRoute(this.state.form);
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

          <div className="form-group">
            <label htmlFor="grade">Grade</label>
            <select
              defaultValue=""
              className="form-control"
              id="grade"
              name="grade"
              onChange={e => {
                this.setFormValue({
                  key: e.target.name,
                  value: e.target.value
                });
              }}
            >
              <option value="" disabled>
                - Select -
              </option>
              <option>v1</option>
              <option>v2</option>
              <option>v3</option>
              <option>v4</option>
              <option>v5</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <select
              defaultValue=""
              placeholder="select"
              className="form-control"
              id="color"
              name="color"
              onChange={e => {
                this.setFormValue({
                  key: e.target.name,
                  value: e.target.value
                });
              }}
            >
              <option value="" disabled>
                - Select -
              </option>
              <option>red</option>
              <option>blue</option>
              <option>orange</option>
            </select>
          </div>

          <button className="btn btn-primary float-right" type="submit">
            Create Route
          </button>
        </form>
      </div>
    );
  }
}

CreateRoutes.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  gym: PropTypes.object.isRequired,
  gymId: PropTypes.string.isRequired,
  createRoute: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gym: state.gym
});

const mapDispatchToProps = dispatch => ({
  createRoute: route => {
    dispatch(createRoute(route));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoutes);
