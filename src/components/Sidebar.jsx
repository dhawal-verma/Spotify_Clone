import React, { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import List from './List'
import { FetchAPI } from '../utils/FetchAPI';
import { useEffect } from 'react';
import {PlayerContext} from '../context/PlayerContext'


const Sidebar = () => {

  const {list,setList} = useContext(PlayerContext)
  
  return (
    list && <div className='w-[35%] p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='flex font-bold text-2xl flex-row justify-between font-style:inter w-[75%]'>
        <div >For You</div>
        <div >Top Tracks</div>
      </div>         
      <SearchBar />
      {list.map((data,index)=>(

      <List key={index} list = {data}/>
      ))}
    </div>
  )
}

export default Sidebar