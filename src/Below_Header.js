import React from 'react'
import "./Below_Header.css";


function Below_Header() {
    return (
            <div className="headerSecondary">
                 <div className="header__nav">
                     <div className="header__option">
                         <span className="headerSecondary_optionLineTwo">Today's Deals</span>
                     </div>
                     <div className="header__option">
                         <span className="headerSecondary_optionLineTwo">Customers Service</span>
                     </div>
                     <div className="header__option">
                         <span className="headerSecondary_optionLineTwo">Gift Cards</span>
                     </div>
                     <div className="header__option">
                        <span className="headerSecondary_optionLineTwo">Register</span>
                     </div>
                     <div className="header__option">
                        <span className="headerSecondary_optionLineTwo">Sell</span>
                     </div>
                     <div className="header__option">
                         <span className="headerSecondary_optionLast">
                          Amazon's Response to COVID-19
                        </span>
                     </div>
                 </div>
            </div>

    )
}

export default Below_Header

