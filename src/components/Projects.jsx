import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
export function Projects(){

    return<>
    <div id="projects" className=" projects container proj pb-5 ">
    <span className="headingskill">PROJECTS</span>
    <div className="row">
         <div className=" col-xl-4 offset-xl-1 col-12 mt-5 mb-5 pbox pt-2 pb-3 ">
         <div className=" bord">
         <a target="_blank" href="https://sharad13.github.io/CultFit/"><img className="img-fluid p1" src="/cultfithomepage.png" alt=""/></a>
         </div>
         <span className="projname">
         <a className="linked redirect" target="_blank" href="https://sharad13.github.io/CultFit/">Cult Fit Clone  </a>
         <a className="linked1" target="_blank" href="https://github.com/Sharad13/CultFitWithNode"><AiFillGithub /> </a>
         </span>
         <br/>
         <span className="info " style={{
            color: "black",
            fontSize: "15px",
            fontWeight: "500",
            letterSpacing: "1px"
         }}>A web application which helps people to stay healthy
          and fit within the comfort of their home using live workout sessions.</span>
          <br />
          
          <div className="mt-4">
          <span className="projskills"> HTML  | CSS | JavaScript</span>
          </div>
          </div>


         <div className=" col-xl-4 offset-xl-2 pbox col-12 mt-5 mb-5">
         <div className=" bord">
         <a target="_blank" href="https://www.youtube.com/watch?v=wxFuJ_I0-1M&ab_channel=AkhilKumarAdepu"><img className="img-fluid p1" src="https://user-images.githubusercontent.com/72969348/135753076-b32dfd7d-545d-42b6-9b0b-37b8cc8f700b.png" alt=""/></a>
         </div>
         <span className="projname">
         <a className="linked redirect pr-3" target="_blank" href="https://www.youtube.com/watch?v=wxFuJ_I0-1M&ab_channel=AkhilKumarAdepu">OLX Clone</a> 
         <a className="linked1 redirect ml-3" target="_blank"  href="https://www.youtube.com/watch?v=wxFuJ_I0-1M&ab_channel=AkhilKumarAdepu"><AiFillGithub className=" ml-3"   /></a>
         </span>
         <br/>
         <span className="info ">The OLX marketplace is a platform for buying and selling services and goods such 
         as electronics, fashion items,household goods.</span>
          <br/>
          
          <div className="mt-4">
          <span className="projskills"> React  | CSS | JavaScript  |  MongoDB</span></div>
         </div>
        
        
         
    </div>
</div>
    </>
}
// {   <span className="tools">React | CSS | JavaScript | MongoDB </span>}