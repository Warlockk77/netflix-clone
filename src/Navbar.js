import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h3 className="logo">GREATFLIX</h3>
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"
        alt="avatar"
      ></img>
    </div>
  );
}

export default Nav;
