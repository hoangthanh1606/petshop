import React from "react";
import Logo from '../../assets/Images/logo.jpg';
import Image from "../../components/Image/Image";
import "./Header.css";

const Header = (props) => {
  const {handleLogin, handleLogout, userInfo } = props;

  return (
    <nav className="nav">
      <div className="navigation container">
        <div className="logo">
          <Image src={Logo} alt='Logo'/>
        </div>
        <div className="menu">
          <div className="nav-list">
            {userInfo ? (
              <span className="nav-link" onClick={handleLogout}>
                Log out
              </span>
            ) : (
              <span className="nav-link" onClick={() => handleLogin()}>
                Log in
              </span>
            )}
            <div className="icon">
              <i className="bx bx-shopping-bag" />
            </div>
          </div>
        </div>
        <div className="cart-icon">
          <i className="bx bx-shopping-bag" />
        </div>
        <div className="hamburger">
          <i className="bx bx-menu" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
