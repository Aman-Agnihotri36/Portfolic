import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from '../redux/counter';

function Changer() {
    const [activeDiv, setActiveDiv] = useState('about');
    const dispatch = useDispatch()
    const { counterVal } = useSelector(store => store.counter)

    const handleDivClick = (divName) => {
        setActiveDiv(divName);
        dispatch(counterActions.change(!counterVal))
    };

    useEffect(() => {
        dispatch(counterActions.change(false))
    }, [])

    return (
        <div className="sm:w-full w-[90%] mx-auto bg-gray-500 flex rounded-md mt-7 p-3 sm:p-5">
            {/* About Section */}
            <div
                onClick={() => handleDivClick('about')}
                className={`w-[50%] p-1 rounded-md text-white flex justify-center cursor-pointer 
                ${activeDiv === 'about' ? 'bg-pink-400' : null} 
                transition-all duration-500 ease-in-out`}
            >
                <PersonIcon />
                <p>About</p>
            </div>

            {/* Project Section */}
            <div
                onClick={() => handleDivClick('project')}
                className={`w-[50%] p-1 rounded-md text-white flex justify-center cursor-pointer 
                ${activeDiv === 'project' ? 'bg-pink-400' : null} 
                transition-all duration-500 ease-in-out`}
            >
                <CodeIcon />
                <p>Project</p>
            </div>
        </div>
    );
}

export default Changer;
