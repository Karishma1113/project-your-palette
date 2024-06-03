import React from 'react';

function QuizResults(props) {
    const { results } = props;

    const season = results.season;

    const getSeasonImages = (season) => {
        const seasonImages = {
            winter: [
                '/img/Color Palette/Bright Winter.webp',
                '/img/Color Palette/Cool Winter.webp',
                '/img/Color Palette/Dark Winter.webp'
            ],
            spring: [
                '/img/Color Palette/Bright Spring.webp',
                '/img/Color Palette/Light Spring.webp',
                '/img/Color Palette/Warm Spring.webp'
            ],
            summer: [
                '/img/Color Palette/Light Summer.webp',
                '/img/Color Palette/Soft Summer.webp',
                '/img/Color Palette/Cool Summer.webp'
            ],
            autumn: [
                '/img/Color Palette/Soft Autumn.webp',
                '/img/Color Palette/Warm Autumn.webp',
                '/img/Color Palette/Dark Autumn.webp'
            ],
        };
        return seasonImages[season];
    };

    const seasonImages = getSeasonImages(season);

    return (
        <div className="quiz-results">
            <h2>Your Color Season: {season.charAt(0).toUpperCase() + season.slice(1)}</h2>
            <div className="season-images">
                {seasonImages.map((image, index) => (
                    <img key={index} src={image} alt={`${season} color palette`} />
                ))}
            </div>
        </div>
    );
}

export default QuizResults;
