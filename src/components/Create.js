import React, { useEffect, useState } from 'react';
import CreateResults from './CreateResults';
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

function Create(props) {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState('');
    const [selectedWarmth, setSelectedWarmth] = useState('');
    const [showPalette, setShowPalette] = useState(false);
    const navigate = useNavigate(); 

    const handleColorSelection = (color) => {
        setSelectedColors(prevColors => {
            if (prevColors.includes(color)) {
                return prevColors.filter(c => c !== color);
            } else if (prevColors.length < 6) {
                return [...prevColors, color];
            }
            return prevColors;
        });
    };

    const handleRevealPalette = () => {
        setShowPalette(true);
    };

    const savePalette = () => {
        const auth = getAuth();
        const user = auth.currentUser;
    
        if (user) {
            const db = getDatabase();
            const paletteRef = ref(db, `users/${user.uid}/palettes`);
            firebaseSet(paletteRef, {
                [new Date().getTime()]: selectedColors
            })
            .then(() => {
                console.log('Palette saved successfully');
                navigate('/profile'); 
            })
            .catch(error => {
                console.error('Error saving palette:', error);
            });
        } else {
            console.error('User is not authenticated');
        }
    };
                
    const colorOptions = [
        { season: 'Spring', warmth: 'Light', colors: ['Yellow', 'Orange', 'LightGreen', 'Pink', 'LightBlue', 'SkyBlue', 'Gold', 'Green', 'OrangeRed'] },
        { season: 'Spring', warmth: 'Neutral', colors: ['Yellow', 'Orange', 'LightBlue', 'LightGreen', 'Gold', 'Pink', 'Green', 'SkyBlue', 'OrangeRed'] },
        { season: 'Spring', warmth: 'Deep', colors: ['Gold', 'Pink', 'Orange', 'Green', 'LightGreen', 'Yellow', 'OrangeRed', 'SkyBlue', 'LightBlue'] },
        { season: 'Summer', warmth: 'Light', colors: ['Orange', 'Gold', 'Pink', 'OrangeRed', 'LightGreen', 'Yellow', 'SkyBlue', 'LightBlue', 'Green'] },
        { season: 'Summer', warmth: 'Neutral', colors: ['Orange', 'Gold', 'LightGreen', 'Pink', 'Yellow', 'SkyBlue', 'Green', 'OrangeRed', 'LightBlue'] },
        { season: 'Summer', warmth: 'Deep', colors: ['Pink', 'Gold', 'Orange', 'LightGreen', 'Yellow', 'OrangeRed', 'SkyBlue', 'LightBlue', 'Green'] },
        { season: 'Autumn', warmth: 'Light', colors: ['OrangeRed', 'Gold', 'Pink', 'Orange', 'SkyBlue', 'LightBlue', 'Yellow', 'LightGreen', 'Green'] },
        { season: 'Autumn', warmth: 'Neutral', colors: ['OrangeRed', 'Gold', 'SkyBlue', 'Pink', 'Orange', 'Yellow', 'LightGreen', 'LightBlue', 'Green'] },
        { season: 'Autumn', warmth: 'Deep', colors: ['OrangeRed', 'Gold', 'Orange', 'Pink', 'LightGreen', 'Yellow', 'SkyBlue', 'LightBlue', 'Green'] },
        { season: 'Winter', warmth: 'Light', colors: ['SkyBlue', 'Pink', 'OrangeRed', 'Orange', 'Gold', 'LightGreen', 'Yellow', 'LightBlue', 'Green'] },
        { season: 'Winter', warmth: 'Neutral', colors: ['SkyBlue', 'Pink', 'Orange', 'Gold', 'LightGreen', 'Yellow', 'Green', 'OrangeRed', 'LightBlue'] },
        { season: 'Winter', warmth: 'Deep', colors: ['SkyBlue', 'Pink', 'Orange', 'Gold', 'LightGreen', 'Yellow', 'Green', 'OrangeRed', 'LightBlue'] }
    ];

    const filteredColors = colorOptions.find(option => option.season === selectedSeason && option.warmth === selectedWarmth)?.colors || [];

    return (
        <div>
            <main className="page">
                <div className="create-heading">
                    <h1>Create Your Own Palette</h1>
                </div>
                <section>
                    <div className="create-container">
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
                    <div className="d-flex justify-content-center my-3">
                        <button className="btn btn-outline-secondary mb-3 me-4 " onClick={handleRevealPalette}>Reveal my Palette</button>
                        <button className="btn btn-outline-secondary mb-3" onClick={savePalette}>Save Palette</button>
                    </div>
                    {showPalette && <CreateResults selectedColors={selectedColors} />}
                </section>
            </main>
        </div>
    );
}
export default Create;
