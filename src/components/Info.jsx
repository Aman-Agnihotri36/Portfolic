import React from 'react'


function Info() {
    return (

        <>
            <div className='flex flex-wrap justify-between items-center mt-10 sm:mt-20 text-white'>
                <div className='sm:max-w-[60%] px-5'>
                    <div >
                        <h1 className='sm:text-5xl  text-3xl font-bold '>AMAN AGNIHOTRI</h1>
                        <p className='sm:text-2xl text-xl  mt-7 font-bold font-sans'>Undergrad at Sri Ram Institute of Technology</p>
                    </div>
                    <p className='  sm:mt-5 hidden sm:block'>Aman Agnihotri is a skilled web developer with a good understanding of both front-end and back-end technologies. He is proficient in using React for building interactive user interfaces and Express.js for server-side development. Aman is well-versed in tools like Redux for state management, MongoDB for databases, and Tailwind CSS for responsive design. His approach to web development focuses on creating dynamic, user-friendly applications, and he consistently strives to stay updated with the latest technologies in the field. With strong problem-solving skills and attention to detail, Aman brings efficiency and creativity to every project he undertakes, always aiming to deliver high-quality results. His passion for learning and continuous improvement drives him to explore new tools and techniques, making him a versatile and adaptable developer ready to take on new challenges.</p>

                    <p className='sm:hidden pt-5 '>Aman Agnihotri is a skilled web developer with a solid understanding of both front-end and back-end technologies. He is proficient in React, Express.js, Redux, MongoDB, and Tailwind CSS, focusing on building dynamic, user-friendly applications. Known for his problem-solving skills and attention to detail, Aman continuously learns new tools and techniques to deliver high-quality results, making him a versatile and adaptable developer.</p>
                </div>
                <div className='sm:max-w-[30%] '>
                    <img className='bg-transparent w-[80%] mx-auto h-[80%]' src="/images/one.png" alt="" />

                </div>
            </div>


        </>

    )
}

export default Info
