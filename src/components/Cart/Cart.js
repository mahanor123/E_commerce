import React from "react";
import CartCard from "../Cards/CartCard";
export default class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <CartCard />
      </div>
    );
  }
}
