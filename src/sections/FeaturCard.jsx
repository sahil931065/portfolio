import React from 'react'
import { abilities } from '../constants'


const FeaturCard = () => {
  return (
    <div className='w-full mt-10 padding-x-lg '>
      <div className="mx-auto grid-3-cols">
        {abilities.map(({imgPath , title , desc})=>{
          return(
          <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4 '>
            <div className='size-14 flex items-center justify-center rounded-full'>
              <img src={imgPath} className='rounded-full bg-amber-50 p-2' alt={title} />
            </div>
            <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
            <p className='text-white-50 text-lg'>{desc}</p>
          </div>)
        })}
      </div>
    </div>
  )
}

export default FeaturCard;