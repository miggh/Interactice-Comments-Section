import React from "react";
import "./CurrentUser.css";
import Comment from "./Comment";

class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUserComment: "" };
  }

  sendClickHandler = (e) => {
    e.preventDefault();

    this.props.onUpload(this.state.currentUserComment);

    this.setState({ currentUserComment: "" });
  };

  render() {
    return (
      <div className="current-user">
        <img
          className="current-user--img"
          src={require(`${this.props.userData.image.png}`)}
        />
        <form className="current-user--form">
          <textarea
            className="current-user--comment"
            placeholder="Add a comment..."
            onChange={(e) =>
              this.setState({ currentUserComment: e.target.value })
            }
            value={this.state.currentUserComment}
          />
          <input
            className="btn btn--send"
            type="submit"
            value="Send"
            onClick={this.sendClickHandler}
          />
        </form>
      </div>
    );
  }
}

export default CurrentUser;
