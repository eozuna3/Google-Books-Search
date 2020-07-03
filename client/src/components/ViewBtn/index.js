import React, { Component } from "react";

class ViewBtn extends Component {     
     render() {
          return (
               <a href={this.props.bookLink}>
                    <button
                         className="float-right btn btn-info mr-2"
                         id="viewBtn"
                         type="button"
                    >View</button>
               </a>
          );
     }
}

export default ViewBtn;
