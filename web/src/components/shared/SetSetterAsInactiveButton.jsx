import React from "react";
import { connect } from "react-redux";
import LoadingButton from "./LoadingButton";
import setSetterAsInactive from "../../actions/setSetterAsInactive.action";

class SetSetterAsInactiveButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LoadingButton
          text="Set as Inactive"
          type="danger"
          icon="archive"
          onClick={() => {
            this.props.setSetterAsInactive(this.props.setter.id);
          }}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  likes: state.likes
});

const mapDispatchToProps = dispatch => ({
  setSetterAsInactive: setterId => {
    dispatch(setSetterAsInactive(setterId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetSetterAsInactiveButton);
