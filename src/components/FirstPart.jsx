import React from 'react'
import { Link } from 'react-router-dom'

function FirstPart() {
    return (
        <div className=' max-w-7xl sm:pt-36 px-5  pt-24 mx-auto'>
            <h1 className='text-white text-3xl font-bold'>Welcome!</h1>
            <p className='text-white sm:text-5xl text-4xl mt-7 font-bold'>This is Aman's portfolio</p>
            <a className='text-blue-700 relative top-7' href="https://www.linkedin.com/in/aman-agnihotri-a10292280">LinkedIn</a>
            <hr className='sm:w-full w-[100%] mx-auto mt-10' />
        </div>
    )
}

export default FirstPart
