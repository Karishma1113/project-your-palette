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

    return (
        <h1>Test</h1>
        // <div className="results">
        //     <h2>Your Color Season: {season.charAt(0).toUpperCase() + season.slice(1)}</h2>
        //     {/* Display color season here */}
        // </div>
    );
}

export default QuizResults;
