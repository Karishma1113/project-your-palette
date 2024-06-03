import React from 'react';
import PropTypes from 'prop-types';

function CreateResults({ selectedColors }) {
    return (
        <div className="create-results">
            <h2 className="text-center py-3 m-0">Your Color Palette:</h2>
            <div className="color-palette color-selected-parent">
                {selectedColors.length > 0 ? (
                    selectedColors.map((color, index) => (
                        <div
                            key={index}
                            className="color-selected"
                            style={{ backgroundColor: color, height: '20px', width: '20px', display: 'inline-block' }}
                        ></div>
                    ))
                ) : (
                    <p className="text-center">No colors selected yet.</p>
                )}
            </div>
        </div>
    );
}

CreateResults.propTypes = {
    selectedColors: PropTypes.arrayOf(PropTypes.string)
};

CreateResults.defaultProps = {
    selectedColors: []
};

export default CreateResults;