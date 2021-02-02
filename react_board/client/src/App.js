import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ForumComponent from "./components/forum/ForumComponent";
import EditorComponent from "./components/EditorComponent";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "../src/hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)}
          />
          <Route exact path="/board" component={ForumComponent} />
          <Route exact path="/edit" component={EditorComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
