import React from "react";
import "./CartCard.css";
export default class CartCard extends React.Component {
  render() {
    let item = localStorage.getItem("cartitem");
    return (
      <div className="cart-item">
        <img src={item}></img>
      </div>
    );
  }
}
