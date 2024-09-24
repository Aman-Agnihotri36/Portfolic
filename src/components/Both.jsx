import React from 'react'
import Education from './Education'
import Skills from './Skills'

function Both() {
    return (
        <div className='flex gap-5 ml-3 flex-wrap text-white mt-12 sm:justify-around'>
            <Education />
            <Skills />
        </div>
    )
}

export default Both
