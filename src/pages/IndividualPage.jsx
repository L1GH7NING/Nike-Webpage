import React from 'react'
import { useParams } from 'react-router-dom'
import { shoeInfo } from '../constants';
import Button from '../components/Button';

const IndividualPage = () => {
    const {id} = useParams();
    const shoe = shoeInfo.find((s) => s.id === id);
  return (
    <section className='w-full flex xl:flex-row flex-col justify-center gap-10 min-h-screen max-container max-xl:mb-64'>
      <div className='relative flex-1 flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={shoe.imgURL} alt="shoe collection" 
        width = {610}
        height={500}
        className='object-contain relative z-10'
        />
      </div>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
          <span className='relative z-10 pr-10'>
              {shoe.name}
          </span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-xl:max-w-full xl:max-w-[80%]'>
         {shoe.description}
        </p>
        <div className='flex justify-between items-center xl:w-[80%] w-full'>
          <p className='text-2xl font-palanquin font-bold'>{shoe.price}</p>
          <Button label = "Buy now"/>
        </div>
      </div>
    </section>
  )
}

export default IndividualPage
