import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import About from "./routes/About"
import Home from "./routes/Home";
function App() {
  return <HashRouter>
    <Switch>
    <Route path="/about" component={About} />
    <Route path="/">
      <h1> hOME</h1>
    </Route>
    <Route path="/movies" component={Home} />
      </Switch>
    </HashRouter>
}

export default App;
