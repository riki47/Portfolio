import React from 'react'
import { Cursor } from 'react-simple-typewriter'

function Footer()
{
  return (
    <div className='w-full bg-imgg ' id="footer">
      <form className='bg-[#000000] text-center border-[0.01rem] border-[#841fff] relative -top-[7rem] rounded-4xl h-[30rem] w-[90vw] m-auto'>
        <p className='p-4 text-3xl font-extrabold'>Get In Touch<Cursor/></p>
      </form>
      <div className='z-99  flex justify-around items-center p-10 text-center' style={{
      backgroundColor : "#121212",
      backdropFilter : "blur(40px)",
    }}> ADDITIONAL INFO :- <p>Contact No: 9700707777 </p><p>Email: rithwikkoul180204@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
