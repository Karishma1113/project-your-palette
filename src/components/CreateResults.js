import React from 'react';

function CreateResults({ selectedColors }) {
    return (
        <div>
            <div className="palette">
                <div className="palette-colors">
                    {selectedColors.map((color, index) => (
                        <div key={index} className="palette-color" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CreateResults;