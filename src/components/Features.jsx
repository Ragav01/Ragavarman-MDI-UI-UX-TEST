import React from 'react'

import videoIcon from '../assets/icons/profile-2user.svg'
import notificationIcon from '../assets/icons/notification-bing.svg'
import mailIcon from '../assets/icons/message-notif.svg'

import videoScreen from '../assets/video.webp'
import notificationScreen from '../assets/notification.webp'
import mailScreen from '../assets/mail.webp'

import { ButtonOutline } from './Button';


export const Features = () => {
  return (
    <section className='space-y-16'>
        <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-10'>
            <h2 className='flex-1 text-3xl md:text-6xl leading-tight text-skin-base font-semibold'>What we offer you as  job platform</h2>
            <p className='flex-1 text-base md:text-lg text-skin-muted lg:pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum dolor sit amet, consectetur elit. Suspendisse varius enim in eros  Lorem ipsum dolor sit amet, consectetur adipiscing el</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            {/* Online Interview */}
            <div className='col-span-2 sm:col-span-1 lg:col-span-2 relative lg:h-[500px] overflow-hidden bg-skin-surface rounded-3xl space-y-5 p-5 lg:p-16'>
                <img src={videoScreen} className='w-[700px] lg:absolute -right-20 rounded-2xl' alt="..." />
                <div className='lg:w-5/12 space-y-4 lg:space-y-8'>
                    <div className='flex items-center gap-4'>
                        <div className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] flex items-center justify-center bg-skin-primary rounded-lg lg:rounded-2xl'>
                            <img src={videoIcon} className='h-[20px] lg:h-[30px]' alt="..."></img>
                        </div>
                        <h4 className='text-xl lg:text-3xl text-skin-base font-semibold '>Online Interview</h4>
                    </div>
                    <div className='lg:space-y-24'>
                        <p className='text-base md:text-lg text-skin-muted'>You will target the unanimity with a clear divison and target with a very clear set time You will target the unanimity with a clear divison and target </p>
                        <div className='hidden lg:block'>
                        <ButtonOutline title='Get started for free' icon={true}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Instant notification */}
            <div className='col-span-2 sm:col-span-1 lg:col-span-2 lg:flex flex-row-reverse relative lg:h-[500px] overflow-hidden bg-skin-surface rounded-3xl space-y-5 p-5 lg:p-16'>
                <img src={notificationScreen} className='w-[700px] lg:absolute -left-28 rounded-2xl' alt="..." />
                <div className='lg:w-5/12 space-y-4 lg:space-y-8'>
                    <div className='flex items-center gap-4'>
                        <div className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] flex items-center justify-center bg-skin-primary rounded-lg lg:rounded-2xl'>
                            <img src={notificationIcon} className='h-[20px] lg:h-[30px]' alt="..."></img>
                        </div>
                        <h4 className='text-xl lg:text-3xl text-skin-base font-semibold '>Instant notification</h4>
                    </div>
                    <div className='lg:space-y-24'>
                        <p className='text-base md:text-lg text-skin-muted'>You will target the unanimity with a clear divison and target with a very clear set time You will target the unanimity with a clear divison and target </p>
                        <div className='hidden lg:block'>
                        <ButtonOutline title='Get started for free' icon={true}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Email box to communicate */}
            <div className='col-span-2 sm:flex flex-row justify-between items-center lg:block relative lg:h-[500px] overflow-hidden bg-skin-surface rounded-3xl space-y-5 p-5 lg:p-16'>
                <img src={mailScreen} className='sm:w-[400px] lg:w-[900px] lg:absolute -right-[320px] rounded-2xl' alt="..." />
                <div className='sm:w-5/12 space-y-4 lg:space-y-8'>
                    <div className='flex items-center gap-4'>
                        <div className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] flex items-center justify-center bg-skin-primary rounded-lg lg:rounded-2xl'>
                            <img src={mailIcon} className='h-[20px] lg:h-[30px]' alt="..."></img>
                        </div>
                        <h4 className='text-xl lg:text-3xl text-skin-base font-semibold '>Email box to communicate</h4>
                    </div>
                    <div className='lg:space-y-24'>
                        <p className='text-base md:text-lg text-skin-muted'>You will target the unanimity with a clear divison and target with a very clear set time You will target the unanimity with a clear divison and target </p>
                        <div className='hidden lg:block'>
                        <ButtonOutline title='Get started for free' icon={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
