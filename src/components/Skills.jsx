import React from 'react'

function Skills() {
    return (
        <div >
            <h1 class="text-2xl font-bold ">Skills</h1>
            <ul class="list-disc mt-3 ml-6 text-[1rem]">
                <li>Frontend</li>
                <ul class="list-disc ml-8">
                    <li>HTML, CSS, JavaScript, Tailwind</li>
                    <li>React js, Responsive Design</li>
                </ul>
                <li>Backend</li>
                <ul class="list-disc ml-8">
                    <li>Nodejs, Expressjs</li>
                    <li>MongoDB, JWT, Postman</li>
                </ul>
                <li>languages</li>
                <ul class="list-disc ml-8">
                    <li>Python, Cpp</li>
                    <li>DSA</li>
                </ul>

            </ul>
        </div>

    )
}

export default Skills
