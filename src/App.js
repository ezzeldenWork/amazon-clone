import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/chechout">checkout</Route>
          <Route path="/login">login</Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
