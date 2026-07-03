import "./Product.css";
import Price from "./Price";

export default function Product({ title, price ,idx}) {
    let oldPrices = ["12,495", "11900", "1599", "599"];
    let newPrices = ["8999", "9199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Wireless Mouse 2.4GHz", " Optical Orientation"],
  ];

  return (
    <div className="Product">
      <p>{title}</p> 
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
} 
