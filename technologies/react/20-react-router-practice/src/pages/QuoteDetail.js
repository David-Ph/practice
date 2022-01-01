import { useParams } from "react-router-dom";
import React from "react";

function QuoteDetail() {
  const { quoteId } = useParams();

  return (
    <div>
      <h1>Quote Detail</h1>
      <h3>This is quote {quoteId}</h3>
    </div>
  );
}

export default QuoteDetail;
