import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
export function Contact(){

    return <>
    
        <div className="container">
        <div className="row mt-5 pt-5 pb-5 contact">
            <div className="col-xl-6 col-md-12  ">
            <img className="img-fluid hands" src= "https://cdn.pixabay.com/photo/2016/03/31/21/33/greeting-1296493_960_720.png" alt=""/>
            </div>
            <div className="col-xl-6 col-md-12 ">
            <p>Wanna collaborate !</p>
            <span>I would love to work on some exciting projects.So,if you want to 
            collaborate with me or want to share what you are working on feel free to 
            contact me - I would love to hear about it! </span>
            <div className="row mt-5">
            <div className="col-xl-1 offset-xl-10"><a className="linked" target="_blank" href="https://www.linkedin.com/in/sharad-dethe-4b3746215/"><AiFillLinkedin className="giticon"/></a></div>
            <div className="col-xl-1 "><a className="linked" target="_blank" href="https://github.com/Sharad13"><AiFillGithub className="giticon"/></a></div>
            </div>
            </div>
        </div>
    </div>    
    
    </>
}