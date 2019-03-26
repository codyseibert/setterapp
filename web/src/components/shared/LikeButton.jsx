import React from "react";
import { connect } from "react-redux";
import LoadingButton from "./LoadingButton";
import createLike from "../../actions/createLike.action";
import deleteLike from "../../actions/deleteLike.action";

class LikeButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.likes.find(
          like => like.routeId === this.props.route.id
        ) && (
          <LoadingButton
            text="Like"
            icon={["far", "heart"]}
            onClick={() => {
              this.props.createLike(this.props.route.id);
            }}
          />
        )}

        {this.props.likes.find(
          like => like.routeId === this.props.route.id
        ) && (
          <LoadingButton
            text="Unlike"
            type="danger"
            icon={["fas", "heart"]}
            onClick={() => {
              this.props.deleteLike(this.props.route.id);
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  likes: state.likes
});

const mapDispatchToProps = dispatch => ({
  createLike: routeId => {
    dispatch(createLike(routeId));
  },
  deleteLike: routeId => {
    dispatch(deleteLike(routeId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
