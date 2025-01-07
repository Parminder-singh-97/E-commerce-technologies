import React from 'react'
import './Hero.css'
import { BiChevronRight } from 'react-icons/bi'
import Carousal from './CarousalItems/Carousal'

const Hero = () => {
  return (
    <>
    <div className="hero_container flex flex-wrap mt-7">
        <div className='w-[90%] m-auto flex flex-wrap'>
            <div className='hero_list-catagories  w-[30%]'>
                <ul className=' flex flex-col'>
                    <li>Woman’s Fashion <BiChevronRight className='text-2xl' /></li>
                    <li>Men’s Fashion <BiChevronRight className='text-2xl' /></li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>

            </div>
            <div className="hero_Carousal w-[70%]  pt-1 ">
                <Carousal/>
                
            </div>
        </div>


    </div>
      
    </>
  )
}

export default Hero
