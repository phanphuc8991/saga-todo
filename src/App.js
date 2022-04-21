// router dom
import { Switch, Route } from "react-router-dom";
// style
import "./App.css";
// component
import Home from "./Pages/Home";
import Login from "./features/auth/pages/Login";
// connected-react-router
import { ConnectedRouter } from "connected-react-router";

// history
import { history } from "./utils";
console.log("history", history);

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
