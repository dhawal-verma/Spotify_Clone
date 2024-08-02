import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import "@fontsource/inter";
import Player from './components/Player';


const App = () => {

  const [cover, setCover] = useState("#000")
  
  return (
    <div className='h-screen list  p-5'
    style={{backgroundColor:cover}}
    >
      <div className='h-[90%] flex'>
        <Logo />
        <Sidebar />
        <Player />
      </div>
    </div>
  )
}

export default App