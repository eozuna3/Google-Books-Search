import React, { Component } from "react";
import API from "../utils/API";
import ViewBtn from "../components/ViewBtn/index.js";
import DeleteBtn from "../components/DeleteBtn/index.js";

class Books extends Component {
     state = {
          bookArray: [],
     };

     componentDidMount() {
          this.loadBooks();
     }

     loadBooks = () => {
          API.getSavedBooks()
               .then(res => {
                    console.log(res.data);
                    this.setState({ bookArray: res.data});
               })
               .catch(err => console.log(err));
     };

     render() {
          return (
               <>                  
                    <div className="container pt-5">
                         {this.state.bookArray.length ? (
                              this.state.bookArray.map(book => (
                                   <div className="row border border-secondary my-3 py-3">
                                        <div className="col-md-12">
                                             <div className="row">
                                                  <div className="col-md-8">
                                                       <h5 className="float-left">{book.title}</h5>
                                                  </div>
                                                  <div className="col-md-4">
                                                       <DeleteBtn bookID={book._id} />
                                                       <ViewBtn bookLink={book.link} />
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-md-12">
                                                       <p className="float-left">Writen By {book.author}</p>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-md-4">
                                                       {book.link ? (
                                                            <img src={book.image} className="img-fluid img-thumbnail float-left" alt="No Image Available">
                                                            </img>)
                                                            :
                                                            (<p className="float-left">No Image Available</p>)
                                                       }
                                                  </div>
                                                  <div className="col-md-8">
                                                       <p className="text-left">{book.description}</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))
                         ) : (
                                   <h3 className="pt-3">No Results to Display</h3>
                              )}
                    </div>
               </>
          );
     }
}

export default Books;