import React from 'react'
import { AiFillStar } from 'react-icons/ai';


import avatar1 from '../assets/avatar/avatar-2.jpg'
import avatar2 from '../assets/avatar/avatar-5.jpg'
import avatar3 from '../assets/avatar/avatar-6.jpg'
import avatar4 from '../assets/avatar/avatar-7.png'
import avatar5 from '../assets/avatar/avatar-8.png'
import avatar6 from '../assets/avatar/avatar-9.png'
import avatar7 from '../assets/avatar/avatar-10.png'
import avatar8 from '../assets/avatar/avatar-11.png'
import avatar9 from '../assets/avatar/avatar-1.jpg'
import { ButtonFill } from './Button';

export const Reviews = () => {
    const Reviews = [
        {'name':'John David','img': avatar1, 'job':'Sr. UX/UI Engineer', 'reting': 4.5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare.'},
        {'name':'Dianne Russell','img': avatar2, 'job':'Full-Stack Designer', 'reting': 5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum dolor sit amet, consectetur time adipiscing elit. and Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum'},
        {'name':'Courtney Henry','img': avatar3, 'job':'Software Engineer', 'reting': 4.5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare.'},
        {'name':'Arlene McCoy','img': avatar4, 'job':'Senior DevOps Engineer', 'reting': 4.5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum dolor sit amet, consectetur time adipiscing elit. and Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum'},
        {'name':'Theresa Webb','img': avatar5, 'job':'Graphic Designers', 'reting': 5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum dolor sit amet, consectetur time adipiscing elit. and Suspendisse varius '},
        {'name':'Darlene Robertson','img': avatar6, 'job':'Video Editors', 'reting': 4.5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum dolor sit amet, consectetur time adipiscing elit. and Suspendisse varius enim in eros elementum tristique ornare. '},
        {'name':'Michael Charles','img': avatar7, 'job':'Technical Lead', 'reting': 5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare. Suspendisse varius enim Suspendisse varius enim'},
        {'name':'Richard Robert','img': avatar8, 'job':'Salesforce Administrator', 'reting': 4.5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare. Lorem ipsum dolor sit amet, consectetur time adipiscing elit. and Suspendisse varius enim in eros elementum tristique ornare. '},
        {'name':'Jenny Wilson','img': avatar9, 'job':'Solution Architecht', 'reting': 5, 'review':'Lorem ipsum dolor sit amet, consectetur time adipiscing elit. Suspendisse varius enim in eros elementum tristique ornare.'},

    ]
  return (
    <section className='relative space-y-10'>
        <div className='lg:w-7/12 mx-auto mb-5'>
            <h2 className='text-3xl md:text-6xl text-center leading-tight text-skin-base font-semibold'>Hear what our beloved customer said</h2>
        </div>
        <div class="columns-1 md:columns-2 lg:columns-3 space-y-3">
            {Reviews.map((item,key)=>{
                return(
                    <div key={key} class="bg-skin-surface p-5 lg:p-8 break-inside-avoid space-y-5 rounded-2xl">
                        <div class="flex items-start gap-5"> 
                            <img class="h-12 w-12 rounded-full" src={item.img} alt=""></img>
                            <div>
                                <h5 class="text-xl text-skin-base font-semibold">{item.name}</h5>
                                <p class="text-sm text-skin-muted font-medium">{item.job}</p>
                            </div>
                        </div>
                        <p className='text-skin-muted'>{item.review}</p>
                        <div className='flex items-center gap-2'>
                            <AiFillStar size={22} color='#D5B300'/>
                            <p class="text-sm text-skin-base font-semibold">{item.reting}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='w-full h-96 absolute bottom-0 left-0 bg-gradient-to-t from-skin-body from-30%'></div>
        <div className="flex justify-center relative z-10">
            <ButtonFill title='View all Reviews'/>
        </div>
    </section>
  )
}
