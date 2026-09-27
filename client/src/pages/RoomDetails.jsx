import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating'
import {
    assets,
    facilityIcons,
    roomsDummyData,
    roomCommonData
} from '../assets/assets'

const RoomDetails = () => {

    const { id } = useParams()

    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {

        const room = roomsDummyData.find(room => room._id === id)

        if (room) {
            setRoom(room)
            setMainImage(room.images[0])
        }

    }, [id])


    if (!room) {
        return (
            <div className='min-h-[70vh] flex items-center justify-center'>
                <p className='text-gray-500'>
                    Room not found
                </p>
            </div>
        )
    }


    return (

        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

            {/* ================= ROOM DETAILS ================= */}

            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>

                <h1 className='text-3xl md:text-4xl font-playfair'>

                    {room.hotel.name}

                    <span className='font-inter text-sm ml-2'>
                        ({room.roomType})
                    </span>

                </h1>

                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>
                    20% OFF
                </p>

            </div>


            {/* ================= ROOM RATING ================= */}

            <div className='flex items-center gap-1 mt-2'>

                <StarRating />

                <p className='ml-2'>
                    200+ reviews
                </p>

            </div>


            {/* ================= ROOM ADDRESS ================= */}

            <div className='flex items-center gap-1 text-gray-500 mt-2'>

                <img
                    src={assets.locationIcon}
                    alt='location-icon'
                    className='w-4 h-4'
                />

                <span>
                    {room.hotel.address}, {room.hotel.city}
                </span>

            </div>


            {/* ================= ROOM IMAGES ================= */}

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>

                {/* Main Image */}

                <div className='lg:w-1/2 w-full'>

                    <img
                        src={mainImage}
                        alt='Room Image'
                        className='w-full h-[400px] md:h-[500px] rounded-xl shadow-lg object-cover'
                    />

                </div>


                {/* Other Images */}

                <div className='lg:w-1/2 grid grid-cols-2 gap-4'>

                    {room?.images?.length > 1 && room.images.map((image, index) => (

                        <img
                            onClick={() => setMainImage(image)}
                            key={index}
                            src={image}
                            alt='Room Image'
                            className={`
                                w-full h-[190px] md:h-[240px]
                                rounded-xl shadow-md object-cover cursor-pointer
                                transition-all
                                ${
                                    mainImage === image
                                        ? 'outline-3 outline-orange-500'
                                        : ''
                                }
                            `}
                        />

                    ))}

                </div>

            </div>


            {/* ================= ROOM HIGHLIGHTS ================= */}

            <div className='flex flex-col md:flex-row md:justify-between mt-10 gap-6'>

                <div className='flex-1'>

                    <h1 className='text-3xl md:text-4xl font-playfair'>
                        Experience Luxury Like Never Before
                    </h1>


                    {/* Amenities */}

                    <div className='flex flex-wrap items-center gap-3 mt-5'>

                        {room.amenities.map((item, index) => (

                            <div
                                key={index}
                                className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'
                            >

                                <img
                                    src={facilityIcons[item]}
                                    alt={item}
                                    className='w-5 h-5'
                                />

                                <p className='text-xs'>
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Room Price */}

                <p className='text-2xl font-medium whitespace-nowrap'>
                    ${room.pricePerNight}/night
                </p>

            </div>


            {/* ================= CHECK-IN / CHECK-OUT FORM ================= */}

            <form
                className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl gap-6'
            >

                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>


                    {/* Check In */}

                    <div className='flex flex-col'>

                        <label
                            htmlFor='checkInDate'
                            className='font-medium'
                        >
                            Check-In
                        </label>

                        <input
                            type='date'
                            id='checkInDate'
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                            required
                        />

                    </div>


                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>


                    {/* Check Out */}

                    <div className='flex flex-col'>

                        <label
                            htmlFor='checkOutDate'
                            className='font-medium'
                        >
                            Check-Out
                        </label>

                        <input
                            type='date'
                            id='checkOutDate'
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                            required
                        />

                    </div>


                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>


                    {/* Guests */}

                    <div className='flex flex-col'>

                        <label
                            htmlFor='guests'
                            className='font-medium'
                        >
                            Guests
                        </label>

                        <input
                            type='number'
                            id='guests'
                            placeholder='Guests'
                            min='1'
                            max='10'
                            className='max-w-24 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                            required
                        />

                    </div>

                </div>


                {/* Check Availability Button */}

                <button
                    type='submit'
                    className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-10 py-3 md:py-4 text-base cursor-pointer'
                >
                    Check Availability
                </button>

            </form>


            {/* ================= COMMON SPECIFICATION ================= */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-14'>

                {roomCommonData.map((spec, index) => (

                    <div
                        key={index}
                        className='flex items-start gap-4'
                    >

                        <img
                            src={spec.icon}
                            alt={`${spec.title}-icon`}
                            className='w-7 h-7'
                        />

                        <div>

                            <p className='text-base font-medium'>
                                {spec.title}
                            </p>

                            <p className='text-gray-500 text-sm mt-1'>
                                {spec.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>


            {/* ================= ROOM DESCRIPTION ================= */}

            <div className='mt-14 border-t border-gray-200 pt-10'>

                <h2 className='text-2xl md:text-3xl font-playfair'>
                    About This Room
                </h2>

                <p className='text-gray-500 mt-5 leading-7 max-w-5xl'>

                    Guests will be allocated on the ground floor according
                    to availability. You get a comfortable two bedroom
                    apartment that has a true city feeling.

    
                    <br />

                    The price quoted is for two guests. At the guest section,
                    please mark the number of guests to get the exact price
                    for groups.

            
                    <br />

                    The property provides a comfortable environment with
                    modern facilities and everything required for a pleasant
                    and memorable stay.

                </p>

            </div>


            {/* ================= HOSTED BY ================= */}

            <div className='mt-14 border-t border-gray-200 pt-10'>

                <h2 className='text-2xl md:text-3xl font-playfair'>
                    Hosted By
                </h2>


                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-6'>

                    <div className='flex items-center gap-4'>

                        <img
                            src={room.hotel.owner.image}
                            alt='Host'
                            className='h-14 w-14 md:h-18 md:w-18 rounded-full object-cover'
                        />


                        <div>

                            <p className='text-lg font-medium'>
                                Hosted by {room.hotel.name}
                            </p>

                            <div className='flex items-center mt-1'>

                                <StarRating />

                                <p className='ml-2 text-sm text-gray-500'>
                                    200+ reviews
                                </p>

                            </div>

                        </div>

                    </div>


                    <button
                        type='button'
                        className='px-6 py-2.5 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'
                    >
                        Contact Now
                    </button>

                </div>

            </div>


            {/* ================= HOTEL INFORMATION ================= */}

            <div className='mt-14 border-t border-gray-200 pt-10'>

                <h2 className='text-2xl md:text-3xl font-playfair'>
                    Hotel Information
                </h2>


                <div className='mt-5 flex flex-col gap-3 text-gray-500'>

                    <p>
                        <span className='font-medium text-gray-800'>
                            Hotel:
                        </span>{' '}
                        {room.hotel.name}
                    </p>

                    <p>
                        <span className='font-medium text-gray-800'>
                            City:
                        </span>{' '}
                        {room.hotel.city}
                    </p>

                    <p>
                        <span className='font-medium text-gray-800'>
                            Address:
                        </span>{' '}
                        {room.hotel.address}
                    </p>

                    <p>
                        <span className='font-medium text-gray-800'>
                            Contact:
                        </span>{' '}
                        {room.hotel.contact}
                    </p>

                </div>

            </div>


            {/* ================= ROOM AMENITIES ================= */}

            <div className='mt-14 border-t border-gray-200 pt-10'>

                <h2 className='text-2xl md:text-3xl font-playfair'>
                    Room Amenities
                </h2>


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6'>

                    {room.amenities.map((item, index) => (

                        <div
                            key={index}
                            className='flex items-center gap-3 p-4 border border-gray-200 rounded-lg'
                        >

                            <img
                                src={facilityIcons[item]}
                                alt={`${item}-icon`}
                                className='w-6 h-6'
                            />

                            <p className='text-sm text-gray-600'>
                                {item}
                            </p>

                        </div>

                    ))}

                </div>

            </div>


            {/* ================= CANCELLATION POLICY ================= */}

            <div className='mt-14 border-t border-gray-200 pt-10'>

                <h2 className='text-2xl md:text-3xl font-playfair'>
                    Cancellation Policy
                </h2>

                <p className='text-gray-500 mt-5 leading-7 max-w-5xl'>

                    Guests can cancel their reservation according to the
                    property's cancellation policy. Please check the booking
                    details before confirming your reservation.

                </p>

            </div>


            {/* ================= RESERVE SECTION ================= */}

            <div className='mt-14 mb-10 bg-gray-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>

                <div>

                    <h2 className='text-2xl md:text-3xl font-playfair'>
                        Ready to book your stay?
                    </h2>

                    <p className='text-gray-500 mt-2'>
                        Reserve this room today and enjoy a comfortable stay.
                    </p>

                </div>


                <button
                    type='button'
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }
                    className='bg-primary hover:bg-primary-dull text-white px-8 py-3 rounded-md active:scale-95 transition-all cursor-pointer'
                >
                    Reserve Now
                </button>

            </div>

        </div>

    )
}

export default RoomDetails
