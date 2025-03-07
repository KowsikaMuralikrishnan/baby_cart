import React, { useState } from "react";
import { InfantClothingCart } from "./InfantClothingCart";
import { InfantToysCart } from "./InfantToysCart"; // New Category for Infant Toys
import { InfantCareCart } from "./InfantCareCart"; // New Category for Infant Care Items

export default function Infant() {
  const [category, setCategory] = useState("");

  const showItems = (category) => {
    setCategory(category);
  };

  return (
    <div>
      {category === "" ? (
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/17853196/pexels-photo-17853196/free-photo-of-a-cute-baby-walking-on-a-pavement-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Infant Clothing"
                height="150px"
                width="150px"
                onClick={() => showItems("clothing")}
              />
              <center>Infant Clothing</center>
            </td>
            <td>
              <img
                src="https://samstoy.in/cdn/shop/files/Baby-Toys-Rolling-Ball-Pile-Tower-Early-Educational-Toy-For-Babies-Rotating-Track-Educational-Baby-Birthday-Gift-Stacking-Toy-For-Children-samstoy-in-5608.jpg?v=1724874117"
                alt="Infant Toys"
                height="150px"
                width="150px"
                onClick={() => showItems("toys")}
              />
              <center>Infant Toys</center>
            </td>
            <td>
              <img
                src="https://www.greatbeginningslc.com/blog/wp-content/uploads/2018/09/Kid-at-Infant-Care-Program.jpg"
                alt="Infant Care"
                height="150px"
                width="150px"
                onClick={() => showItems("care")}
              />
              <center>Infant Care</center>
            </td>
          </tr>
        </table>
      ) : category === "clothing" ? (
        <InfantClothingCart />
      ) : category === "toys" ? (
        <InfantToysCart />
      ) : (
        <InfantCareCart />
      )}
    </div>
  );
}
