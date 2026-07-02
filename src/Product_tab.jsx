import Product from "./Product.jsx";

function ProductTabs() {
  return (
    <>
      <Product title="Laptop" price={90000} />
      <Product
        title="phone"
        price={20000}
      />
      <Product title="pen" price={9} />
    </>
  );
}

export default ProductTabs;
