import React from 'react'

const CustomSeniorCard = ({image,role,name}) => {
  return (
    
    <>
    <div className='bg-[#F5F5F5] h-[430px] px-5  w-full flex  '>
        <img src={image} alt="" className='w-full h-full object-contain object-bottom' />
    </div>
    <div className='Senior-cardBody p-4 flex flex-col justify-start items-start'>

    <div className=''>

        <h1 className='w-full text-3xl'>{name}</h1>
    </div>
    <div className='text-sm'>
        <p>{role}</p>
    </div>
    <div className='flex gap-4 mt-4'>
        <img src='../../../images/About-image/Icon-Twitter.svg' alt="" />
        <img src='../../..//images/About-image/icon-instagram.svg' alt="" />
        <img src='../../..//images/About-image/Icon-Linkedin.svg' alt="" />

    </div>

    </div>

      
    </>
  )
}

export default CustomSeniorCard
