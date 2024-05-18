import PageHeader from "./Header";
import PageFooter from "./Footer";

function CreatePage(props) {
    return (
        <div>
            <PageHeader />
            <main>
                <div className="create-heading">
                    <h1>Create Your Own Palette</h1>
                </div>
                <section>
                    <div className="create-container">
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
                        <div className="color-palette">
                            <h2>Color Choices:</h2>
                            <div className="color-choice">
                                <div className="color-img-container">
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color1.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color2.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color3.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color4.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color5.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color6.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color7.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color8.png');"></button>
                                    <button type="button" className="btn btn-color" style="background-image: url('img/color9.png');"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="create2.html" className="btn btn-outline-secondary">Reveal my Palette</a>
                    </div>
                </section>
            </main>
            <PageFooter />
        </div>
    )
}

export default CreatePage;