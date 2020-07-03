import React, { Component } from "react";
import API from "../../utils/API.js";

class ViewBtn extends Component {
     onClickSaveBtnHandler = () =>{
          const bookObject = {
               title: this.props.bookTitle,
               author: this.props.bookAuthor,
               description: this.props.bookDescription,
               image: this.props.bookImage,
               link: this.props.bookInfo,
          }
          console.log(bookObject);
          API.saveBook(bookObject)
               .then(res => {
                    console.log("Book was saved sucessfully.");
                    this.saveBtn.setAttribute("disabled", "disabled");
               })
               .catch(err => console.log(err));
     }

     render() {
          return (
               <button
                    className="float-right btn btn-success"
                    id="saveBtn"
                    type="button"
                    onClick={this.onClickSaveBtnHandler}
                    ref={saveBtn => {
                         this.saveBtn = saveBtn;
                    }}
               >Save</button>
          );
     }
}

export default ViewBtn;