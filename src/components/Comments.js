import React from "react";
import Comment from "./Comment";
import CurrentUser from "./CurrentUser";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: this.props.data.comments };
  }

  onUpload = (uploadContent) => {
    //           content={content}
    //           createdAt={createdAt}
    //           replies={replies}
    //           score={score}
    //           user={user}
    const userUpload = {
      id: Math.floor(Math.random() * 100),
      content: uploadContent,
      createdAt: "just now",
      replies: [],
      score: 0,
      user: this.props.data.currentUser,
    };
    console.log(userUpload);

    this.setState((prevState) => {
      return {
        comments: [...prevState.comments, userUpload],
      };
    });
  };

  onDelete = (index) => {
    this.setState((prevState) => {
      return {
        comment: prevState.comments.splice(index, 1),
      };
    });
  };

  render() {
    const renderComments = this.state.comments.map(
      ({ content, id, createdAt, replies, score, user }, index) => (
        <Comment
          key={id}
          content={content}
          createdAt={createdAt}
          replies={replies}
          score={score}
          user={user}
          currentUser={this.props.data.currentUser}
          onDelete={() => this.onDelete(index)}
        />
      )
    );
    return (
      <div>
        {renderComments}
        <CurrentUser
          userData={this.props.data.currentUser}
          onUpload={this.onUpload}
        />
      </div>
    );
  }
}

export default Comments;
