import React from 'react';

function CreateResults({ selectedColors }) {
    return (
        <div className="create-results">
            <h2 className="text-center py-3 m-0">Your Color Palette:</h2>
            <div className="color-palette color-selected-parent">
                {selectedColors.map((color, index) => (
                    <div
                        key={index}
                        className="color-selected"
                        style={{ backgroundColor: color}}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default CreateResults;
