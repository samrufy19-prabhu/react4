import React from "react";

function Products() {
  const products = ["Laptop", "Mobile", "Headphones", "Keyboard"];

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;