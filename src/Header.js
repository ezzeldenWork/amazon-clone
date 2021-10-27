import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>


      <input type="text" className="header__searchBar" />
    
    </div>
  );
}

export default Header;
