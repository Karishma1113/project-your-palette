import React, { useState } from 'react';
import PageHeader from './Header';
import PageFooter from './Footer';

function Create(props) {
    return (
        <div>
            <PageHeader/>
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
                                    <button className="btn btn-success season-option">Spring</button>
                                    <button className="btn btn-info season-option">Summer</button>
                                    <button className="btn btn-warning season-option">Autumn</button>
                                    <button className="btn btn-primary season-option">Winter</button>
                                </div>
                            </div>
                        </div>
                        {/* Choose Warmth */}
                        <div className="selections">
                            <div className="row">
                                <h2>Choose Warmth:</h2>
                                <div className="warmth-options">
                                    <button className="btn btn-light warmth-option">Light</button>
                                    <button className="btn btn-secondary warmth-option">Neutral</button>
                                    <button className="btn btn-dark warmth-option">Deep</button>
                                </div>
                            </div>
                        </div>
                        {/* Color Choices */}
                        <div className="color-palette">
                            <h2>Color Choices:</h2>
                            <div className="color-choice">
                                <div className="color-img-container">
                                    <button type="button" className="btn btn-color color1" aria-label='color yellow'></button>
                                    <button type="button" className="btn btn-color color2" aria-label='color orange'></button>
                                    <button type="button" className="btn btn-color color3" aria-label='color dark green'></button>
                                    <button type="button" className="btn btn-color color4" aria-label='color dark blue'></button>
                                    <button type="button" className="btn btn-color color5" aria-label='color plum'></button>
                                    <button type="button" className="btn btn-color color6" aria-label='color light green'></button>
                                    <button type="button" className="btn btn-color color7" aria-label='color pink red'></button>
                                    <button type="button" className="btn btn-color color8" aria-label='color light blue'></button>
                                    <button type="button" className="btn btn-color color9" aria-label='color purple'></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="create2.html" className="btn btn-outline-secondary">Reveal my Palette</a>
                    </div>
                </section>
            </main>
            <PageFooter/>
        </div>
    );
}

export default Create;