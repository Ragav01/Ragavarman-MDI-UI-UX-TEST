import React from 'react'
import Marquee from 'react-fast-marquee'

import brand1 from '../assets/icons/brand/bard-icon-1.png'
import brand2 from '../assets/icons/brand/bard-icon-2.png'
import brand3 from '../assets/icons/brand/bard-icon-3.png'
import brand4 from '../assets/icons/brand/bard-icon-4.png'
import brand5 from '../assets/icons/brand/bard-icon-5.png'
import brand6 from '../assets/icons/brand/bard-icon-6.png'
import brand7 from '../assets/icons/brand/bard-icon-7.png'
import brand8 from '../assets/icons/brand/bard-icon-8.png'
import brand9 from '../assets/icons/brand/bard-icon-9.png'
import brand10 from '../assets/icons/brand/bard-icon-10.png'
import brand11 from '../assets/icons/brand/bard-icon-11.png'
import brand12 from '../assets/icons/brand/bard-icon-12.png'
import brand13 from '../assets/icons/brand/bard-icon-13.png'
import brand14 from '../assets/icons/brand/bard-icon-14.png'
import brand15 from '../assets/icons/brand/bard-icon-15.png'
import brand16 from '../assets/icons/brand/bard-icon-16.png'

export const Integrations = () => {
    const brandIcon = [
        {name:brand1}, {name:brand2}, {name:brand3}, {name:brand4}, {name:brand5}, {name:brand6}, {name:brand7}, {name:brand8}, {name:brand9}, {name:brand10}, {name:brand11}, {name:brand12}, {name:brand13}, {name:brand14}, {name:brand15}, {name:brand16}
    ]
  return (
    <section>
        <div className='bg-skin-inverted rounded-3xl py-10 px-5 md:p-14'>
            <h3 className='text-2xl md:text-4xl font-medium tracking-tight text-center text-skin-inverted pb-3'>Connect your app with the tools you love</h3>
            <p className='text-base md:text-3xl tracking-tight text-center text-skin-inverted opacity-60'>Improve workflows and get more done with native integrations</p>
            {/* AutoScroll - Medium,Large screen only */}
            <div className='hidden md:block w-10/12 mx-auto my-10 md:my-20 relative'>
                <span className='block w-28 h-28 absolute -left-1 z-10 bg-gradient-to-r from-skin-inverted'></span>
                <span className='block w-28 h-28 absolute -right-1 z-10 bg-gradient-to-l from-skin-inverted'></span>
                <Marquee>
                    {brandIcon.map((item,key)=>{
                        return (
                            <div  key={key} className='p-4'>
                                <img src={item.name} alt='...'></img>
                            </div>
                        )
                    })}
                </Marquee>
            </div>
            {/* AutoScroll - small screen only */}
            <div className='md:hidden flex flex-wrap justify-center gap-4 my-10'>
                {brandIcon.map((item,key)=>{
                    return (
                        <img className='w-[20%]'  key={key} src={item.name} alt='...'></img>
                    )
                })}
            </div>
            <div className='flex justify-center'>
                <button className='btn text-skin-inverted border-2 border-skin-inverted py-3 md:py-4  hover:bg-skin-primary hover:text-skin-ctahover'>
                    Explore all integrations
                </button>
            </div>
        </div>
    </section>
  )
}
