import './App.css';
import Home from "./Pages/Home";
import {BrowserRouter,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/IOCONICS' component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
