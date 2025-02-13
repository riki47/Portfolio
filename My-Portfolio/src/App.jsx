import React from 'react'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className='bg-img w-full'>
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    );
}

export default App
