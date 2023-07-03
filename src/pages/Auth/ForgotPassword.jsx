import React from 'react'
import { Promo } from './Promo'

export const ForgotPassword = () => {
  return (
    <header className='relative overflow-clip  h-screen py-10 sm:py-20'>
      {/* Background */}
      <div className='w-[528px] h-[528px] md:w-[828px] md:h-[828px] absolute right-56 -top-24 -z-10 bg-skin-primary dark:opacity-30 blur-[120px] rounded-full'></div>
      <div className='w-[528px] h-[528px] md:w-[828px] md:h-[828px] absolute -right-56 -top-10 -z-10 bg-skin-secondary dark:opacity-30  blur-[120px] rounded-full'></div>

      <main className='max-w-screen-xl mx-auto px-4 pt-16 flex justify-between'>
        <div className="hidden lg:block lg:w-5/12 space-y-10">
          <Promo/>
        </div>
        {/* Form For Sign Up */}
        <div className="w-full lg:w-5/12 bg-skin-surface px-4 py-6 sm:p-6 rounded-2xl space-y-8">
            <div>
              <h3 className='text-2xl font-semibold text-skin-base'>Reset password</h3>
              <p className='text-skin-muted pt-2'>Let’s send you a new password</p>
            </div>
            {/* Form */}
            <form action="" className='space-y-4'>
              {/* Email */}
              <div className='space-y-2'>
                <label htmlFor="email" className='text-skin-base font-normal'>What’s your email?</label>
                <input type="text" placeholder='jhonsmith@email.com'/>
              </div>
              
              {/* Form Submit Button */}
              <div className='pt-5 space-y-3'>
                  <button className='w-full h-14 font-medium bg-skin-primary rounded-lg'>Submit</button>
              </div>
            </form>
        </div>
      </main>
    </header>
  )
}
