import React, { useState } from 'react';

function ModeChanger() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle mode
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen flex items-center justify-center`}>
            <div className="p-8 rounded-md shadow-lg flex flex-col items-center">
                <h1 className="text-2xl mb-4">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
                <button
                    onClick={toggleMode}
                    className="px-6 py-2 rounded-full transition duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-700"
                >
                    Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
                </button>
            </div>
        </div>
    );
}

export default ModeChanger;
