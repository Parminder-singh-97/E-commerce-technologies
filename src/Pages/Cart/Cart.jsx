import React from 'react'
import BreadCrumb from '../../Components/CustomComponents/BreadCrumb'
import CartProducts from '../../Components/Cart/CartProducts'
import CartButton from '../../Components/Cart/CartButton'
import CartPriceContainer from '../../Components/Cart/CartPriceContainer'

const Cart = () => {
  return (
    <>
        <BreadCrumb/>
        <CartProducts/>
        <CartButton/>
        <CartPriceContainer/>
       

      
    </>
  )
}

export default Cart
