import React from 'react'
import pomo from '../assets/Images/project/pomo.png'
import gd from '../assets/Images/project/gd.png'
import ss from '../assets/Images/project/ss.png'
import yt from '../assets/Images/project/yy.png'
import TiltImage from "../Components/TiltImage.jsx"
import { Cursor } from 'react-simple-typewriter'

const Projects = () => {
  return (
    <div className='bg-[#000000] sha p-8 pt-20'>
      <div className='px-20'>
        <h1 className='text-center font-extrabold text-3xl mb-12 '>Projects<Cursor/></h1>
        <p></p>
        <div className='w-full m-auto h-10 flex items-center justify-center bdsha rounded-4xl font-bold border-[0.01rem] opacity-90 bg-[#1f1f1f] mb-8 max-w-5/6 text-center'><p>Have A Visit</p></div>
        </div>
        <div className="flex flex-wrap mb-[10rem]">
          <div className="w-full sm:w-1/2 xl:w-1/4 p-3">
            <TiltImage src={pomo} url = {'https://pomorodo-academia.netlify.app/'} alt="Pomo" />
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-3">
            <TiltImage src={yt} url = {'https://voluble-chimera-6be91c.netlify.app/'} alt="YouTube" />
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-3">
            <TiltImage src={ss} url = {'https://incredible-licorice-28338f.netlify.app/'} alt="Screenshot" />
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-3">
            <TiltImage src={gd} url = {'https://rithwik-koul.itch.io/find-a-way-out'} alt="GD" />
          </div>
        </div>

    </div>
  )
}

export default Projects
