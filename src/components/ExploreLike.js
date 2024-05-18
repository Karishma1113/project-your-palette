import React from 'react';

const ExploreLike = (props) => {
    const { liked, onClick } = props;

    let buttonText;
    let buttonClass;

    if (liked) {
        buttonText = 'Liked';
        buttonClass = 'btn btn-primary';
    } else {
        buttonText = 'Like';
        buttonClass = 'btn btn-outline-secondary';
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default ExploreLike;
