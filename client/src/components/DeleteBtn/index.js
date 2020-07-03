import React, { Component } from "react";
import API from "../../utils/API.js";

class DeleteBtn extends Component {
     onClickDeleteBtnHandler = (event) => {
          console.log("Delete button was pushed and the value being sent was --- " + event.target.value);
          API.deleteBook(event.target.value)
               .then(res => {
                    console.log("Book was deleted sucessfully.");
                    console.log(res.data);
               })
               .catch(err => console.log(err));
     }

     render() {
          return (
               <button
                    className="float-right btn btn-success"
                    id="deleteBtn"
                    type="button"
                    value={this.props.bookID}
                    onClick={this.onClickDeleteBtnHandler}
               >Delete</button>
          );
     }
}

export default DeleteBtn;