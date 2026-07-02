import "./Product.css";

function Product({ title, price }) {
  let isDiscount = price > 30000
  let style = { backgroundColor: isDiscount ? "yellow" : "" };
  return (
    <div className="Product" style={style}>
      <h3>{title}</h3>
      <p>price : {price}</p>
      {isDiscount && <p>discount you got is 5%</p>}
    </div>
  );
}

export default Product;
