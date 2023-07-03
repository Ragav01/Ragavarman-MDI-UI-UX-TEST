import React from 'react'
import { ButtonFill } from './Button'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'

const FooterLinks = [
    {
        category: 'Pages',
        link: [{title: 'Overview'},{title: 'Company'},{title: 'For hiring'},{title:'News'}]
    },
    {
        category: 'Services',
        link: [{title: 'Pricing'},{title: 'Interviews'},{title: 'Career'},{title:'FAQ'}]
    },
    {
        category: 'About',
        link: [{title: 'Blog'},{title: 'Help center'},{title: 'Community'},{title:'Contacts'}]
    },
    {
        category: 'others',
        link: [{title: 'Terms of Service'},{title: 'Talk to sales'}]
    }
]
export const Footer = () => {
    
  return (
    <section>
        <div className='bg-skin-surface rounded-3xl p-6 md:p-14 space-y-10'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center space-y-8'>
                <div className='lg:w-8/12'>
                    <h2 className='text-3xl md:text-5xl text-skin-base font-medium'>Let the right people know you’re open to work</h2>
                </div>
                <div><ButtonFill title='Create an account' icon={true}/></div>
            </div>
            {/* Break line */}
            <span className='w-full h-[1px] block bg-skin-inverted opacity-30'></span>
            {/* Bottom area  */}
            <div className='flex flex-col-reverse md:flex-row justify-between'>
                {/* Content  */}
                <div className='md:w-4/12 space-y-5 mt-10 md:mt-0'>
                    {/* Logo */}
                    <img className='dark:hidden' src={logoLight} alt="Logo" />
                    <img className='hidden dark:block' src={logoDark} alt="Logo" />
                    <div className='flex flex-col justify-between space-y-10'>
                        <p className='md:text-lg text-skin-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante dui Lorem ipsum</p>
                        <div>
                            <p className='text-skin-muted'>Made with ❤️ from <a href="https://www.ragavarman.lk/" className='font-medium underline hover:text-skin-base'>Ragavarman</a>, Srilanka</p>
                            <p className='text-skin-muted'>© 2023 Hyre. All rights reserved.</p>
                        </div>
                    </div>
                </div>
                {/* Footer Links */}
                <div className='md:w-6/12 flex flex-wrap justify-between gap-y-6 md:pt-12'>
                    {FooterLinks.map((item,key)=>{
                    return (
                        <ul key={key} className='space-y-4'>
                            {item.link.map((link,key) => {
                                return(
                                    <li key={key}>
                                        <a href="/" className='text-skin-muted hover:text-skin-base font-medium'>{link.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    )
                })}
                </div>
            </div>
        </div>
        <div className="py-2"></div>
    </section>
  )
}

