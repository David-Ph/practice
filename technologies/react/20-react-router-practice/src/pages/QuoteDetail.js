import { useParams, Route } from "react-router-dom";
import React from "react";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "MaoMao", text: "Learning React" },
  { id: "q2", author: "Captain", text: "To be or not to be" },
  { id: "q3", author: "Huya", text: "Random stuff" },
];

function QuoteDetail() {
  const { quoteId } = useParams();

  const findQuote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!findQuote) {
    return <h2>No Quote Found</h2>;
  }

  return (
    <div>
      <HighlightedQuote author={findQuote.author} text={findQuote.text} />
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
