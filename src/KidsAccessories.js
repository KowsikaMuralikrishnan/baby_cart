import React, { useState } from "react";
import KidsAccessory1 from "./KidsAccessory1";
import FashionAccessory from "./FashionAccessory";
import FestiveAccessory from "./FestiveAccessory"; // Import the additional accessory component

export default function KidsAccessories() {
  const [category, setCategory] = useState("");

  const showItems = (category) => {
    setCategory(category);
  };

  return (
    <div>
      {category === "" ? (
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://cdn.cdnparenting.com/articles/2018/04/338324834-H-1024x700.webp"
                  alt="Kids Sunglasses"
                  height="150px"
                  width="150px"
                  onClick={() => showItems("sunglasses")}
                />
                <center>Stationary & School Accessories</center>
              </td>
              <td>
                <img
                  src="https://s.alicdn.com/@sc04/kf/H43e3f6d6f7974ada8f83c6871389cf43P.jpg_720x720q50.jpg"
                  alt="Kids Hair Accessories"
                  height="150px"
                  width="150px"
                  onClick={() => showItems("hair")}
                />
                <center>Fashion Accessories</center>
              </td>
              <td>
                <img
                  src="https://rukminim2.flixcart.com/image/750/900/xif0q/hair-accessory/b/a/7/christmas-sanatcap-santa-goggle-for-kids-adult-xmas-cap-goggle-original-imagw3myd9mrzntv.jpeg?q=20&crop=false"
                  alt="Kids Backpack"
                  height="150px"
                  width="150px"
                  onClick={() => showItems("backpack")}
                />
                <center>Seasonal & Festive Accessories</center>
              </td>
            </tr>
          </tbody>
        </table>
      ) : category === "sunglasses" ? (
        <KidsAccessory1 />
      ) : category === "hair" ? (
        <FashionAccessory />
      ) : (
        <FestiveAccessory />
      )}
    </div>
  );
}
