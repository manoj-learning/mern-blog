import "./App.css";
import Home from "../src/components/screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Category from "../src/components/screens/Category";
import Single from "../src/components/screens/Single";
import NotFound from "./components/screens/404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/post">
          <Single />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
