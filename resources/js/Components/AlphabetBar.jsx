import React from 'react';

const AlphabetBar = ({ onFilterByLetter }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="p-2 alphabet-bar d-flex flex-column align-items-center">
            <button
                className="btn btn-link"
                onClick={() => onFilterByLetter('')}
            >
                All
            </button>
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    className="btn btn-link"
                    onClick={() => onFilterByLetter(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default AlphabetBar;
