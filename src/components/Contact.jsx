import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import GMap from "./Map"
import Slide from 'react-reveal/Slide';
import { useEffect, useState } from "react";
export function Contact(){
    const [show,setShow]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
    const [show4,setShow4]=useState(false)

    useEffect(()=>{
            setTimeout(()=>{
                setShow2(true)
            },1000)
            setTimeout(()=>{
               setShow3(true)
           },2000)
           setTimeout(()=>{
               setShow4(true)
           },3000)
           setTimeout(()=>{
               setShow(true)
           },4000)
    },[])

    return <>
    
        <div className="container mt-5">
        <div className="row  pb-5 contact ">
        <div className="col-12 col-xl-8 text-center  offset-xl-2 col-md-4 offset-md-4 wann"> <p>Wanna collaborate !</p>
        <span>I would love to work on some exciting projects.So,if you want to 
        collaborate with me or want to share what you are working on feel free to 
        contact me - I would love to hear about it! </span>
        </div>
        </div> 
       
        <div className="row  pb-5 contact">
            <div className="col-xl-6  ">
            <div className="row">
            <div className="col-xl-6 offset-xl-6 gmap ">
            <GMap/>
        </div>
            
            </div>
            </div>
            <div className="col-xl-6 offset-xl-0 col-md-12 text-start box2 ">
            <Slide right><div className="cont cont1 mb-3"><a className="linked " ><FaPhoneSquareAlt className="giticon"/>+91 9834836270</a></div></Slide> 

            <Slide right><div style={{
                    display:!show2? "none":"block"
                }} 
                className="cont  mb-3"><a className="linked" href="https://mail.google.com/"><MdMail className="giticon"/>dethesharad13@gmail.com</a></div></Slide> 
                <Slide right><div style={{
                    display:!show3? "none":"block"
                }}  className="cont mb-3"><a className="linked" href="https://www.linkedin.com/in/sharad-dethe-4b3746215/"><AiFillLinkedin className="giticon"/>linkedin.com/in/sharad-dethe-4b3746215/ </a></div></Slide>
                
                <Slide right><div style={{
                    display:!show4? "none":"block"
                }}  className="cont mb-3"><a className="linked" href="https://github.com/Sharad13"><AiFillGithub className="giticon"/>github.com/Sharad13</a></div></Slide>

            </div>
        </div>
    </div>    
    
    </>
}

// { <div className="row  pb-5 contact">
// <div className="col-xl-6 col-md-12  ">
// <div className="row">
// <div className="col-xl-6 offset-xl-6 ">
// <GMap/>
// </div>
 
// </div>
// </div>
// <div className="col-xl-6 offset-xl-0 col-md-12 text-start ">
// <Slide right><div className="cont cont1 mb-3"><a className="linked " ><FaPhoneSquareAlt className="giticon"/>+91 9834836270</a></div></Slide> 

// <Slide right><div style={{
//         display:!show2? "none":"block"
//     }} 
//     className="cont  mb-3"><a className="linked" href="https://mail.google.com/"><MdMail className="giticon"/>dethesharad13@gmail.com</a></div></Slide> 
//     <Slide right><div style={{
//         display:!show3? "none":"block"
//     }}  className="cont mb-3"><a className="linked" href="https://www.linkedin.com/in/sharad-dethe-4b3746215/"><AiFillLinkedin className="giticon"/>linkedin.com/in/sharad-dethe-4b3746215/ </a></div></Slide>
    
//     <Slide right><div style={{
//         display:!show4? "none":"block"
//     }}  className="cont mb-3"><a className="linked" href="https://github.com/Sharad13"><AiFillGithub className="giticon"/>github.com/Sharad13</a></div></Slide>

// </div>
// </div>}