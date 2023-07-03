import React, { useState } from 'react'
import { Promo } from './Promo'
import {FcGoogle} from 'react-icons/fc'
import {BsLinkedin} from 'react-icons/bs'
import {PiEyeLight} from 'react-icons/pi'
import {PiEyeSlashLight} from 'react-icons/pi'

export const SignUp = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  
  return (
    <header className='relative overflow-clip h-full py-10 sm:py-20'>
      {/* Background */}
      <div className='w-[528px] h-[528px] md:w-[828px] md:h-[828px] absolute right-56 -top-24 -z-10 bg-skin-primary dark:opacity-30 blur-[120px] rounded-full'></div>
      <div className='w-[528px] h-[528px] md:w-[828px] md:h-[828px] absolute -right-56 -top-10 -z-10 bg-skin-secondary dark:opacity-30  blur-[120px] rounded-full'></div>

      <main className='max-w-screen-xl mx-auto px-4 pt-16 flex justify-between'>
        <div className="hidden lg:block lg:w-5/12 space-y-10">
          <Promo/>
        </div>
        {/* Form For Sign Up */}
        <div className="w-full lg:w-5/12 bg-skin-surface px-4 py-6 sm:p-6 rounded-2xl space-y-8">
            <h3 className='text-2xl font-semibold text-skin-base'>Create an account</h3>
            {/* Social media Signin */}
            <div className='flex flex-col sm:flex-row gap-2'>
              <button className='w-full h-14 text-base text-skin-base font-medium tracking-tight flex items-center justify-center gap-3 border-2 border-black/20 dark:border-white/20 hover:bg-skin-inverted hover:text-skin-inverted rounded-xl'>
                <FcGoogle size={24}/>
                Sign up with Google
              </button>
              <button className='w-full h-14 text-base text-skin-base font-medium tracking-tight flex items-center justify-center gap-3 border-2 border-black/20 dark:border-white/20 hover:bg-[#0A66C2] hover:text-skin-inverted dark:hover:text-white group rounded-xl'>
                <BsLinkedin size={24} className='text-[#0A66C2] group-hover:text-white'/>
                Sign up with LinkedIn
              </button>
            </div>
            {/* breake */}
            <div className='relative'>
              <span className='w-full h-[1px] block bg-skin-inverted opacity-20'></span>
              <div className='text-sm text-skin-base flex justify-center'>
                <p className='bg-skin-surface px-3 absolute -top-2.5'> Or, Sign up with your email</p>
              </div>
            </div>
            {/* Form */}
            <form action="" className='space-y-4'>
              {/* Full name */}
              <div className='space-y-2'>
                <label htmlFor="fullname" className='text-skin-base font-normal'>Full Name</label>
                <input type="text" placeholder='Jhon Smith'/>
              </div>
              {/* Email */}
              <div className='space-y-2'>
                <label htmlFor="email" className='text-skin-base font-normal'>Email</label>
                <input type="text" placeholder='jhonsmith@email.com'/>
              </div>
              {/* Password  */}
              <div className='space-y-2 relative'>
                <label htmlFor="password" className='text-skin-base font-normal'>Password</label>
                <input type={passwordShown ? "text" : "password"} placeholder='At least 8 character' />
                <span onClick={() => setPasswordShown(!passwordShown)} className='absolute top-10 right-6 text-skin-muted text-2xl cursor-pointer'>
                  {passwordShown ? <PiEyeLight/> : <PiEyeSlashLight/>}
                </span>
              </div>
              {/* Form Submit Button */}
              <div className='pt-5 space-y-3'>
                  <button className='w-full h-14 font-medium bg-skin-primary rounded-lg'>Create an account</button>
                  <p className='text-sm text-skin-muted text-center'>
                    By joining, you agree to our 
                    <a href="/" className='text-skin-base font-medium underline'> Terms of Service </a> 
                    and 
                    <a href="/" className='text-skin-base font-medium underline'> Privacy Policy </a>
                  </p>
              </div>
            </form>
        </div>
      </main>
    </header>
  )
}
