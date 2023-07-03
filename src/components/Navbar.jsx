import React, { useState } from 'react'
// Local-Images
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'
// React-icons
import { FiMenu } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
import { PiMoonStarsFill } from 'react-icons/pi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
    const [expendMenu, setExpendMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(false);
    const navlink = [
        {'title':'Overview'},
        {'title':'Search jobs'},
        {'title':'For hiring'},
        {'title':'News'}
    ]
    // Dark mode toggle
    const theme = document.querySelector("body")
    if(!darkMode){
        theme.classList.remove('dark')
    }
    else{
        theme.classList.add('dark')
    }
  return (
      <nav className={`max-w-screen-xl mx-auto absolute left-0 right-0 top-0 z-10 ${expendMenu ? 'bg-skin-surface' : 'bg-transparent'}`}>
        <div className='flex items-center justify-between py-4 px-4'>
            <a href='/'>
                <img className='h-[28px] sm:h-[38px] hidden dark:block' src={logoDark} alt="Baran-logo" />
                <img className='h-[28px] sm:h-[38px] block dark:hidden' src={logoLight} alt="Baran-logo" />
            </a>
            <div className='hidden lg:flex flex-1 lg:ml-8'>
                {navlink.map((item, index)=> {
                return( 
                        <a href='/' className='text-skin-base text-lg tracking-tight font-medium px-4 py-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md' key={index}>{item.title}</a>
                )
                })}
            </div>
            <div className='flex gap-x-4 lg:gap-x-0'>
                {/* Theme switch */}
                <button onClick={() => setDarkMode(!darkMode)} className='text-xl text-skin-base'>
                    {darkMode ? <FiSun/> : <PiMoonStarsFill/>}
                </button>
                {/* Sign in Cta */}
                <a href='/signin' className='hidden lg:btn text-skin-base'>
                    Sign in
                </a>
                {/* Sign up Cta */}
                <a href='/signup' className='hidden lg:btn btn-md btn-outline'>
                    Get Started 
                </a>
                {/* Menu-toggle-button */}
                <button onClick={() => setExpendMenu(!expendMenu)} className='lg:hidden text-2xl text-skin-base'>
                    { expendMenu ? <AiOutlineClose/>: <FiMenu />}
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        <div className={`block lg:hidden overflow-hidden rounded-md ${expendMenu ? 'h-screen': 'h-0'}`}>
            {navlink.map((item, index)=> {
               return( 
                    <a href='/' className='block text-lg tracking-tight text-skin-base font-medium px-6 py-4' key={index}>{item.title}</a>
               )
            })}
            <a href='/signup' className='mx-4 my-5 btn btn-lg lg:btn-md btn-default lg:btn-outline'>
                Get Started 
            </a>
            <a href='/signin' className='mx-1 my-5 btn btn-lg btn-outline'>
                Sign in
            </a>
        </div>
      </nav>
  )
}
