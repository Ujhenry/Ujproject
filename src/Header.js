import React from 'react'
import {Link} from "react-router-dom";
import logo from "./images/logo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
             <Link to ='/'>
                 <img className="header_logo"  src={logo}/>
                 
                 </Link>
             
             <div className="header_search">
                 <input className="header_searchInput" type="text"/>
                 <SearchIcon className="header_searchIcon"/>

             </div>
             <Link to ='/SignUp'>
                 <div className="header_nav">
                    <div className="header_option">
                    <span className="header_option1">Hello Guest</span>   
                     <span className="header_option1">Sign Up</span>

                  </div>
                  </div>
                 </Link>
    
                 <div className="header_option">
                    <span className="header_option1">Returns</span>
                     <span className="header_option1"> & Orders</span>

                 </div>

                 <div className="header_optionbasket">
                     <ShoppingBasketIcon/>
                     <span className="header_option4"></span>
                

                 </div>

             



            
        </div>
        
    )
}

export default Header;
