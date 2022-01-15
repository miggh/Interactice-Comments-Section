import React from "react";

class NewReply extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUserReply: "" };
  }

  replyClickHandler = (e) => {
    e.preventDefault();
    this.props.onAddReply(this.state.currentUserReply);
    this.props.onReplyToReply();
    this.setState = { currentUserReply: "" };
  };

  render() {
    return (
      <div className="current-user new-reply">
        <img
          className="current-user--img"
          src={require(`${this.props.currentUser.image.png}`)}
        />
        <form className="current-user--form">
          <textarea
            className="current-user--comment"
            onChange={(e) =>
              this.setState({ currentUserReply: e.target.value })
            }
            value={this.state.currentUserReply}
          />
          <input
            className="btn btn--send"
            type="submit"
            value="Reply"
            onClick={this.replyClickHandler}
          />
        </form>
      </div>
    );
  }
}

export default NewReply;
