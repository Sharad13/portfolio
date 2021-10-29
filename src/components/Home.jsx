import Typical from "react-typical"
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { useEffect, useState } from "react";
import Slide from 'react-reveal/Slide';
import { AiFillMail } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";

export function Home(){
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
    const [show4,setShow4]=useState(false)
    const [show,setShow]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },5000)
            setTimeout(()=>{
                setShow2(true)
            },1000)
            setTimeout(()=>{
               setShow3(true)
           },2000)
           setTimeout(()=>{
               setShow4(true)
           },3000)
    },[])
    return <>
    <div id="home" className="home mb-5 mt-5 pb-5">
    
        <div className="container">
        
        <div className="row  ">
            <div className="col-xl-6 col-md-12 pt-5 ">
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
                " a Full-Stack Developer"  
            ]}
            />
            </p>
            <div className="abt text-left">I build user-friendly websites,have a good understanding of data 
            structures and algorithm,proficient in React.js.I also love to talk about space. My guilty pleasure is gorging on spicy street food.
            </div>
            <Slide bottom><div className="icondiv mt-5 ">
             <span className="cont   "><a className="linked" target="_blank" href="https://gmail.com"><AiFillMail className="giticon2"/></a></span>
             <span className="cont  "><a className="linked" target="_blank" href="https://www.linkedin.com/in/sharad-dethe-4b3746215/"><AiFillLinkedin className="giticon2"/> </a></span>
            </div>
            </Slide>
            </div>
        </div>
        </div>    
    </div>
    </>
}

// {<svg style={{
//     display:"block",
//     position: "absolute",
//     top:"300px",
//     left:"0px",
//     right:"80px",
//     zIndex: "-1"
// }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
// <path fill="#0099ff" fill-opacity="1" d="M0,320L80,309.3C160,299,320,277,480,234.7C640,192,800,128,960,85.3C1120,43,1280,21,1360,10.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
// </svg>}