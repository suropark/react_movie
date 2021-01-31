import './App.css';
import EditorComponent from './components/EditorComponent'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ForumComponent from './components/forum/ForumComponent';



function App() {
  return (
    <Router>
      <div>
        <Switch>        
          <Route exact path="/board" component={ForumComponent}/>
          <Route exact path="/edit" component={EditorComponent}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
