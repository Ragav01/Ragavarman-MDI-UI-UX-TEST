import {GrCheckmark} from 'react-icons/gr'

export const Promo = () => {
    const stepsList= [
        {'title':'Register to hire up or login'},
        {'title':'Upload your latest resume'},
        {'title':'Find your matches jobs'}
      ]
  return (
    <>
        <div className='space-y-5'>
            <h3 className='text-5xl text-skin-base font-semibold'>Save time and effort with quick apply</h3>
            <p className='text-lg text-skin-base'>Register free & Start applying for thousands of <br /> Job interviews & Recruitment drives</p>
        </div>
        <h6 className='text-2xl font-semibold text-skin-base'>Find your job:</h6>
        <ul className='space-y-10'>
            {stepsList.map((item,key)=>{
                return(
                <li key={key} className='flex items-center gap-x-4'>
                    <GrCheckmark className='bg-skin-primary h-6 w-6 p-1.5 rounded-full'/>
                    <p className='text-lg font-semibold text-skin-base'>{item.title}</p>
                </li>
                )
            })}
        </ul>
    </>
  )
}
