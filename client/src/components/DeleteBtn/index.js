import React, { Component } from "react";
import API from "../../utils/API.js";
import { withRouter } from "react-router-dom";

class DeleteBtn extends Component {
     onClickDeleteBtnHandler = (event) => {
          API.deleteBook(event.target.value)
               .then(res => {
                    console.log("Book was deleted sucessfully.");
                    console.log(res.data);
                    this.props.loadBooks();
               })
               .catch(err => console.log(err));
     }

     render() {
          return (
               <button
                    className="float-right btn btn-danger"
                    id="deleteBtn"
                    type="button"
                    value={this.props.bookID}
                    onClick={this.onClickDeleteBtnHandler}
               >Delete</button>
          );
     }
}

export default withRouter(DeleteBtn);