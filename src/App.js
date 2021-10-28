import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/chechout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">login</Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
