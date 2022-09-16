import React, { useState } from "react";
import Item from "./Item";
import "./item.css";
import Header from "./Header";

function Display() {
  const items = [
    {
      id: 1,
      name: "Item1",
      price: "$34",
      dealer: "sxy dealers",
      cartStatus: "out",
    },
    {
      id: 2,
      name: "Item2",
      price: "$344",
      dealer: "pok dealers",
      cartStatus: "out",
    },
    {
      id: 3,
      name: "Item3",
      price: "$634",
      dealer: "yu dealers",
      cartStatus: "out",
    },
    {
      id: 4,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 5,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 6,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 7,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 8,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 9,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 10,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 11,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 12,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
    {
      id: 13,
      name: "Item4",
      price: "$934",
      dealer: "muu dealers",
      cartStatus: "out",
    },
  ];
  const [itemsList, setItems] = useState(items);
  var [cartCount, setCartCount] = useState(0);

  const cartCountHandler = (num, status) => {
    const newItems = itemsList.map((item) => {
      if (item.id === num && status === "out") {
        setCartCount(cartCount + 1);

        item.cartStatus = "on";
        return item;
      } else if (item.id === num && status === "on") {
        setCartCount(cartCount - 1);
        item.cartStatus = "out";
        return item;
      }
      return item;
    });

    setItems(newItems);
  };
  return (
    <div className="display">
      <Header data={cartCount} />
      <div className="displayBody">
        {itemsList.map((item) => {
          return (
            <Item
              key={item.id}
              cartCountHandler={cartCountHandler}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Display;
