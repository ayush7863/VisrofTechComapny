import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/temperature">Temperature</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/crypto">Crypto</Link>
    </div>
  );
};

export default Navbar;
