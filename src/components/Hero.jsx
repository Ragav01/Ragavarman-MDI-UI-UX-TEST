import React from 'react'

import heroStar from '../assets/icons/stars.svg'
import dashboardLight from '../assets/Dashboard-light.svg'
import dashboardDark from '../assets/Dashboard-dark.svg'

import { BsArrowRight } from 'react-icons/bs';

export const Hero = () => {
  return (
    <header className='relative overflow-clip h-full sm:h-[680px] md:h-[880px] py-20 sm:pb-0'>
      {/* Background */}
      <div className='w-[528px] h-[528px] md:w-[828px] md:h-[828px] absolute right-56 -top-24 -z-10 bg-skin-primary dark:opacity-30 blur-[120px] rounded-full'></div>
      <div className='w-[528px] h-[528px] md:w-[828px] md:h-[828px] absolute -right-56 -top-10 -z-10 bg-skin-secondary dark:opacity-30  blur-[120px] rounded-full'></div>
      <img src={dashboardLight} className='hidden md:block dark:hidden absolute -right-72 bottom-0 lg:-right-20 lg:-bottom-10' alt='...'></img>
      <img src={dashboardDark} className='hidden  dark:md:block absolute -right-72 bottom-0 lg:-right-20 lg:-bottom-10' alt='...'></img>
      <main className='max-w-screen-xl mx-auto px-4'>
        <h1 className='text-5xl leading-tight md:text-8xl lg:text-9xl text-skin-base font-medium tracking-tight mt-8 lg:mt-14 mb-8 md:mb-14'>Find your job build your career</h1>
        <div className='md:w-[40vw] space-y-14'>
            <p className='text-xl text-skin-base'>We understand that for you, it’s never just a job. It’s your business. That's why we Passionate about not only finding you a quality employee. But also the perfect fit.</p>
            <div className="flex flex-wrap-reverse lg:flex-row gap-8">
              <a href="/" className='btn btn-lg btn-default'>Get started for free < BsArrowRight/> </a>
              <div className='space-y-2'>
                <img src={heroStar} alt="..." />
                <p className='text-skin-base font-medium tracking-tight'>Rated 4.9 onG2 & Capterra</p>
              </div>
            </div>
        </div>
      </main>
    </header>
  )
}
