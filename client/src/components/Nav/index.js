import React from "react";
import { Link } from "react-router-dom";

function Nav() {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-primary fix-top">
               <a className="navbar-brand" href="/">Google Books</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                         <Link to="/search">
                              <li className="nav-item nav-link"><span>Search</span></li>
                         </Link>
                         <Link to="/saved">
                              <li className="nav-item nav-link"><span>Saved</span></li>
                         </Link>
                    </ul>
               </div>
          </nav>
     );
}


export default Nav;
