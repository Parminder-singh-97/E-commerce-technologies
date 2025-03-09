import React from 'react'

const CustomServiceCard = ({image,service,discr}) => {
  return (
    <>
    <div className='flex justify-center items-center mb-4'>
        <img src={image} alt="" />
    </div>
    <div className='flex justify-center items-center'>
        <h1 className='text-md font-bold'>{service}</h1>
    </div>
    <div className='flex justify-center items-center mt-1'>
        <p className='text-xs'>{discr}</p>
    </div>

      
    </>
  )
}

export default CustomServiceCard
