import React from "react";
import { connect } from "react-redux";
import LoadingButton from "./LoadingButton";
import setSetterAsActive from "../../actions/setSetterAsActive.action";

class SetSetterAsActiveButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LoadingButton
          text="Set as Active"
          icon="check"
          onClick={() => {
            this.props.setSetterAsActive(this.props.setter.id);
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
  setSetterAsActive: setterId => {
    dispatch(setSetterAsActive(setterId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetSetterAsActiveButton);
