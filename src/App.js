import logo from './logo.svg';
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./components/Navbar.jsx"
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"
import {Skills} from "./components/Skill"
import {Contact} from "./components/Contact"
import {Home} from "./components/Home"
import {Projects} from "./components/Projects"
import {Navbbb} from "./components/Nav"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbbb/>
    <Route path="/" exact><Home/></Route>
      <Route path="/home" exact><Home/></Route>
      <Route path="/skills" exact><Skills/></Route>
      <Route path="/contact" exact><Contact/></Route>
      <Route path="/projects" exact><Projects/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
