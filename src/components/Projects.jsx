import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect} from 'react';

export function Projects(){

    useEffect(() => {
        Aos.init({duration:1000});
      }, [])

    return<>
    <div id="projects" className=" projects container proj pb-5 ">
    <span className="headingskill">PROJECTS</span>
    <div className="row">
         <div data-aos="zoom-in" className=" col-xl-4 offset-xl-1 col-12 mt-3 mb-5 pbox pt-2 pb-3 ">
         <div className=" bord">
         <a target="_blank" href="https://sharad13.github.io/CultFit/"><img className="img-fluid p1" src="/cultfithomepage.png" alt=""/></a>
         </div>
         <span className="projname">
         <a className="linked redirect" target="_blank" href="https://sharad13.github.io/CultFit/">Cult Fit Clone  </a>
         <a className="linked1" target="_blank" href="https://github.com/Sharad13/CultFitWithNode"><AiFillGithub /></a>
         <a className="linked1" target="_blank" href="https://sharad13.github.io/CultFit/">
         <img style={{paddingLeft:"3px"}} src="https://img.icons8.com/windows/32/4a90e2/external-link.png"/>
         </a>
         </span>
         <br/>
         <span className="info">A web application which helps people to stay healthy
          and fit within the comfort of their home using live workout sessions.</span>
          <br />
          
          <div className="mt-4">
          <div style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr",
            margin:"auto",
            width:"60%",
            fontSize:"13px",
            color:"white",
            fontWeight:"700"
        }}>
        <div style={{
            width:"50px",
            marginLeft:"8px"
        }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt=""/><br/>HTML</div>
        <div style={{
          width:"50px",
          marginLeft:"8px"
      }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/css3.png" alt=""/><br/>CSS</div>
      <div style={{
          width:"50px",
          marginLeft:"8px"
      }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/javascript.png" alt=""/><br/>JS</div>
      </div>
          </div>
          </div>


         <div data-aos="zoom-in" className=" col-xl-4 offset-xl-2 pbox col-12 mt-3 pt-2 mb-5">
         <div className=" bord">
         <a target="_blank" href="https://www.youtube.com/watch?v=wxFuJ_I0-1M&ab_channel=AkhilKumarAdepu"><img className="img-fluid p1" src="https://user-images.githubusercontent.com/72969348/135753076-b32dfd7d-545d-42b6-9b0b-37b8cc8f700b.png" alt=""/></a>
         </div>
         <span className="projname">
         <a className="linked redirect pr-3" target="_blank" href="https://www.youtube.com/watch?v=wxFuJ_I0-1M&ab_channel=AkhilKumarAdepu">OLX Clone</a> 
         <a className="linked1 redirect ml-3" target="_blank"  href="https://www.youtube.com/watch?v=wxFuJ_I0-1M&ab_channel=AkhilKumarAdepu"><AiFillGithub className=" ml-3"   /></a>
         <a className="linked1" target="_blank" href="https://www.youtube.com/watch?v=wxFuJ_I0-1M&ab_channel=AkhilKumarAdepu">
         <img style={{paddingLeft:"3px"}} src="https://img.icons8.com/windows/32/4a90e2/external-link.png"/>
         </a>
         </span>
         <br/>
         <span className="info " style={{
            color: "black",
            fontSize: "15px",
            fontWeight: "500",
            letterSpacing: "1px",
        
         }}>The OLX marketplace is a platform for buying and selling services and goods such 
         as electronics, fashion items,household goods.</span>
          <br/>
          
          <div className="mt-4">
          <div style={{
              display:"grid",
              gridTemplateColumns:"1fr 1fr 1fr 1fr",
              margin:"auto",
              width:"60%",
              fontSize:"13px",
              color:"white",
              fontWeight:"700"
          }}>
          <div style={{
              width:"50px",
              marginLeft:"8px"
          }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/react-native.png" alt=""/><br/>React</div>
          <div style={{
            width:"50px",
            marginLeft:"8px"
        }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/css3.png" alt=""/><br/>CSS</div>
        <div style={{
            width:"50px",
            marginLeft:"8px"
        }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/javascript.png" alt=""/><br/>JS</div>
        <div style={{
            width:"40px",
            marginLeft:"8px",
            marginTop:"6px"
        }}><img className="img-fluid pb-1 " src="data:image/jpeg;base64,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" alt=""/><br/>MongoDB</div>
        
        </div>
        </div>
         </div>
        
        
         
    </div>
</div>
    </>
}
// {   <span className="tools">React | CSS | JavaScript | MongoDB </span>}