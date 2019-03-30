import React from "react";
import { connect } from "react-redux";
import createSetter from "../../actions/createSetter.action";
import { withRouter } from "react-router";

class CreateSetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        gymId: parseInt(this.props.gymId)
      }
    };
  }

  componentDidMount() {}

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
      <div className="row">
        <div className="col-sm-6">
          <h1>Create a Setter</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.createSetter(this.state.form);
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                autoFocus
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

            <button className="btn btn-primary float-right" type="submit">
              Create Setter
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gym: state.gym
});

const mapDispatchToProps = dispatch => ({
  createSetter: route => {
    dispatch(createSetter(route));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateSetter)
);
