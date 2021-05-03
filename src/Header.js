import React from 'react'
import logo from "./images/logo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className="header">
             <img className="header_logo" src={logo}/>
             
             <div className="header_search">
                 <input className="header_searchInput" type="text"/>
                 <SearchIcon className="header_searchIcon"/>

             </div>
             <div className="header_nav">
                 <div className="header_option">
                     <span className="header_option1">About Us</span>

                 </div>
                 <div className="header_option">
                     <span className="header_option2">Services</span>

                 </div>
                 <div className="header_option">
                     <span className="header_option3">Company</span>

                 </div>

             </div>


            
        </div>
    )
}

export default Header;
