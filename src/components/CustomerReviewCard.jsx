import React from 'react'
import { star } from '../assets/icons'


const CustomerReviewCard = ({customerName, imgURL, rating, feedback}) => {
  return (

    <>
        <div className='flex justify-center items-center flex-col gap-5'>
            <img src={imgURL} alt={customerName} width={80} height={80} className='rounded-full object-cover'/>
            <p className='text-lg font-montserrat text-center text-slate-gray'>{feedback}</p>
           <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img src={star} alt="rating" width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-center text-slate-gray'>({rating})</p>
           </div>
           <p className='text-3xl font-palanquin text-center font-bold mt-1'>{customerName}</p>
            
        </div>
    </>


  
  )
}

export default CustomerReviewCard