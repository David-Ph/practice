import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "MaoMao", text: "Learning React" },
  { id: "q2", author: "Captain", text: "To be or not to be" },
  { id: "q3", author: "Huya", text: "Random stuff" },
];

function Quotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default Quotes;
