import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

    const [dashboardData] = useState(dashboardDummyData)

    return (
        <div className='w-full min-h-[calc(100vh-80px)] p-4 md:p-6 lg:p-8 pb-20'>

            {/* ================= TITLE ================= */}
            <Title
                align='left'
                font='outfit'
                title='Dashboard'
                subTitle='Monitor your room listings, track bookings and analyze revenue - all in one place. Stay updated with real-time insights to ensure smooth operations.'
            />


            {/* ================= DASHBOARD CARDS ================= */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>

                {/* Total Booking */}
                <div className='bg-primary/5 border border-primary/10 rounded-xl p-5 flex items-center min-h-[110px]'>

                    <img
                        src={assets.totalBookingIcon}
                        alt='Total Booking'
                        className='w-10 h-10 object-contain max-sm:hidden'
                    />

                    <div className='flex flex-col sm:ml-4'>

                        <p className='text-sm text-gray-500 font-medium whitespace-nowrap'>
                            Total Booking
                        </p>

                        <p className='text-2xl font-semibold text-gray-800 mt-1'>
                            {dashboardData.totalBookings}
                        </p>

                    </div>

                </div>


                {/* Total Revenue */}
                <div className='bg-primary/5 border border-primary/10 rounded-xl p-5 flex items-center min-h-[110px]'>

                    <img
                        src={assets.totalRevenueIcon}
                        alt='Total Revenue'
                        className='w-10 h-10 object-contain max-sm:hidden'
                    />

                    <div className='flex flex-col sm:ml-4'>

                        <p className='text-sm text-gray-500 font-medium whitespace-nowrap'>
                            Total Revenue
                        </p>

                        <p className='text-2xl font-semibold text-gray-800 mt-1'>
                            ${dashboardData.totalRevenue}
                        </p>

                    </div>

                </div>

            </div>


            {/* ================= RECENT BOOKINGS ================= */}
            <div className='mt-12'>

                <h2 className='text-xl md:text-2xl text-blue-950/70 font-medium mb-5'>
                    Recent Bookings
                </h2>


                {/* Recent Booking Box */}
                <div className='w-full max-w-5xl border border-gray-300 rounded-xl bg-white overflow-hidden'>

                    {/* ONLY THIS AREA WILL SCROLL */}
                    <div className='max-h-[420px] overflow-y-auto overflow-x-auto'>

                        <table className='w-full min-w-[700px] text-left border-collapse'>

                            {/* Table Header */}
                            <thead className='bg-gray-50 sticky top-0 z-10'>

                                <tr>

                                    <th className='py-4 px-5 text-gray-800 font-semibold text-sm whitespace-nowrap'>
                                        User Name
                                    </th>

                                    <th className='py-4 px-5 text-gray-800 font-semibold text-sm whitespace-nowrap'>
                                        Room Name
                                    </th>

                                    <th className='py-4 px-5 text-gray-800 font-semibold text-sm text-center whitespace-nowrap'>
                                        Total Amount
                                    </th>

                                    <th className='py-4 px-5 text-gray-800 font-semibold text-sm text-center whitespace-nowrap'>
                                        Payment Status
                                    </th>

                                </tr>

                            </thead>


                            {/* Table Body */}
                            <tbody className='text-sm'>

                                {dashboardData.bookings.map((item, index) => (

                                    <tr
                                        key={index}
                                        className='hover:bg-gray-50 transition-colors'
                                    >

                                        {/* User */}
                                        <td className='py-4 px-5 text-gray-700 border-t border-gray-200 whitespace-nowrap'>
                                            {item.user.username}
                                        </td>


                                        {/* Room */}
                                        <td className='py-4 px-5 text-gray-700 border-t border-gray-200 whitespace-nowrap'>
                                            {item.room.roomType}
                                        </td>


                                        {/* Amount */}
                                        <td className='py-4 px-5 text-gray-700 border-t border-gray-200 text-center whitespace-nowrap'>
                                            ${item.totalPrice}
                                        </td>


                                        {/* Payment Status */}
                                        <td className='py-4 px-5 text-gray-700 border-t border-gray-200 text-center whitespace-nowrap'>

                                            <div className='flex items-center justify-center gap-2'>

                                                <span
                                                    className={`w-2 h-2 rounded-full ${
                                                        item.isPaid
                                                            ? 'bg-green-500'
                                                            : 'bg-amber-500'
                                                    }`}
                                                ></span>

                                                <span
                                                    className={`text-xs font-medium ${
                                                        item.isPaid
                                                            ? 'text-green-600'
                                                            : 'text-amber-600'
                                                    }`}
                                                >
                                                    {item.isPaid
                                                        ? 'Completed'
                                                        : 'Pending'}
                                                </span>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


            {/* Dashboard Bottom Space */}
            <div className='h-32'></div>

        </div>
    )
}

export default Dashboard
