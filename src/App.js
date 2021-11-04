import logo from './logo.svg';
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {Navbar} from "./components/Navbar.jsx"
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"
import {Skills} from "./components/Skill"
import {Contact} from "./components/Contact"
import {Home} from "./components/Home"
import {Projects} from "./components/Projects"
import {Navbbb} from "./components/Nav"
import ParticleBackground from './components/ParticleBackground';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
      <Navbbb/>
      <ParticleBackground/>
      <Home/>   
      <Skills/>
      <Projects/>
      <Contact/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
// {<Route path="/" exact><Home/></Route>
// <Route path="/home" exact><Home/></Route>
// <Route path="/skills" exact><Skills/></Route>
// <Route path="/contact" exact><Contact/></Route>
// <Route path="/projects" exact><Projects/></Route>}