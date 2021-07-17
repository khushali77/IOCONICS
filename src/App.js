import './App.css';
import Home from "./Pages/Home";
import Language from "./Pages/Language";
import {BrowserRouter,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/language' component={Language}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
