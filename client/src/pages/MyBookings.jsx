import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData)

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>

            {/* Page Title */}

            <Title
                title='My Bookings'
                subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks'
                align='left'
            />

            {/* Bookings Container */}

            <div className='max-w-6xl mt-8 w-full text-gray-800'>

                {/* Table Header */}

                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>

                    <div>
                        Hotels
                    </div>

                    <div>
                        Date & Timings
                    </div>

                    <div>
                        Payment
                    </div>

                </div>


                {/* Booking List */}

                {bookings.length > 0 ? (

                    bookings.map((booking) => (

                        <div
                            key={booking._id}
                            className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t gap-6 md:gap-0'
                        >

                            {/* ================= HOTEL DETAILS ================= */}

                            <div className='flex flex-col md:flex-row'>

                                {/* Hotel Image */}

                                <img
                                    src={booking.room.images[0]}
                                    alt='hotel-img'
                                    className='w-full md:w-44 h-48 md:h-32 rounded shadow object-cover'
                                />

                                {/* Hotel Information */}

                                <div className='flex flex-col gap-1.5 max-md:mt-3 md:ml-4'>

                                    <p className='font-playfair text-2xl'>

                                        {booking.hotel.name}

                                        <span className='font-inter text-sm ml-1'>
                                            ({booking.room.roomType})
                                        </span>

                                    </p>


                                    {/* Location */}

                                    <div className='flex items-center gap-1 text-sm text-gray-500'>

                                        <img
                                            src={assets.locationIcon}
                                            alt='location-icon'
                                            className='w-4 h-4'
                                        />

                                        <span>
                                            {booking.hotel.address}
                                        </span>

                                    </div>


                                    {/* Guests */}

                                    <div className='flex items-center gap-1 text-sm text-gray-500'>

                                        <img
                                            src={assets.guestsIcon}
                                            alt='guests-icon'
                                            className='w-4 h-4'
                                        />

                                        <span>
                                            {booking.guests}{' '}
                                            {booking.guests === 1
                                                ? 'Guest'
                                                : 'Guests'}
                                        </span>

                                    </div>


                                    {/* Total */}

                                    <p className='text-base font-medium mt-1'>
                                        Total: ${booking.totalPrice}
                                    </p>

                                </div>

                            </div>


                            {/* ================= DATE & TIMINGS ================= */}

                            <div className='flex flex-col justify-center gap-3'>

                                {/* Check In */}

                                <div>

                                    <p className='text-xs text-gray-400 uppercase'>
                                        Check-In
                                    </p>

                                    <p className='text-sm font-medium mt-1'>

                                        {new Date(
                                            booking.checkInDate
                                        ).toLocaleDateString('en-US', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}

                                    </p>

                                </div>


                                {/* Check Out */}

                                <div>

                                    <p className='text-xs text-gray-400 uppercase'>
                                        Check-Out
                                    </p>

                                    <p className='text-sm font-medium mt-1'>

                                        {new Date(
                                            booking.checkOutDate
                                        ).toLocaleDateString('en-US', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}

                                    </p>

                                </div>

                            </div>


                            {/* ================= PAYMENT ================= */}

                            <div className='flex flex-col justify-center gap-3'>

                                {booking.isPaid ? (

                                    // Paid

                                    <span className='w-fit px-3 py-1 rounded-full text-xs bg-green-100 text-green-600'>
                                        Paid
                                    </span>

                                ) : (

                                    // Unpaid

                                    <div className='flex flex-col items-start gap-2'>

                                        <span className='w-fit px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-600'>
                                            Unpaid
                                        </span>

                                        <button
                                            type='button'
                                            className='px-5 py-2 bg-primary hover:bg-primary-dull text-white text-sm rounded-md active:scale-95 transition-all cursor-pointer'
                                        >
                                            Pay Now
                                        </button>

                                    </div>

                                )}

                            </div>

                        </div>

                    ))

                ) : (

                    /* No Bookings */

                    <div className='py-20 text-center'>

                        <p className='text-gray-500 text-lg'>
                            No bookings found.
                        </p>

                    </div>

                )}

            </div>

        </div>
    )
}

export default MyBookings
