import React from 'react'
import {offer} from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" 
          width={773} height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className='text-coral-red'> Special </span>  Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Step into style and savings with our exclusive shoe deals! Enjoy up to 30% off on a wide range of footwear, from trendy sneakers to elegant formal wear. Whether you need shoes for a night out, daily commute, or workout, we've got you covered. Don’t miss out—refresh your collection with top-quality shoes at incredible prices today!
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Hurry, these offers won't last forever! Shop now to take advantage of our special discounts and find your perfect pair before they're gone.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label = "Shop now" iconURL={arrowRight}/>
          <Button label = "Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
