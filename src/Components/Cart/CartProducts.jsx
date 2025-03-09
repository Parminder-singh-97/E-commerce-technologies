import React, { useState } from 'react'

const CartProducts = () => {
    let [quantity,setQuantity] = useState(0) 

    const quantityHandle = (e) => {
        setQuantity(e.target.value)
    }

   


  return (
    <>
    <div className='w-[80%] mx-auto bg-white shadow-md grid grid-cols-4 px-4 py-3 '>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Sub Total</div>

    </div>
    <div className='w-[80%] mx-auto my-7 bg-white shadow-md grid grid-cols-4 px-4 py-3 '>
        <div className=' flex gap-4 justify-start items-center'><img src="../../../images/BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png" alt="" className='w-[50px]' /> <span className='text-sm'>duffle-bag</span></div>
        <div>$650</div>
        <div><input type="number" min="1" value={quantity} onChange={quantityHandle}   max="3" inputMode="numeric"  className=' rounded-lg border-2 flex justify-center items-center p-2 w-14 ' name="quantity" id="quantity" /></div>
        <div>$650</div>

    </div>
    <div className='w-[80%] mx-auto my-7 bg-white shadow-md grid grid-cols-4 px-4 py-3 '>
        <div className=' flex gap-4 justify-start items-center'><img src="../../../images/BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png" alt="" className='w-[50px]' /> <span className='text-sm'>duffle-bag</span></div>
        <div>$650</div>
        <div><input type="number" min="1" value={quantity} onChange={quantityHandle}   max="3" inputMode="numeric"  className=' rounded-lg border-2 flex justify-center items-center p-2 w-14 ' name="quantity" id="quantity" /></div>
        <div>$650</div>

    </div>
    <div className='w-[80%] mx-auto my-7 bg-white shadow-md grid grid-cols-4 px-4 py-3 '>
        <div className=' flex gap-4 justify-start items-center'><img src="../../../images/BestSelling-img/Light-Gucci-Savoy-medium-duffle-bag.png" alt="" className='w-[50px]' /> <span className='text-sm'>duffle-bag</span></div>
        <div>$650</div>
        <div><input type="number" min="1" value={quantity} onChange={quantityHandle}   max="3" inputMode="numeric"  className=' rounded-lg border-2 flex justify-center items-center p-2 w-14 ' name="quantity" id="quantity" /></div>
        <div>$650</div>

    </div>
   
      
    </>
  )
}

export default CartProducts
