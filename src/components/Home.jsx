import Typical from "react-typical"
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";

export function Home(){

    return <>
    <div className="home">
        <div className="container">
        <div className="row mt-5 pt-5 ">
            <div className="col-xl-6 col-md-12  ">
            <img className="img-fluid photo" src= "/Photo1.png" alt=""/>
            </div>
            <div className="col-xl-6 col-md-12 mt-2 ">
            <p className="hello">Hello!</p>
            <p className="iam" >I am {` `}
            <Typical className="name"
            loop={Infinity}
            wrapper="n"
            steps={[
                2000,
                " an Electrical Engineer",
                2000,
                " a Full stack developer",   
            ]}
            />
            </p>
            <div className="abt">I build user-friendly websites,love to talk about space related stuff 
            and eat spicy food,currently learning <span className="react">@React.js</span> in Masai school.
            </div>
                <div className="row mt-3">
                <div className="col-xl-1 offset-xl-10"><a className="linked" target="_blank" href="https://www.linkedin.com/in/sharad-dethe-4b3746215/"><AiFillLinkedin className="giticon"/></a></div>
                <div className="col-xl-1 "><a className="linked" target="_blank" href="https://github.com/Sharad13"><AiFillGithub className="giticon"/></a></div>
                </div>
            </div>
        </div>
        </div>    
    </div>
    </>
}