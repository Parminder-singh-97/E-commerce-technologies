import React from 'react'
import CustomServiceCard from './CustomServiceCard'

const OurServices = () => {
  return (
    <>
   <section className="OurServices my-36">
    <div className='w-full '>
      <div className="w-[80%] mx-auto gap-20 flex justify-center items-center flex-wrap">

        <div className='Services-card w-[249px] h-[161px] '>

          <CustomServiceCard image='../../../images/About-image/delivery.png' service='FREE AND FAST DELIVERY' discr='Free delivery for all orders over $140'/>


        </div>
        <div className='Services-card w-[249px] h-[161px] '>

          <CustomServiceCard image='../../../images/About-image/Cusomer-service.png' service='24/7 CUSTOMER SERVICE' discr='Friendly 24/7 customer support'/>


        </div>
        <div className='Services-card w-[249px] h-[161px] '>

          <CustomServiceCard image='../../../images/About-image/delivery.png' service='MONEY BACK GUARANTEE' discr='We reurn money within 30 days'/>


        </div>



      </div>



    </div>


   </section>
      
    </>
  )
}

export default OurServices
