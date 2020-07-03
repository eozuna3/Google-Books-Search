import React, { Component } from "react";
import API from "../utils/API";
import ViewBtn from "../components/ViewBtn/index.js";
import SaveBtn from "../components/SaveBtn/index.js";

class Books extends Component {
     state = {
          bookArray: [],
          userInput: ""
     };

     componentDidMount() {
          this.loadBooks("harry+potter");
     }

     loadBooks = (bookSearch) => {
          API.searchBooks(bookSearch, process.env.REACT_APP_GOOGLE_APIKEY)
               .then(res => {
                    console.log(res.data.items);
                    let tempArray = [];
                    for (let x=0; x < res.data.items.length; x++)
                    {
                         let imageLink = "";
                         let description = "";

                         if (res.data.items[x].volumeInfo.imageLinks !== undefined){
                               imageLink = res.data.items[x].volumeInfo.imageLinks.thumbnail
                         }
                         if (res.data.items[x].volumeInfo.description !== undefined) {
                              description = res.data.items[x].volumeInfo.description;
                         }

                         const bookObject = {
                              title: res.data.items[x].volumeInfo.title,
                              author: res.data.items[x].volumeInfo.authors[0],
                              imageLink: imageLink,
                              description: description,
                              infoLink: res.data.items[x].volumeInfo.infoLink
                         }
                         
                         tempArray.push(bookObject);
                    }
                    console.log(tempArray);
                    this.setState({ bookArray: tempArray });
                    this.setState({userInput: ""});
               })
               .catch(err => console.log(err));
               
     };

     handleInputChange = event => {
          const { value } = event.target;
          this.setState({
               userInput: value
          });
     };

     handleFormSubmit = event => {
          event.preventDefault();
          if (this.state.userInput) {
               let bookTitle = this.state.userInput.trim().replace(/ /g, '+');
               console.log("form submitted and the book search being passed is --- " + bookTitle);
               this.loadBooks(bookTitle);
          }
     };

     render() {
          return (
               <>
                    <div className="container border border-primary py-2">
                         <div className="row">
                              <div className="col-md-12">
                                   <h5 className="float-left">Book Search</h5>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-md-12">
                                   <p className="float-left">Book</p>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-md-12">
                                   <form>
                                        <div className="form-group">
                                             <input 
                                                  type="text" 
                                                  className="form-control" 
                                                  name="userinput" 
                                                  value={this.state.userInput}
                                                  onChange={this.handleInputChange}
                                                  required
                                             />
                                        </div>
                                        <br />

                                        <button 
                                             className="float-right btn btn-success" 
                                             id="searchBtn" 
                                             type="submit"
                                             onClick={this.handleFormSubmit}
                                        >Search</button>
                                   </form>
                              </div>
                         </div>
                    </div>
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
                                                       <SaveBtn 
                                                            bookDescription={book.description}
                                                            bookAuthor={book.author}
                                                            bookInfo={book.infoLink}
                                                            bookTitle={book.title}
                                                            bookImage={book.imageLink}
                                                       />
                                                       <ViewBtn bookLink={book.infoLink} />
                                                  </div>
                                             </div>     
                                             <div className="row">
                                                  <div className="col-md-12">
                                                       <p className="float-left">Writen By {book.author}</p>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-md-4">
                                                       {book.imageLink ? (
                                                            <img src={book.imageLink} className="img-fluid img-thumbnail float-left" alt="No Image Available">
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
                              <h3>No Results to Display</h3>
                         )}
                    </div>
               </>
          );
     }
}

export default Books;