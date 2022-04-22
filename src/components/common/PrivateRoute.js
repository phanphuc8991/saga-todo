import { Redirect, Route } from "react-router-dom";

export function PrivateRoute(props) {
  const checkUserLogin = Boolean(localStorage.getItem("access_token"));
  if (!checkUserLogin) return <Redirect to="/login" />;
  return <Route {...props} />;
}
