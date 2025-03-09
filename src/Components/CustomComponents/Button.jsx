import React from 'react'

const Button = ({content,action,size='100%'}) => {
  return (
    <>
    <button onClick={action} className={`bg-[#DB4444] w-[${size}] my-4 flex rounded-md text-nowrap  justify-center items-center text-sm py-[16px] text-white px-[122px]`}>{content}</button>
      
    </>
  )
}

export default Button
