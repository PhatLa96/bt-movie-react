import { createBrowserHistory } from "history";
import { BrowserRouter, Switch } from "react-router-dom";
import AddUser from "./pages/AddUser/AddUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditUser from "./pages/EditUser/EditUser";
import Login from "./pages/Login/Login";
import AdminTemplate from "./Template/AdminTemplate/AdminTemplate";


export const history = createBrowserHistory();


function App() {



  return (
    <BrowserRouter history={history}>
      <Switch>
        <AdminTemplate path="/" exact component={Login} />
        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
        <AdminTemplate path="/admin/users/adduser" exact Component={AddUser} />
        <AdminTemplate path="/admin/users/edit/:name" exact Component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
