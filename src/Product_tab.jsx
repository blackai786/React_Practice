import Product from "./Product.jsx";

function ProductTabs() {
  let styles = {
    display:"flex",
    flex:"flexWrap",
    justifyContent:"center",
    alignItems :"center"
  };
  return (
    <div style={styles}>
      <Product title="Logitech Mx Master 3S" idx={0} />
      <Product title="Apple Pencil(2nd Gen)" idx={1} />
      <Product title="Zebronics Zeb-Transformer" idx={2} />
      <Product title="Portronics Toad 23 Wireless Mouse" idx={3} />
    </div>
  );
}

export default ProductTabs;
