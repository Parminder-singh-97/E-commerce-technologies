import React from 'react'
import Card from '../CustomComponents/Card'

const WishListItems = () => {
  return (
    <>
    <div className=" container flex justify-between gap-4 my-5 mx-auto items-center w-[70%]">

   
    {[1,2,3,4,].map((item,id)=>{

        return <Card image='../../../images/BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png' key={id} />
    })}
 


    </div>
      
    </>
  )
}

export default WishListItems
