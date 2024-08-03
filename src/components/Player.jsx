import React, { useContext } from 'react'
import {PlayerContext} from '../context/PlayerContext'
import { assests } from '../assests/assests';
import Track from './Track';

const Player = () => {

    const {audioRef,track,setTrack} = useContext(PlayerContext);
    // setTrack(list && data);
    console.log("tarc" + track)
  return ( 
    <div className='w-full h-full px-20 py-20'>
        <div className=' text-white pl-10'>
            <h1 className='text-2xl font-bold pb-1'>{track.name}</h1>
            <div className='text-sm font-extralight'>{track.artist} </div>

            <img className='mt-7 max-w-[350px] max-h-[380px] rounded-lg'  src={`https://cms.samespace.com/assets/${track.cover}`} alt="lamp" />
        </div>
        
        <Track />
        <audio ref={audioRef} src={track.url} preload='auto'></audio>
    </div>
  )
}

export default Player