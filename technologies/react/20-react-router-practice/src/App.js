import { Route, Switch } from "react-router-dom";

import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
function App() {
  return (
    <Switch>
      <Route path="/quotes">
        <Quotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/quotes/new">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
