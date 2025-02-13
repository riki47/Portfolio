import React from 'react'
import { Cursor } from 'react-simple-typewriter'
import ContactForm from './ContactForm'

function Footer()
{
  return (
    <div className='w-full bg-imgg ' id="footer">
      <form className='form bg-[#000000] text-center border-[0.01rem] border-[#841fff] relative -top-[7rem] rounded-4xl h-[35rem] w-[90vw] m-auto'>
        <p className='p-4 pt-6 text-3xl font-extrabold mb-8'>Get In Touch<Cursor/></p>
        <ContactForm/>
      </form>
      <div className='z-99  flex flex-wrap gap-4 justify-around items-center p-10 text-center' style={{
      backgroundColor : "#121212",
      backdropFilter : "blur(40px)",
    }}> ADDITIONAL INFO :- <p>Contact No: 9700707777 </p><p>Email: rithwikkoul180204@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
