import React, { useContext, useState } from "react";
// import { NewsContext } from "../../contexts/NewsContext";
import logo from "../assets/logo.jpg";
import "../main.css";
import { Link } from "react-router-dom";

function Navbar2() {
//   const { setSearchQuery, searchQuery } = useContext(NewsContext);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

  return (
    <nav
      id="navbar"
      className="flex items-center justify-between flex-wrap bg-gray-800 p-2"
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="/"
          className="text-xl font-bold cursor-pointer text-white transition-all duration-500 hover:text-blue-500"
        >
          <img src={logo} width={100} alt="image" className="src" />
        </a>
      </div>
      <div id="keys">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/news"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NEWS
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/general">
                      General
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      {/* <form className="w-full max-w-sm p-2">
        <div className="flex items-center border-b-2 border-blue-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </form> */}
      <div>
        {" "}
        <Link to="/login">
          <button
            class="log"
            className="btn btn-outline-primary ms-auto px-4 rounded-pill"
          >
            <i className="fa fa-sign-in me-2"></i> Login
          </button>
        </Link>
        <Link to="/register">
          <button
            class="reg"
            className="btn btn-outline-primary ms-2 px-4 rounded-pill"
          >
            <i className="fa fa-user me-2" />
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar2;
