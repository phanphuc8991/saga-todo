// router dom
import { Switch, Route } from "react-router-dom";

// style
import "./App.css";

// component
import Home from "features/home";
import Login from "features/auth/pages/Login";

// connected-react-router
import { ConnectedRouter } from "connected-react-router";

// history
import { history } from "utils";
import { PrivateRoute } from "components/common";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
