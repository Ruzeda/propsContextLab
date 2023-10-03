import React from "react"
import Products from "../../components/Products"

const Products = ({products}) => {
  return (
    <div>
        <h1>This is the Products Page!</h1>
        <Products products={products}/>
    </div>
  );
};

export default Products