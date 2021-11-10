import Navbar from "./components/header/Navbar";
import Register from "./components/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
