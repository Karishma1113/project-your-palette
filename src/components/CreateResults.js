import React from 'react';

function CreateResults({ selectedColors }) {
    return (
        <div className="create-results">
            <h2>Your Color Palette:</h2>
            <div className="color-palette">
                {selectedColors.map((color, index) => (
                    <div
                        key={index}
                        className="color-option"
                        style={{ backgroundColor: color, width: '50px', height: '50px', margin: '5px', border: '1px solid black' }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default CreateResults;
