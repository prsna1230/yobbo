import Navbar from "./components/header/Navbar";
import Register from "./components/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
