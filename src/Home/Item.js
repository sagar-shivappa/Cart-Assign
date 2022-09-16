import React from "react";
import "./../Home/item.css";

function Item(Props, { cartCountHandler }) {
  const cartCountHandlerChild = (id, status) => {
    Props.cartCountHandler(id, status);
  };
  return (
    <div className="card">
      <h2>{Props.data.name}</h2>
      <div>
        {" "}
        <b>PRICE</b> : {Props.data.price}
      </div>
      <button
        className={
          Props.data.cartStatus === "out"
            ? "btn btn-primary addToCart"
            : "btn btn-danger addToCart"
        }
        onClick={(event) =>
          cartCountHandlerChild(Props.data.id, Props.data.cartStatus)
        }
      >
        {Props.data.cartStatus === "out" ? "ADD TO CART" : "REMOVE FROM CART"}
      </button>
    </div>
  );
}

export default Item;
