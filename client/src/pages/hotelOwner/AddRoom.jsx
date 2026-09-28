import React, { useState } from 'react'

const AddRoom = () => {

    const [roomType, setRoomType] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])
    const [imageError, setImageError] = useState('')

    const [amenities, setAmenities] = useState({
        wifi: false,
        ac: false,
        tv: false,
        breakfast: false,
        parking: false,
    })

    const handleAmenityChange = (name) => {
        setAmenities({
            ...amenities,
            [name]: !amenities[name],
        })
    }

    // ================= IMAGE UPLOAD =================
    const handleImageChange = (e) => {

        const selectedImages = Array.from(e.target.files)

        setImageError('')

        // Maximum 4 images
        if (selectedImages.length > 4) {
            setImageError('You can upload maximum 4 images.')
            e.target.value = ''
            return
        }

        setImages(selectedImages)
    }

    // ================= REMOVE IMAGE =================
    const removeImage = (index) => {

        const updatedImages = images.filter((_, i) => i !== index)

        setImages(updatedImages)
        setImageError('')
    }

    // ================= SUBMIT =================
    const handleSubmit = (e) => {

        e.preventDefault()

        if (images.length === 0) {
            setImageError('Please upload at least one room image.')
            return
        }

        console.log({
            roomType,
            price,
            description,
            amenities,
            images,
        })
    }

    // ================= CLEAR =================
    const handleClear = () => {

        setRoomType('')
        setPrice('')
        setDescription('')
        setImages([])
        setImageError('')

        setAmenities({
            wifi: false,
            ac: false,
            tv: false,
            breakfast: false,
            parking: false,
        })
    }

    return (
        <div className='w-full min-h-screen bg-gray-50 p-5 md:p-8'>

            {/* ================= PAGE HEADING ================= */}
            <div className='mb-8'>

                <h1 className='text-3xl font-semibold text-gray-800'>
                    Add Room
                </h1>

                <p className='text-gray-500 mt-2'>
                    Fill in the details carefully and accurately with room details,
                    pricing, and amenities to enhance the user booking experience.
                </p>

            </div>


            {/* ================= MAIN FORM ================= */}
            <form
                onSubmit={handleSubmit}
                className='w-full max-w-5xl bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm'
            >

                {/* ================= ROOM INFORMATION ================= */}
                <div className='mb-8'>

                    <h2 className='text-xl font-semibold text-gray-800 mb-5'>
                        Room Information
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                        {/* Room Type */}
                        <div>

                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Room Type
                            </label>

                            <select
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                required
                                className='w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-indigo-500'
                            >

                                <option value=''>
                                    Select Room Type
                                </option>

                                <option value='Single Room'>
                                    Single Room
                                </option>

                                <option value='Double Room'>
                                    Double Room
                                </option>

                                <option value='Deluxe Room'>
                                    Deluxe Room
                                </option>

                                <option value='Suite Room'>
                                    Suite Room
                                </option>

                                <option value='Family Room'>
                                    Family Room
                                </option>

                            </select>

                        </div>


                        {/* Price */}
                        <div>

                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Price Per Night
                            </label>

                            <input
                                type='number'
                                min='0'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Enter price'
                                required
                                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500'
                            />

                        </div>

                    </div>

                </div>


                {/* ================= DESCRIPTION ================= */}
                <div className='mb-8'>

                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Room Description
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter room description'
                        rows={5}
                        required
                        className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-indigo-500'
                    />

                </div>


                {/* ================= AMENITIES ================= */}
                <div className='mb-8'>

                    <h2 className='text-xl font-semibold text-gray-800 mb-5'>
                        Amenities
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                        {/* WiFi */}
                        <label className='flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50'>
                            <input
                                type='checkbox'
                                checked={amenities.wifi}
                                onChange={() => handleAmenityChange('wifi')}
                                className='w-4 h-4'
                            />

                            <span className='text-gray-700'>
                                Free WiFi
                            </span>
                        </label>


                        {/* AC */}
                        <label className='flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50'>
                            <input
                                type='checkbox'
                                checked={amenities.ac}
                                onChange={() => handleAmenityChange('ac')}
                                className='w-4 h-4'
                            />

                            <span className='text-gray-700'>
                                Air Conditioning
                            </span>
                        </label>


                        {/* TV */}
                        <label className='flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50'>
                            <input
                                type='checkbox'
                                checked={amenities.tv}
                                onChange={() => handleAmenityChange('tv')}
                                className='w-4 h-4'
                            />

                            <span className='text-gray-700'>
                                Television
                            </span>
                        </label>


                        {/* Breakfast */}
                        <label className='flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50'>
                            <input
                                type='checkbox'
                                checked={amenities.breakfast}
                                onChange={() => handleAmenityChange('breakfast')}
                                className='w-4 h-4'
                            />

                            <span className='text-gray-700'>
                                Breakfast
                            </span>
                        </label>


                        {/* Parking */}
                        <label className='flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50'>
                            <input
                                type='checkbox'
                                checked={amenities.parking}
                                onChange={() => handleAmenityChange('parking')}
                                className='w-4 h-4'
                            />

                            <span className='text-gray-700'>
                                Free Parking
                            </span>
                        </label>

                    </div>

                </div>


                {/* ================= ROOM IMAGES ================= */}
                <div className='mb-8'>

                    <div className='flex items-center justify-between mb-5'>

                        <h2 className='text-xl font-semibold text-gray-800'>
                            Room Images
                        </h2>

                        <span className='text-sm text-gray-500'>
                            {images.length}/4 images
                        </span>

                    </div>


                    {/* Upload Box */}
                    <label
                        htmlFor='roomImages'
                        className={`block w-full border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${
                            images.length >= 4
                                ? 'border-gray-200 bg-gray-100 cursor-not-allowed'
                                : 'border-gray-300 hover:bg-gray-50'
                        }`}
                    >

                        <div className='text-4xl text-gray-400 mb-3'>
                            +
                        </div>

                        <p className='text-gray-700 font-medium'>
                            Upload Room Images
                        </p>

                        <p className='text-sm text-gray-400 mt-1'>
                            Select up to 4 images
                        </p>

                        <p className='text-xs text-gray-400 mt-1'>
                            PNG, JPG or JPEG
                        </p>

                        <input
                            id='roomImages'
                            type='file'
                            multiple
                            accept='image/png,image/jpeg,image/jpg'
                            onChange={handleImageChange}
                            disabled={images.length >= 4}
                            className='hidden'
                        />

                    </label>


                    {/* Error */}
                    {imageError && (
                        <p className='text-red-500 text-sm mt-3'>
                            {imageError}
                        </p>
                    )}


                    {/* ================= IMAGE PREVIEW ================= */}
                    {images.length > 0 && (

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5'>

                            {images.map((image, index) => (

                                <div
                                    key={index}
                                    className='relative h-32 rounded-lg overflow-hidden border border-gray-200 group'
                                >

                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Room ${index + 1}`}
                                        className='w-full h-full object-cover'
                                    />


                                    {/* Remove Button */}
                                    <button
                                        type='button'
                                        onClick={() => removeImage(index)}
                                        className='absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white text-sm flex items-center justify-center opacity-90 hover:bg-red-600'
                                    >
                                        ×
                                    </button>

                                </div>

                            ))}

                        </div>

                    )}

                </div>


                {/* ================= BUTTONS ================= */}
                <div className='flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-200 pt-6'>

                    <button
                        type='button'
                        onClick={handleClear}
                        className='px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50'
                    >
                        Clear
                    </button>


                    <button
                        type='submit'
                        className='px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition'
                    >
                        Add Room
                    </button>

                </div>

            </form>

        </div>
    )
}

export default AddRoom
