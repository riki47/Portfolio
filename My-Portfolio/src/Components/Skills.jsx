import React, { useEffect, useState } from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import m1 from "../assets/Images/meter1.svg"
import m2 from "../assets/Images/meter2.svg"
import m3 from "../assets/Images/meter3.svg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const [win, setWin] = useState(window.innerWidth);

  useEffect(() => {
    console.log("123")
    const handleResize = () => {
      setWin(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [win]);

  let [ text ] = useTypewriter({
          words: ['Skills', 'Passion'], // Fixed spelling
          loop: true, // Corrected loop syntax
          typeSpeed: 200,  // Speed of typing (milliseconds per character)
          deleteSpeed: 80, // Speed of deleting characters
          delaySpeed: 2000,
        });

  var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: win>640?(win>"1000"?3:2):1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        };


  /////////
  return (
    <div className='w-full border-t-8 border-black min-h-[0vh] pb-10' id="skillsc">
      <div className='-top-[7rem] rounded-4xl  relative  h-[60vh] w-full'>
        <div id="skills" className='skk pt-18 sha rounded-4xl relative left-[4%] bg-[#0e0e0e] h-[37rem] w-[90vw]'>
          <div className='w-full text-center'>
          <div className=' m-auto h-10 flex items-center justify-center ddsha rounded-4xl font-bold border-[0.01rem] opacity-90 bg-[#1f1f1f] min-w-[15rem] w-[30vw] mb-8 max-w-5/6 text-center'><h1 className='text-2xl font-bold'>{text}<Cursor/></h1></div>
            <p className='font-extralight'>← Scroll Right/Left →</p>
            <div className='mx-12'>
            <Slider {...settings} className="mt-18 flex font-bold justify-center items-center gap-10 text-center">
              <div className="flex flex-col items-center">
                <img src={m1} className="min-w-[10rem] mb-5 mx-auto" alt="DSA" />
                <div>DSA</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={m1} className="min-w-[10rem] mb-5 mx-auto" alt="DSA" />
                <div>Java</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={m3} className="min-w-[10rem] mb-5 mx-auto" alt="DSA" />
                <div>JavaScript</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={m2} className="min-w-[10rem] mb-5 mx-auto" alt="DSA" />
                <div>React</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={m3} className="min-w-[10rem] mb-5 mx-auto" alt="DSA" />
                <div>Tailwind (CSS Framework)</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={m2} className="min-w-[10rem] mb-5 mx-auto" alt="DSA" />
                <div>Front-End WebDev</div>
              </div>
            </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full tsha text-center px-12 text-2xl font-semibold text-white'>
      I am skilled in DSA, Java, and web development, with expertise in JavaScript, React JS, and Tailwind CSS.
      </div>
    </div>
  )
}

export default Skills
