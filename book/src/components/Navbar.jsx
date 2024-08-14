import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import logoImg from '../images/logo-removebg-preview.png'; 
import supercoinsIcon from '../images/coin-removebg-preview.png'; // Make sure this path is correct

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false);
  const [superCoins, setSuperCoins] = useState(100); // Example supercoins value

  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const handleDropdown = () => setToggleDropdown(!toggleDropdown);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/home" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">BOOKY</span>
          </Link>
          <button type="button" className="navbar-toggler-btn" onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} />
          </button>
        </div>

        <div className={toggleMenu ? 'navbar-collapse show-navbar-collapse' : 'navbar-collapse'}>
          <ul className="navbar-nav">
            <div className="supercoins">
              <img src={supercoinsIcon} alt="SuperCoins" className="supercoins-icon" />
              <span className="supercoins-number">{superCoins}</span>
            </div>
            <li className="nav-item dropdown">
              <span
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1 dropdown-toggle"
                onClick={handleDropdown}
              >
                Collection
              </span>
              {toggleDropdown && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/fiction" className="dropdown-link">Fiction</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/biography" className="dropdown-link">Biography</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/fantasy" className="dropdown-link">Fantasy</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/novel" className="dropdown-link">Novel</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">
                <FaShoppingCart size={22} />
              </Link>
            </li>
            <li className="nav-item">
              <div 
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1 profile-toggle-btn"
                onMouseEnter={() => setToggleProfileMenu(true)}
                onMouseLeave={() => setToggleProfileMenu(false)}
              >
                <HiOutlineMenuAlt3 size={22} />
                {toggleProfileMenu && (
                  <ul className="profile-dropdown-menu">
                    <li className="profile-dropdown-item">
                      <Link to="/profile" className="profile-dropdown-link">Profile</Link>
                    </li>
                    <li className="profile-dropdown-item">
                      <Link to="/order" className="profile-dropdown-link">Orders</Link>
                    </li>
                    <li className="profile-dropdown-item">
                      <Link to="/free" className="profile-dropdown-link">Free Books</Link>
                    </li>
                    <li className="profile-dropdown-item">
                      <Link to="/sellbook" className="profile-dropdown-link">Sell Book</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
