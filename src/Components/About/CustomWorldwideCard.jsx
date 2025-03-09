import React from 'react'

const CustomWorldwideCard = ({image,count,discr}) => {
  return (
    <>
    <div className='w-[270px] h-[230px] border border-black cursor-pointer hover:border-none transition-all duration-700 hover:scale-[1.03] hover:bg-[#DB4444] hover:text-white rounded-md'>
        <div className='flex justify-center items-center  p-6'>
            <img src={image} alt="" className='' />
        </div>
        <div className='text-center w-full'>
            <h1 className='text-4xl font-extrabold'>{count}</h1>
        </div>
        <div className='text-md flex items-center justify-center py-3'>
            <p>{discr}</p>
        </div>


    </div>
      
    </>
  )
}

export default CustomWorldwideCard
