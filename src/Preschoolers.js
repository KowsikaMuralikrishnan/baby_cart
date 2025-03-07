import React, { useState } from "react";
import { ActiveSportsWear } from "./ActiveSportsWear"; // Import ActiveSportsWear component
import { UniformsBoys } from "./UniformsBoys"; // Import UniformsBoys component
import { UniformsGirls } from "./UniformsGirls"; // Import UniformsGirls component

export default function Preschoolers() {
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
                  src="https://image.made-in-china.com/2f0j00JizuogIDYjpr/Sports-Suit-Children-s-Summer-Sportswear-Camp-Group-Activities-Customized-Running-Training-Quick-Drying-Clothes.webp"
                  alt="Active and Sports Wear"
                  height="150px"
                  width="150px"
                  onClick={() => showItems("active")}
                />
                <center>Active and Sports Wear</center>
              </td>
              <td>
                <img
                  src="https://i.pinimg.com/736x/d1/1a/0a/d11a0a7e8e951349b8d443a56ed75e4f.jpg"
                  alt="Uniforms for Boys"
                  height="150px"
                  width="150px"
                  onClick={() => showItems("boys")}
                />
                <center>Uniforms for Boys</center>
              </td>
              <td>
                <img
                  src="https://img.joomcdn.net/5a3e9ad167299ded81edc26ca28a77ee68b0350d_original.jpeg"
                  alt="Uniforms for Girls"
                  height="150px"
                  width="150px"
                  onClick={() => showItems("girls")}
                />
                <center>Uniforms for Girls</center>
              </td>
            </tr>
          </tbody>
        </table>
      ) : category === "active" ? (
        <ActiveSportsWear />
      ) : category === "boys" ? (
        <UniformsBoys />
      ) : (
        <UniformsGirls />
      )}
    </div>
  );
}
