import React from 'react'
import CustomWorldwideCard from './CustomWorldwideCard'

const OurWorldWide = () => {
  return (
    <>
    <section className='WorldWide'>
      <div className='w-[80%] mx-auto '>

        <div className='Worldwide-card flex flex-wrap justify-center items-center gap-4 w-full my-20'>

          <CustomWorldwideCard image={"../../../images/About-image/Home.png"} count={"10.5k"} discr={"Sallers active our site"}/>
          <CustomWorldwideCard image={"../../../images/About-image/MonthSale.webp"} count={"33k"} discr={"Mopnthly Produduct Sale"}/>
          <CustomWorldwideCard image={"../../../images/About-image/CustomerActive.png"} count={"45.5k"} discr={"Customer active in our site"}/>
          <CustomWorldwideCard image={"../../../images/About-image/AnnualGrowth.png"} count={"25k"} discr={"Anual gross sale in our site"}/>

        </div>



      </div>


    </section>
      
    </>
  )
}

export default OurWorldWide
