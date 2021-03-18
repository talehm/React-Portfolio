import './App.css';
import Main from "./components/main/Main"
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
        <Router history={history}>

          <Main />
      </Router>
    </div>
  );
}

export default App;
