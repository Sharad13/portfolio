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
    <div id="home" className="home mb-5 mt-5 ">
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
            <div className="abt">I build user-friendly websites,love to talk about space related stuff 
            and eat spicy food,have a good understanding of data structures and algorithm,currently learning <span className="react">@React.js</span> in Masai school.
            </div>
            <div className="icondiv mt-5">
             <span className="cont "><a className="linked" ><FaPhoneSquareAlt className="giticon2"/></a></span> 
             <span className="cont   "><a className="linked" href="https://gmail.com"><AiFillMail className="giticon2"/></a></span> 
             <span className="cont  "><a className="linked" href="https://www.linkedin.com/in/sharad-dethe-4b3746215/"><AiFillLinkedin className="giticon2"/> </a></span>
            </div>
            </div>
        </div>
        </div>    
    </div>
    </>
}