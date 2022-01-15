import React from "react";
import "./DeletePopUp.css";

class DeletePopUp extends React.Component {
  render() {
    return (
      <div className="overlay">
        <div className="delete-popup-window">
          <h2 className="delete--header">Delete comment</h2>
          <p className="delete--text">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="delete--btns">
            <button
              className="btn btn--delete-decline"
              onClick={this.props.onDeleteModal}
            >
              No, cancel
            </button>
            <button
              className="btn btn--delete-comfirm"
              onClick={this.props.onDelete}
            >
              Yes, delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeletePopUp;
