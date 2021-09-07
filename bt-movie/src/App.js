import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom"
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { fetchMe } from "./redux/actions/Auth";
import Profile from "./pages/Profile/Profile";
import { AuthRoute, PrivateRoute } from "./HOC/Route";
import { TOKEN } from "./util/Settings/config";

export const history = createBrowserHistory();


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (token) {
      dispatch(fetchMe())
    }

  }, [dispatch])
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/detail/:id" exact component={Detail} redirectPath="/login" />
        <AuthRoute path="/login" exact component={Login} redirectPath="/" />
        <AuthRoute path="/register" exact component={Register} redirectPath="/" />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
