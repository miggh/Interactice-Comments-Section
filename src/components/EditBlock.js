import React from "react";

class EditBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }
  sendClickHandler = (e) => {
    e.preventDefault();
    this.props.onEdit(this.state.content);
    this.props.onClose();
    this.setState({ content: this.props.content });
  };
  render() {
    return (
      <form className="current-user--form">
        <textarea
          className="editing current-user--comment"
          onChange={(e) => this.setState({ content: e.target.value })}
          value={this.state.content}
        />
        <input
          className="btn btn--send"
          type="submit"
          value="Edit"
          onClick={this.sendClickHandler}
        />
      </form>
    );
  }
}

export default EditBlock;
