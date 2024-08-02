import React, { useContext } from 'react'
import {PlayerContext} from '../context/PlayerContext'
import { assests } from '../assests/assests';
import Track from './Track';

const Player = () => {

    const {audioRef,track,setTrack,data,list} = useContext(PlayerContext);
    setTrack(list && data);
console.log(track)
  return ( 
    <div className='w-full h-full px-20 py-20'>
        <div className=' text-white pl-10'>
            <h1 className='text-2xl font-bold pb-1'>Ghost Stories</h1>
            <div className='text-sm font-extralight'>Coldplay</div>

            <img className='mt-7 max-w-[350px] max-h-[380px] rounded-lg'  src={assests.cover} alt="lamp" />
        </div>
        
        <Track />
        <audio ref={audioRef} src={track} preload='auto'></audio>
    </div>
  )
}

export default Player