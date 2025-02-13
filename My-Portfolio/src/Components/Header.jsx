import React, { useEffect, useState } from 'react';
import img1 from '../assets/Images/in.png';
import img2 from '../assets/Images/image.png';
import img3 from  '../assets/Images/gm.png';
import { Link } from 'react-scroll';

function Header()
{
  //// hooks
  const[scrolled,setScrolled] = useState(false);
  const[isAct,setAct] = useState('Home');
  const[move,setMove] = useState(false);
  
  useEffect(()=>
    {
      console.log(isAct);
      function handleScroll() {
        if (window.scrollY > 35) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      window.addEventListener("scroll",handleScroll);
      return() =>{ window.removeEventListener("scroll",handleScroll);}
    },[isAct])

  //// others
  

  //// return
  return (
    <div className='z-99 h-[5rem] border-black shadow-xl transition-all duration-500 text-md head py-5 text-center p-2 w-full flex flex-row justify-center gap-3 sm:gap-1 sm:justify-between items-center text-lg' style={{
      backgroundColor : scrolled ? "#121212":"",
      backdropFilter : "blur(40px)",
      position: scrolled ? "fixed":"relative",
      top:scrolled? "0px":"0px",
      boxShadow:scrolled?"0 10px 30px black":""
    }}>
      <div className='ml-[2rem] hidden sm:block mr-[4rem] sm:mr-[8rem] lg:mr-[12rem] xl:mr-[18rem] '><a className='text-3xl'><strong>Portfolio</strong></a></div>
      <div className={isAct === 'Home' ? "flex justify-center text-center head-t1-active":"flex justify-center text-center head-t1"} onClick={(e)=>{setAct(e.target.innerText)}}><a href={isAct !== 'Home'?"#home":"#"}>Home</a></div>
      <div className={isAct === 'Skills' ? "flex justify-center text-center head-t1-active":"flex justify-center text-center head-t1"} onClick={(e)=>{setAct(e.target.innerText)}}><Link onClick={(e)=>{setAct(e.target.innerText)}} to="skills" offset={-200}>Skills</Link></div>
      <div className={isAct === 'Projects' ? "flex justify-center text-center head-t1-active":"flex justify-center text-center head-t1"} onClick={(e)=>{setAct(e.target.innerText)}}><a href={isAct !== 'Projects'?"#projects":"#"}>Projects</a></div>
      <div className='flex flex-row gap-2'>
        <div className='head-t2 hidden sm:flex sm:justify-center sm:items-center overflow-hidden'><a target='_blank' href='https://www.linkedin.com/in/rithwik-koul-9500131b3/'><img className = " h-[1rem]" src={img1} alt="" /></a></div>
        <div className='head-t2 hidden md:flex sm:justify-center sm:items-center overflow-hidden'><a target='_blank' href ="https://leetcode.com/u/rithwik_koul/"><img className = " h-[1.5rem] pr-1" src={img2} alt="" /></a></div>
        <div className='head-t2 hidden lg:flex md:justify-center md:items-center overflow-hidden'><a target='_blank' href="https://github.com/riki47"><img className = " h-[1.5rem]" src={img3} alt="" /></a></div>
      </div>
      <div className='hidden md:block h-[3rem] w-[8.5rem] ' onMouseEnter={()=>{setMove(true)}} onMouseLeave={()=>{setMove(false)}}><div className='exp -z-1 transition-width duration-500' style={
          {
            width: move?"8.5rem":"0.3rem",
            boxShadow : move?"0 0 10px white":""
          }
        }>
        </div><div className=' border-2  p-3 px-4 font-extrabold text-sm h-[3rem] w-[8.5rem] transition-colors duration-500' >
          <a target="_blank" href="mailto:rithwikkoul180204@gmail.com" className = "z-50" style = {
          {
            color : move?"black":"white",
          }}>Let's Connect</a></div>
      </div>
    </div>
  )
}
//// end

export default Header
