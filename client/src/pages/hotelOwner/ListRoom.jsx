import React, { useState } from 'react'
import Title from '../../components/Title'

const ListRoom = () => {

    const [rooms, setRooms] = useState([
        {
            id: 1,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 120,
            isAvailable: true
        },
        {
            id: 2,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 150,
            isAvailable: true
        },
        {
            id: 3,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 180,
            isAvailable: false
        },
        {
            id: 4,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 200,
            isAvailable: true
        },
        {
            id: 5,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 220,
            isAvailable: true
        },
        {
            id: 6,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 250,
            isAvailable: false
        },
        {
            id: 7,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 270,
            isAvailable: true
        },
        {
            id: 8,
            roomName: 'Double Bed',
            facilities: [
                'Room Service',
                'Mountain View',
                'Pool Access'
            ],
            price: 300,
            isAvailable: true
        }
    ])


    // ================= TOGGLE STATUS =================

    const handleStatusChange = (id) => {

        setRooms((prevRooms) =>
            prevRooms.map((room) =>
                room.id === id
                    ? {
                        ...room,
                        isAvailable: !room.isAvailable
                    }
                    : room
            )
        )

    }


    return (

        <div className='w-full min-h-screen bg-gray-50'>

            {/* ================= TITLE ================= */}

            <Title
                align='left'
                font='outfit'
                title='Room Listings'
                subTitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.'
            />


            {/* ================= ALL ROOMS ================= */}

            <div className='mt-8'>

                <div className='mb-5'>

                    <h2 className='text-xl text-blue-950/70 font-medium'>
                        All Rooms
                    </h2>

                </div>


                {/* ================= TABLE ================= */}

                <div className='w-full border border-gray-300 rounded-lg bg-white overflow-hidden'>

                    {/* ================= SCROLL CONTAINER ================= */}

                    <div className='max-h-[330px] overflow-y-auto overflow-x-auto'>

                        <table className='w-full min-w-[800px] text-left'>

                            {/* ================= TABLE HEADER ================= */}

                            <thead className='bg-gray-50 sticky top-0 z-10'>

                                <tr>

                                    <th className='py-4 px-5 text-sm text-gray-800 font-medium'>
                                        Room Name
                                    </th>

                                    <th className='py-4 px-5 text-sm text-gray-800 font-medium'>
                                        Facility
                                    </th>

                                    <th className='py-4 px-5 text-sm text-gray-800 font-medium'>
                                        Price / Night
                                    </th>

                                    <th className='py-4 px-5 text-sm text-gray-800 font-medium text-center'>
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            {/* ================= TABLE BODY ================= */}

                            <tbody className='text-sm'>

                                {rooms.map((room) => (

                                    <tr
                                        key={room.id}
                                        className='border-t border-gray-200 hover:bg-gray-50 transition'
                                    >

                                        {/* ================= ROOM NAME ================= */}

                                        <td className='py-4 px-5'>

                                            <span className='font-medium text-gray-800'>
                                                {room.roomName}
                                            </span>

                                        </td>


                                        {/* ================= FACILITY ================= */}

                                        <td className='py-4 px-5'>

                                            <div className='flex flex-wrap gap-2'>

                                                {room.facilities.map(
                                                    (facility) => (

                                                        <span
                                                            key={facility}
                                                            className='px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs whitespace-nowrap'
                                                        >
                                                            {facility}
                                                        </span>

                                                    )
                                                )}

                                            </div>

                                        </td>


                                        {/* ================= PRICE ================= */}

                                        <td className='py-4 px-5'>

                                            <span className='font-medium text-gray-800'>
                                                ${room.price}
                                            </span>

                                            <span className='text-gray-400 text-xs ml-1'>
                                                / night
                                            </span>

                                        </td>


                                        {/* ================= ACTION ================= */}

                                        <td className='py-4 px-5'>

                                            <div className='flex items-center justify-center gap-3'>

                                                {/* Toggle */}

                                                <button
                                                    type='button'
                                                    onClick={() =>
                                                        handleStatusChange(
                                                            room.id
                                                        )
                                                    }
                                                    className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ${
                                                        room.isAvailable
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-300'
                                                    }`}
                                                >

                                                    <span
                                                        className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${
                                                            room.isAvailable
                                                                ? 'translate-x-6'
                                                                : 'translate-x-1'
                                                        }`}
                                                    />

                                                </button>


                                                {/* Status */}

                                                <span
                                                    className={`text-xs font-medium whitespace-nowrap ${
                                                        room.isAvailable
                                                            ? 'text-green-600'
                                                            : 'text-gray-500'
                                                    }`}
                                                >
                                                    {room.isAvailable
                                                        ? 'Available'
                                                        : 'Unavailable'
                                                    }
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

        </div>
    )
}

export default ListRoom
