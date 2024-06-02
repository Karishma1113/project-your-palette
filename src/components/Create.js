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
        { season: 'Spring', warmth: 'Light', colors: ['#FFFF00', '#FFA500', '#90EE90', '#FF69B4', '#ADD8E6', '#87CEEB', '#FFD700', '#7CFC00', '#FF7F50'] },
        { season: 'Spring', warmth: 'Neutral', colors: ['#FFFF00', '#FFA500', '#ADD8E6', '#90EE90', '#FFD700', '#FF69B4', '#7CFC00', '#87CEEB', '#FF7F50'] },
        { season: 'Spring', warmth: 'Deep', colors: ['#FFD700', '#FF69B4', '#FFA500', '#7CFC00', '#90EE90', '#FFFF00', '#FF7F50', '#87CEEB', '#ADD8E6'] },
        { season: 'Summer', warmth: 'Light', colors: ['#FFA500', '#FFD700', '#FF69B4', '#FF7F50', '#90EE90', '#FFFF00', '#87CEEB', '#ADD8E6', '#7CFC00'] },
        { season: 'Summer', warmth: 'Neutral', colors: ['#FFA500', '#FFD700', '#90EE90', '#FF69B4', '#FFFF00', '#87CEEB', '#7CFC00', '#FF7F50', '#ADD8E6'] },
        { season: 'Summer', warmth: 'Deep', colors: ['#FF69B4', '#FFD700', '#FFA500', '#90EE90', '#FFFF00', '#FF7F50', '#87CEEB', '#ADD8E6', '#7CFC00'] },
        { season: 'Autumn', warmth: 'Light', colors: ['#FF7F50', '#FFD700', '#FF69B4', '#FFA500', '#87CEEB', '#ADD8E6', '#FFFF00', '#90EE90', '#7CFC00'] },
        { season: 'Autumn', warmth: 'Neutral', colors: ['#FF7F50', '#FFD700', '#87CEEB', '#FF69B4', '#FFA500', '#FFFF00', '#90EE90', '#ADD8E6', '#7CFC00'] },
        { season: 'Autumn', warmth: 'Deep', colors: ['#FF7F50', '#FFD700', '#FFA500', '#FF69B4', '#90EE90', '#FFFF00', '#87CEEB', '#ADD8E6', '#7CFC00'] },
        { season: 'Winter', warmth: 'Light', colors: ['#87CEEB', '#FF69B4', '#FF7F50', '#FFA500', '#FFD700', '#90EE90', '#FFFF00', '#ADD8E6', '#7CFC00'] },
        { season: 'Winter', warmth: 'Neutral', colors: ['#87CEEB', '#FF69B4', '#FFA500', '#FFD700', '#90EE90', '#FFFF00', '#7CFC00', '#FF7F50', '#ADD8E6'] },
        { season: 'Winter', warmth: 'Deep', colors: ['#87CEEB', '#FF69B4', '#FFA500', '#FFD700', '#90EE90', '#FFFF00', '#7CFC00', '#FF7F50', '#ADD8E6'] }
    ];

    const filteredColors = colorOptions.find(option => option.season === selectedSeason && option.warmth === selectedWarmth)?.colors || [];

    return (
        <div>
            <PageHeader />
            <main>
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
                                            className={`color-option ${selectedColors.includes(color) ? 'selected' : ''}`}
                                            style={{ backgroundColor: color }}
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