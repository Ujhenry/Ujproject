import React from 'react'
import "./Below_Header.css";
import {Link} from "react-router-dom";
import burgar from "./images/burgar.png";



function Below_Header() {
    return (
            <div className="headerSecondary">
                 <div className="header__nav">
                 <img className="Uche" src= {burgar}/>

                    <Link to ="/TodaysDeal">
                     <div className="header__option">
                         <span className="headerSecondary_optionLineTwo">Today's Deals</span>
                     </div>
                     </Link>

                     <Link to ="/Customer_Service">
                     <div className="header__option">
                         <span className="headerSecondary_optionLineTwo">Customers Service</span>
                     </div>
                     </Link>

                     <Link to ="/Gifts_Cards">
                     <div className="header__option">
                         <span className="headerSecondary_optionLineTwo">Gift Cards</span>
                     </div>
                     </Link>

                     <Link to ="/Register">
                     <div className="header__option">
                        <span className="headerSecondary_optionLineTwo">Register</span>
                     </div>
                     </Link>

                     <Link to ="/Sell">
                     <div className="header__option">
                        <span className="headerSecondary_optionLineTwo">Sell</span>
                     </div>
                     </Link>
                     
                 </div>
                 <div className="header__option">
                         <span className="headerSecondary_optionLast">
                          Amazon's Response to COVID-19
                        </span>
                     </div>
                
            </div>

    )
}

export default Below_Header

