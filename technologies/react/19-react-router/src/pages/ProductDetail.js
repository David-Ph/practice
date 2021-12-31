import { useParams } from "react-router-dom";
import React from "react";

function ProductDetail() {
  // will return key value pairs
  // for example, params.id = productId
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;
