import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header___Nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login}  className="header___option">
            <div className="header__option">
              <span className="header___optionLinOne">HEllo {user.email}</span>
              <span className="header___optionLinTow">{user ? "Sgin Out" : "Sgin In "}</span>
            </div>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header___option">
            <div className="header__option">
              <span className="header___optionLinOne">Returns</span>
              <span className="header___optionLinTow">& Orders</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header___option">
            <div className="header__option">
              <span className="header___optionLinOne">Your</span>
              <span className="header___optionLinTow">Prime</span>
            </div>
          </div>
        </Link>

        <Link to="/chechout" className="header__link">
          <div className="header___optionBasket">
            <ShoppingBasketIcon />
            <span className="header___optionLinTow header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
