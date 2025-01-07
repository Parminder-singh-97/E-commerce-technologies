import React from 'react'

const CatagoryBanner = () => {
  return (
    <>
   <div className='Banner m-7  bg-black text-white md:w-[90%] w-[100%] p-10 min-h-[50vh]'>
      
      <div className='flex justify-center md:flex-row flex-col'>

        <div className='flex justify-center flex-col items-start gap-5 px-5'>
            <p className='text-green-500'>Categories</p>
            <h1 className='text-3xl font-bold'>Enhance Your Music Experience</h1>
            <div className='flex gap-2 justify-center items-center flex-nowrap  '>

           <div className='p-2 font-extrabold text-[10px] bg-white flex justify-center items-center flex-col rounded-full text-black'>23 <span className='leading-3'>Hours</span></div>
           <div className='p-2 font-extrabold text-[10px] bg-white flex justify-center items-center flex-col rounded-full text-black'>23 <span className='leading-3'>Days</span></div>
           <div className='p-2 font-extrabold text-[10px] bg-white flex justify-center items-center flex-col rounded-full text-black'>23 <span className='leading-3'>Minute</span></div>
           <div className='p-2 font-extrabold text-[10px] bg-white flex justify-center items-center flex-col rounded-full text-black'>23 <span className='leading-3'>Second</span></div>
            </div>
            <button className='bg-green-500 text-white py-2 px-4 rounded-md'>Shop Now</button>
        </div>
        <div className=''>
           

            <img className='' src='../../../../images/CatagoryBanner/jblSpeaker.webp' alt='jblSpeaker' />
            

        </div>
      </div>
    
   </div>
      
    </>
  )
}

export default CatagoryBanner
