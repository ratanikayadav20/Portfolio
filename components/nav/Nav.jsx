import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <Link to='/' onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><AiOutlineHome /></Link>
      <Link to='/about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}><AiOutlineUser /></Link>
      <Link to='/experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BiBook /></Link>
      <Link to='/projects' onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects'?'active':''}><AiOutlineProject /></Link>
      <Link to='/contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><BiMessageSquareDetail /></Link>
    </nav>
  )
}

export default Nav