import React from 'react'

function ProjectOne() {
    return (
        <div className='flex flex-wrap justify-between items-center px-5 '>
            <div className='text-white sm:w-[60%]'>
                <h1 className='sm:text-3xl text-2xl pt-4'>JOBPORTEL</h1>
                <p className='sm:mt-4 mt-1'>job portal  connects recruiters and students, allowing for efficient job application and management. In this project, recruiters can register their companies and post job openings, while students can apply for these jobs by submitting their resumes. The portal includes an advanced authentication and authorization system to ensure secure access for both recruiters and applicants. Additionally, recruiters have the ability to manage applications by accepting or rejecting students based on their resumes. The platform is built using React for the frontend, Node.js and Express for the backend, MongoDB as the database, and Redux Toolkit for state management, with thorough API testing conducted through Postman..</p>
                <p className='mt-5'>Click here - <a className='text-blue-500' href="https://jobportel.onrender.com">JobPortel</a></p>
            </div>

            <div className='sm:w-[30%]'>
                <img className='w-[90%] mx-auto' src="/images/Job.png" alt="" />
            </div>

        </div>
    )
}

export default ProjectOne
