import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Icon } from "react-icons-kit";
import { androidCart } from "react-icons-kit/ionicons/androidCart"
import {search} from 'react-icons-kit/fa/search'
export default class Navbar extends React.Component {
  handleEnter = e => {
    if (e.key === "Enter") console.log("clicked enter");
  };
  render() {
    return (
      <header className="navbar">
        <div className="nav-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <img width="75" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" alt="Flipkart" title="Flipkart" class="_1e_EAo"></img>
          </Button>
        </Link>
        <div className="_33x-wq">
          "Explore"
          <span class="_2ky4Ru">/plus</span>
          <img width="10" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"></img>
        </div>
        </div>
        <div>
        <input placeholder="Search" onKeyPress={this.handleEnter}></input>
        <Icon size={25} icon={search} style={{ align: "center" }} />
        </div>
        <div className="nav-right">
        <Link to="/signin" style={{ textDecoration: "none",padding:'5px' }}>
          <Button variant="contained" color="primary">Sing In</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none",padding:'5px'}}>
          <Button variant="contained" color="primary">Sign Up</Button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
          <Icon size={35} icon={androidCart} style={{ align: "center" }} />{" "}
          </Button>
        </Link>
        </div>
      </header>
    );
  }
}
