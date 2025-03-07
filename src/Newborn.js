import React, { useState } from "react";
import { NewbornCart } from "./NewbornCart";
import { BabyToysCart } from "./BabyToysCart"; // New Category for Baby Toys
import { BabyCareCart } from "./BabyCareCart"; // New Category for Baby Care Items

export default function NewBorn() {
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
                src="https://www.shutterstock.com/image-photo/top-view-newborn-baby-girl-600nw-2284340797.jpg"
                alt="Newborn Clothing"
                height="150px"
                width="150px"
                onClick={() => showItems("newborn")}
              />
              <center>Newborn Clothing</center>
            </td>
            <td>
              <img
                src="https://images.pexels.com/photos/3875217/pexels-photo-3875217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Baby Toys"
                height="150px"
                width="150px"
                onClick={() => showItems("toys")}
              />
              <center>Baby Toys</center>
            </td>
            <td>
              <img
                src="https://sbnri.com/blog/wp-content/uploads/2022/07/istockphoto-622427186-612x612-1.jpeg"
                alt="Baby Care"
                height="150px"
                width="150px"
                onClick={() => showItems("care")}
              />
              <center>Baby Care</center>
            </td>
          </tr>
        </table>
      ) : category === "newborn" ? (
        <NewbornCart />
      ) : category === "toys" ? (
        <BabyToysCart />
      ) : (
        <BabyCareCart />
      )}
    </div>
  );
}
