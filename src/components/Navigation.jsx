import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <FiHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FiPlusCircle /> Add
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
