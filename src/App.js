import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import AdminLogin from "./components/admin/AdminLogin";
import Home from "./components/Home";
import Admindashboard from "./components/admin/Admindashboard";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/adminlogin">
          <AdminLogin />
        </Route>
        <Route path="/admindashboard/:name">
          <Admindashboard />
        </Route>
        <Route path="/home/:name">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
