import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets.js'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);     // this means logged out
    const [token, setToken] = useState(true);   // When we have tokken means we logged in
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=> navigate('/')} className = 'w-44 cursor-pointer' src={assets.SynseLogo} />

      <ul className='hidden md:flex items-start gap-10 font-medium text-xl'>
        <NavLink to={'/'}>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-orange w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/reciepies'}>
            <li className='py-1'>RECIEPIES</li>
            <hr className='border-none outline-none h-0.5 bg-orange w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-orange w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/contact'}>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-orange w-3/5 m-auto hidden'/>
        </NavLink>  
      </ul>  
      <div className='flex item-center gap-4'>
        <button className='bg-orange-500 p-3 rounded-full hover: cursor-pointer'>Create Account</button>
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden h-6 mt-2' src={assets.menu_icon} alt="" />
        {/* Mobile Menu  */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={() => {setShowMenu(false)}} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => {setShowMenu(false)}} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => {setShowMenu(false)}} to='/reciepies'><p className='px-4 py-2 rounded inline-block'>RECIEPIES</p></NavLink>
            <NavLink onClick={() => {setShowMenu(false)}} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => {setShowMenu(false)}} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
