import React from 'react';

function QuizResults(props) {
    const { results } = props;

    const calculateSeason = (results) => {
        const seasonCounts = {
            winter: 0,
            spring: 0,
            summer: 0,
            autumn: 0,
        };

        Object.values(results).forEach(value => {
            if (seasonCounts.hasOwnProperty(value)) {
                seasonCounts[value]++;
            }
        });

        const maxSeason = Object.keys(seasonCounts).reduce((a, b) => seasonCounts[a] > seasonCounts[b] ? a : b);

        return maxSeason;
    };

    const season = calculateSeason(results);

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

    const renderSeasonImages = () => {
        return seasonImages.map((image, index) => (
            <img key={index} src={image} alt={`${season} color palette`} />
        ));
    };

    return (
        <div className="quiz-results">
            <h2>Your Color Season: {season.charAt(0).toUpperCase() + season.slice(1)}</h2>
            <div className="season-images">
                {renderSeasonImages()}
            </div>
        </div>
    );
}

export default QuizResults;
