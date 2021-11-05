import Aos from 'aos';
import "aos/dist/aos.css"
import ParticleBackground from './ParticleBackground';

import { useEffect} from 'react';
export function Skills(){

    useEffect(() => {
        Aos.init({duration:1000});
      }, [])    
    
    return <div id="skills" className="skills " >
   
       <span className="headingskill">SKILLS</span>
        <div  className="container-fluid ">
            <div  className="front mb-2"><span>Front End Tools</span></div>
            <div  className="row  mb-1 f1 pt-1 pb-3">
                <div data-aos="fade-down" className="logo col-xl-2 col-md-6 offset-xl-2  "><img  className="  w-50 img-fluid" src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt=""/><br/>HTML</div>
                <div data-aos="fade-down"  className="logo col-xl-2 col-md-6 "><img data-aos="fade-down" className=" w-50 img-fluid" src="https://img.icons8.com/color/480/000000/css3.png" alt=""/><br/>CSS</div>
                <div data-aos="fade-down"  className="logo col-xl-2 col-md-6 "><img data-aos="fade-down" className=" w-50  img-fluid" src="https://img.icons8.com/color/480/000000/javascript.png" alt=""/><br/>JS</div>
                <div data-aos="fade-down"  className="logo col-xl-2 col-md-6 "><img data-aos="fade-down" className=" w-50  img-fluid" src="https://img.icons8.com/color/480/000000/react-native.png" alt=""/><br/>React</div>
                <div data-aos="fade-down"  className="logo col-xl-2 col-md-6 offset-xl-3 mt-5"><img data-aos="fade-down" className="  w-50 img-fluid" src="https://i.ibb.co/zx0Tt9M/bootstrap.png" alt=""/><br/>Bootstrap</div>
                <div data-aos="fade-down"  className="logo col-xl-2 col-md-6 mt-5"><img data-aos="fade-down" className=" w-50 img-fluid" src="https://img.icons8.com/fluent/480/000000/github.png" alt=""/><br/>Github</div>
                <div data-aos="fade-down"  className="logo col-xl-2 col-md-6 mt-5 offset-md-3 offset-xl-0"><img data-aos="fade-down" className=" w-50  img-fluid" src="https://img.icons8.com/color/480/000000/npm.png" alt=""/><br/>npm</div>
            </div>
            
        </div>
  
        <div className="container-fluid  mb-2  pt-4">
        <div className="front  "><span>Back End Tools</span></div> 
            <div className="row f1 pt-3 pb-3 mt-2 mb-5">
                <div data-aos="fade-down"  className="logo col-xl-2 offset-xl-2"><img className=" w-50 img-fluid" src="https://img.icons8.com/color/480/000000/nodejs.png" alt=""/><br/>node</div>
                <div data-aos="fade-down"  className="logo col-xl-2 "><img className=" w-50 img-fluid" src="https://i.ibb.co/9smDM6j/pngegg.png" alt=""/><br/>express</div>
                <div data-aos="fade-down"  className="logo col-xl-2 "><img className=" w-50 img-fluid" src="mongo1.png" alt=""/><br/>MongoDB</div>
                <div data-aos="fade-down"  className="logo col-xl-2 "><img className=" w-50  img-fluid" src="https://img.icons8.com/fluent/480/000000/mysql-logo.png" alt=""/><br/>MySql</div>
            </div> </div>
    </div>
}