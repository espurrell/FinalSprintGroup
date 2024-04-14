import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import sofa from "../Assets/sofa.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => {
          setMenu("shop");
        }}
        className="nav-logo"
      >
        <img src={sofa} alt="" />
        <p>
          Life <br></br>Home <br></br>Furnishings
        </p>
      </Link>
      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("office");
          }}
        >
          <Link to="/office">Office</Link>
          {menu === "office" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("bedroom");
          }}
        >
          <Link to="bedroom">Bedroom</Link>
          {menu === "bedroom" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("dining");
          }}
        >
          <Link to="/dining">Dining</Link>
          {menu === "dining" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("living");
          }}
        >
          <Link to="/living">Living</Link>
          {menu === "living" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
