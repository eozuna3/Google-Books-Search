import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
     //Performs Axios req to get list of books from google API
     searchBooks: function (query, apikey) {
          return axios.get(BASEURL + query + "&key" + apikey);
     },

     // Saves a book to the database
     saveBook: function(bookData) {
          return axios.post("/api/books", bookData);
     },

     deleteBook: function(bookID) {
          console.log(bookID);
          return axios.delete("/api/books/" + bookID);
     },

     getSavedBooks: function() {
          return axios.get("/api/books");
     }
};