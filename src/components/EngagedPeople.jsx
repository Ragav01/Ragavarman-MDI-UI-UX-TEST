import React from 'react'
import { ButtonFill } from './Button'

import spinLight from '../assets/spin.svg'
import spinDark from '../assets/spin-dark.svg'

import avatar1 from '../assets/avatar/avatar-1.jpg'
import avatar2 from '../assets/avatar/avatar-2.jpg'
import avatar3 from '../assets/avatar/avatar-3.jpg'
import avatar4 from '../assets/avatar/avatar-4.jpg'
import avatar5 from '../assets/avatar/avatar-5.jpg'
import avatar6 from '../assets/avatar/avatar-6.jpg'

export const EngagedPeople = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row items-center '>
        <div className='lg:w-6/12 mx-auto'>
            <div className='relative w-[80vw] md:w-[542px] md:h-[542px] flex justify-center items-center'> 
                <img src={avatar1} className='w-[100px] md:w-[160px] absolute z-10 rounded-full' alt="" />
                <img src={avatar2} className='w-[40px] md:w-[60px] absolute z-10 left-14 top-10 md:left-20 md:top-28 rounded-full' alt="" />
                <img src={avatar3} className='w-[60px] md:w-[80px] absolute z-10 -left-5 top-58 md:-left-8 rounded-full' alt="" />
                <img src={avatar4} className='w-[60px] md:w-[70px] absolute z-10 left-10 bottom-14 md:left-20 md:bottom-28 rounded-full' alt="" />
                <img src={avatar5} className='w-[50px] md:w-[90px] absolute z-10 right-0 top-20 md:right-10 md:top-32 rounded-full' alt="" />
                <img src={avatar6} className='w-[75px] md:w-[100px] absolute z-10 right-5 bottom-10 md:right-16 md:bottom-24 rounded-full' alt="" />
                <span className='absolute w-full h-full bg-gradient-to-t from-skin-body from-20% via-transparent via-60% to-skin-body to-80%'></span>
                <img className='dark:hidden' src={spinLight} alt="..." />
                <img className='hidden dark:block' src={spinDark} alt="..." />
            </div>
        </div>
        <div className='lg:w-5/12 space-y-5 md:space-y-10 '>
            <h2 className='text-3xl md:text-6xl text-center lg:text-left  leading-tight text-skin-base font-semibold'>More than 1000+ people engaged</h2>
            <p className='text-base md:text-lg text-center lg:text-left  text-skin-muted'>Do you know what could beat the exciting feeling of having a new computer? Make your own. Making your own computer from scratch is not only fun to do but cheaper as well.</p>
            <div className='hidden lg:block'>
                <ButtonFill title='Get started for free' icon={true}/>
            </div>
        </div>
    </section>
  )
}
