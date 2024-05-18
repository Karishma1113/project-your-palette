import React, { useState } from 'react';
import PageHeader from './Header';
import PageFooter from './Footer';

function CreateResults(props) {
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
                                    <button type="button" className="btn btn-color color1" aria-label='color1'></button>
                                    <button type="button" className="btn btn-color color2" aria-label='color2'></button>
                                    <button type="button" className="btn btn-color color3" aria-label='color3'></button>
                                    <button type="button" className="btn btn-color color4" aria-label='color4'></button>
                                    <button type="button" className="btn btn-color color5" aria-label='color5'></button>
                                    <button type="button" className="btn btn-color color6" aria-label='color6'></button>
                                    <button type="button" className="btn btn-color color7" aria-label='color7'></button>
                                    <button type="button" className="btn btn-color color8" aria-label='color8'></button>
                                    <button type="button" className="btn btn-color color9" aria-label='color9'></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn" type="submit" disabled>Reveal My Palette</button>
                    </div>

                    <div class="custom-palette">
                        <p>Here is your customized seasonal color palette:</p>
                        <div className="color-choice">
                            <div className="color-img-container"></div>
                                <button type="button" className="btn btn-color color1" aria-label='color1'></button>
                                <button type="button" className="btn btn-color color4" aria-label='color4'></button>
                                <button type="button" className="btn btn-color color5" aria-label='color5'></button>
                                <button type="button" className="btn btn-color color9" aria-label='color9'></button>
                        </div>
                    </div>
                </section>
            </main>
            <PageFooter />
        </div>
    );
}

export default CreateResults;