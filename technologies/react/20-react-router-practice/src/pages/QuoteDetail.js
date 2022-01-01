import { useParams, Route } from "react-router-dom";
import React from "react";

import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const { quoteId } = useParams();

  return (
    <div>
      <h1>Quote Detail</h1>
      <h3>This is quote {quoteId}</h3>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
