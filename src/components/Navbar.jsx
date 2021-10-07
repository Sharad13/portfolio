import {useState} from "react"
import {Link} from "react-router-dom"
import { FaFileDownload } from 'react-icons/fa';

export function Navbar(){
const [skills, setSkills] = useState(false)
    const handlehome=()=>{
        
    }
    return <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
    <div className="container-fluid">
        <a className="navbar-brand s" href="#">SHARAD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse pl-lg-5 ml-lg-5" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link"  to="/home"><span className="hometext">Home</span></Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to="/skills"
                onClick={handlehome}
                >Skills</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
        <a className="nav-link resume" download="Sharad Dethe-fw10_074.pdf" target="_blank" href="./Sharad Dethe-fw10_074.pdf"><FaFileDownload/> Resume</a>
        </li>
           
        </ul>
        
    </div>
    </div>
</nav>
   
}