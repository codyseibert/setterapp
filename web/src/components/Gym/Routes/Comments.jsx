import React from "react";
import getComments from "../../../actions/getComments.action";
import createComment from "../../../actions/createComment.action";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import moment from "moment";
import LoadingButton from "../../shared/LoadingButton";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        routeId: this.props.routeId,
        userId: null,
        message: null
      }
    };
  }

  componentDidMount() {
    this.props.getComments(parseInt(this.props.routeId));
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
    const imageDiv = {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundImage: "url('/me.jpg')",
      backgroundSize: "cover",
      display: "inline-block"
    };

    return (
      <div>
        <h2>Comments</h2>
        {this.props.comments.map(comment => (
          <div className="card" key={comment.id}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-2 text-center">
                  <div style={imageDiv} />
                  <div>{comment.name}</div>
                </div>
                <div className="col-sm-10">
                  <p className="card-text">{comment.message}</p>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <small className="text-muted">
                {moment(comment.createdAt).format("LLL")}
              </small>
            </div>
          </div>
        ))}
        <textarea
          name="message"
          value={this.state.form.message}
          onChange={e =>
            this.setFormValue({
              key: e.target.name,
              value: e.target.value
            })
          }
        />
        <br />
        <LoadingButton
          text="post"
          icon="paper-plane"
          onClick={() => {
            this.props.createComment(this.state.form);
            this.setFormValue({
              key: "message",
              value: ""
            });
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  getComments: routeId => {
    dispatch(getComments(routeId));
  },
  createComment: message => {
    dispatch(createComment(message));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Comments)
);
