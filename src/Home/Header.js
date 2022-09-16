import React from "react";

function Header(props) {
  console.log(props);
  return (
    <div className="header">
      <div className="cartCart">
        <b> Cart Items:</b> {props.data}
      </div>
    </div>
  );
}

export default Header;
