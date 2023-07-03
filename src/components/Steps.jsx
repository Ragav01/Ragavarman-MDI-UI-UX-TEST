import React from 'react'
import rigester from '../assets/register.svg'
import rigesterDark from '../assets/register-dark.svg'
import upload from '../assets/upload.svg'
import uploadDark from '../assets/upload-dark.svg'
import job from '../assets/jobs.svg'
import jobDark from '../assets/jobs-dark.svg'
export const Steps = () => {
  const steps = [
    {
      'imglight':rigester,
      'imgdark':rigesterDark,
      'title':'Register to hire up or login',
      'description':'Register your personal identity on this platform to access features.'
    },
    {
      'imglight':upload,
      'imgdark':uploadDark,
      'title':'Upload your latest resume',
      'description':'Complete your register and then upload your latest resume.'
    },
    {
      'imglight':job,
      'imgdark':jobDark,
      'title':'Find your matches jobs',
      'description':'Look for job vacancies and immediately get your love job.'
    }   
  ]
  return (
    <section className='space-y-10'>
        <h2 className='text-3xl md:text-6xl text-skin-base leading-tight font-semibold md:w-8/12'>Just these easy steps to land on your first job</h2>
        <div className="grid md:grid-cols-3 gap-5">
            {steps.map((item,key)=>{
              return (
                <div key={key} className='bg-skin-surface p-5 pb-8 space-y-10 rounded-3xl'>
                  <img src={item.imglight} className='dark:hidden h-[326] mx-auto' alt="" />
                  <img src={item.imgdark} className='hidden dark:block h-[326] mx-auto' alt="" />
                  <div className='space-y-3 text-center'>
                    <h4 className='text-2xl text-skin-base font-semibold tracking-tight'>{item.title}</h4>
                    <p className='text-skin-muted'>{item.description}</p>
                  </div>
                </div>
              )
            })}
            
            
        </div>
    </section>
  )
}
