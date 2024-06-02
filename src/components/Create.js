import React, { useState } from 'react';
import PageHeader from './Header';
import PageFooter from './Footer';
import CreateResults from './CreateResults';


function Create(props) {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState('');
    const [selectedWarmth, setSelectedWarmth] = useState('');
    const [showPalette, setShowPalette] = useState(false);

    const handleColorSelection = (color) => {
        if (selectedColors.length < 6) {
            setSelectedColors(prevColors => [...prevColors, color]);
        }
    };

    const handleRevealPalette = () => {
        setShowPalette(true);
    };

    const colorOptions = [
        { season: 'Spring', warmth: 'Light', colors: ['yellow', 'orange', 'lightgreen', 'pink', 'lightblue', 'skyblue', 'gold', 'green', 'orange-red'] },
        { season: 'Spring', warmth: 'Neutral', colors: ['yellow', 'orange', 'lightblue', 'lightgreen', 'gold', 'pink', 'green', 'skyblue', 'orange-red'] },
        { season: 'Spring', warmth: 'Deep', colors: ['gold', 'pink', 'orange', 'green', 'lightgreen', 'yellow', 'orange-red', 'skyblue', 'lightblue'] },
        { season: 'Summer', warmth: 'Light', colors: ['orange', 'gold', 'pink', 'orange-red', 'lightgreen', 'yellow', 'skyblue', 'lightblue', 'green'] },
        { season: 'Summer', warmth: 'Neutral', colors: ['orange', 'gold', 'lightgreen', 'pink', 'yellow', 'skyblue', 'green', 'orange-red', 'lightblue'] },
        { season: 'Summer', warmth: 'Deep', colors: ['pink', 'gold', 'orange', 'lightgreen', 'yellow', 'orange-red', 'skyblue', 'lightblue', 'green'] },
        { season: 'Autumn', warmth: 'Light', colors: ['orange-red', 'gold', 'pink', 'orange', 'skyblue', 'lightblue', 'yellow', 'lightgreen', 'green'] },
        { season: 'Autumn', warmth: 'Neutral', colors: ['orange-red', 'gold', 'skyblue', 'pink', 'orange', 'yellow', 'lightgreen', 'lightblue', 'green'] },
        { season: 'Autumn', warmth: 'Deep', colors: ['orange-red', 'gold', 'orange', 'pink', 'lightgreen', 'yellow', 'skyblue', 'lightblue', 'green'] },
        { season: 'Winter', warmth: 'Light', colors: ['skyblue', 'pink', 'orange-red', 'orange', 'gold', 'lightgreen', 'yellow', 'lightblue', 'green'] },
        { season: 'Winter', warmth: 'Neutral', colors: ['skyblue', 'pink', 'orange', 'gold', 'lightgreen', 'yellow', 'green', 'orange-red', 'lightblue'] },
        { season: 'Winter', warmth: 'Deep', colors: ['skyblue', 'pink', 'orange', 'gold', 'lightgreen', 'yellow', 'green', 'orange-red', 'lightblue'] }
    ];

    const filteredColors = colorOptions.find(option => option.season === selectedSeason && option.warmth === selectedWarmth)?.colors || [];

    return (
        <div>
            <PageHeader />
            <main className="page">
                <div className="create-heading">
                    <h1>Create Your Own Palette</h1>
                </div>
                <section>
                    <div className="create-container">
                        {/* Choose Season */}
                        <div className="selections">
                            <div className="row">
                                <h2>Choose Season:</h2>
                                <div className="season-options">
                                    <button className={`btn btn-success season-option ${selectedSeason === 'Spring' ? 'selected' : ''}`} onClick={() => setSelectedSeason('Spring')}>Spring</button>
                                    <button className={`btn btn-info season-option ${selectedSeason === 'Summer' ? 'selected' : ''}`} onClick={() => setSelectedSeason('Summer')}>Summer</button>
                                    <button className={`btn btn-warning season-option ${selectedSeason === 'Autumn' ? 'selected' : ''}`} onClick={() => setSelectedSeason('Autumn')}>Autumn</button>
                                    <button className={`btn btn-primary season-option ${selectedSeason === 'Winter' ? 'selected' : ''}`} onClick={() => setSelectedSeason('Winter')}>Winter</button>
                                </div>
                            </div>
                        </div>
                        {/* Choose Warmth */}
                        <div className="selections">
                            <div className="row">
                                <h2>Choose Warmth:</h2>
                                <div className="warmth-options">
                                    <button className={`btn btn-light warmth-option ${selectedWarmth === 'Light' ? 'selected' : ''}`} onClick={() => setSelectedWarmth('Light')}>Light</button>
                                    <button className={`btn btn-secondary warmth-option ${selectedWarmth === 'Neutral' ? 'selected' : ''}`} onClick={() => setSelectedWarmth('Neutral')}>Neutral</button>
                                    <button className={`btn btn-dark warmth-option ${selectedWarmth === 'Deep' ? 'selected' : ''}`} onClick={() => setSelectedWarmth('Deep')}>Deep</button>
                                </div>
                            </div>
                        </div>
                        {/* Color Choices */}
                        <div className="color-palette">
                            <h2>Color Choices (choose 6):</h2>
                            <div className="color-options">
                                <div className="color-grid">
                                    {filteredColors.map((color, index) => (
                                        <div
                                            key={index}
                                            className={`color-option ${selectedColors.includes(color) ? 'selected' : ''} ${color.toLowerCase()}`}
                                            onClick={() => handleColorSelection(color)}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" onClick={handleRevealPalette}>Reveal my Palette</button>
                    </div>
                    {console.log("Show Palette:", showPalette)}
                    {showPalette && <CreateResults selectedColors={selectedColors} />}
                </section>
            </main>
            <PageFooter />
        </div>
    );
}
export default Create;