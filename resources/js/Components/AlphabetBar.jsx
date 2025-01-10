import React from 'react';

const AlphabetBar = ({ onFilterByLetter }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="flex justify-center p-4 space-x-2 bg-gray-200 rounded-md shadow-sm">
            {/* "All" Button */}
            <button
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-blue-100"
                onClick={() => onFilterByLetter('')}
            >
                All
            </button>
            {/* Alphabet Buttons */}
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-blue-100"
                    onClick={() => onFilterByLetter(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default AlphabetBar;
