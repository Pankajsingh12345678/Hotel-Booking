import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeaturedDestination = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>

            {roomsDummyData.slice(0,4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedDestination