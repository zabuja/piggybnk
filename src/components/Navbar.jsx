import React, { useState } from "react";
import logo from "../assets/logo.png";
import Hamm from "./svgs/Hamm";
import Cross from "./svgs/Cross";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="navbar">
        <ul className="navlist">
          <div className="left-side">
            <li className="list-item">
              <a href="#home">
                <img src={logo} alt="logo" height={36} />
              </a>
            </li>
            <li className="list-item link">
              <a href="#discord">Discord</a>
            </li>
            <li className="list-item link">
              <a href="#twitter">Twitter</a>
            </li>
          </div>
          <div className="right-side">
            <li className="list-item">
              <button className="btn">
                <a href="#twitter">Launch App</a>
              </button>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="hamburger"
            >
              {toggle ? <Cross /> : <Hamm />}
            </li>
          </div>
        </ul>
      </div>
      {toggle && (
        <div>
          <ul>
            <li className="list-item link">
              <a href="#discord">Discord</a>
            </li>
            <li className="list-item link">
              <a href="#twitter">Twitter</a>
            </li>
            <button className="btn" style={{width: "100%"}}>
              <a href="#">Launch App</a>
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
