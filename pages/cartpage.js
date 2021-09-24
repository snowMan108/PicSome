import React from "react";
import Nav from "../components/Nav";

function cartpage() {
  return (
    <div>
      <Nav />
      <p>your shopping basket:</p>
      {/* Check out (center)*/}

      {/* Checkout Product including trashbin, to left. Price on far right(hard code price). */}

      {/* Place order button (center) */}

      {/* If no items -> <p>You have no items in your cart</p> */}
    </div>
  );
}

export default cartpage;
