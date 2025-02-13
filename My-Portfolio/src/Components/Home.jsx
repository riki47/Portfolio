import React from 'react'
import { Cursor} from 'react-simple-typewriter';
import { useTypewriter } from 'react-simple-typewriter';
import me from '../assets/Images/me.jpeg'

const Home = () => {
    let [ text ] = useTypewriter({
        words: ['Software Developer Enthusiast', 'Frontend Developer'], // Fixed spelling
        loop: true, // Corrected loop syntax
        typeSpeed: 80,  // Speed of typing (milliseconds per character)
        deleteSpeed: 60, // Speed of deleting characters
        delaySpeed: 2000,
      });
  return (
    <div className='min-h-[80vh] md:min-h-[60vh]'>
      <div className='flex flex-col md:flex-row  items-center md:items-start justify-around gap-10 pt-[5rem] p-10 transition-all duration-300 min-h-[80vh] lg:min-h-[60vh]' id="home">
        <div className='max-w-[40rem] min-h-[30rem] sm:min-h-[20rem]'>
        <h1 className='transition-all  h-[25rem] sm:h-[15rem] md:h-[20rem] lg:h-[15rem] duration-300'>Hello, I'm Rithwik Koul, <br/> I'm a <span>{ text }</span><Cursor/></h1>
        <div>I’m a disciplined and hardworking individual, passionate about learning and growing. I thrive in collaborative environments, value clear communication, and always strive to bring a positive, results-oriented attitude to every challenge.</div>
        </div>
        <div className='min-w-[20rem] flex flex-col justify-start items-center h-[30rem]'>
          <img src = {me} className='opacity-85 hover:opacity-95 rounded-4xl transition-all duration-300 shadow-lg shadow-black w-[17rem] hover:shadow-2xl hover:w-[17.2rem]'/>
        </div>
      </div>
    </div>
  )
}

export default Home
