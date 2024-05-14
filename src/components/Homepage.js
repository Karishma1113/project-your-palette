import PageHeader from "./Header";
import PageFooter from "./Footer";

function HomePage() {
    return (
        <body>
            <PageHeader />
            <main className="homepage">
                <h1>Welcome to Your Pal-ette</h1>
                <span>Uncover Your True Colors</span>
                <p>
                    Welcome to Your Pal-ette, where we help you uncover the palette that
                    speaks to you. Dive into the world of colors with our interactive quiz
                    that delves deep into your unique complex and preferences to curate a
                    personalized color palette just for you. Explore endless color
                    palettes and unleash your creativity like never before sharing your
                    own color palette with the world. From flattering neutrals to vibrant
                    hues, explore the spectrum of possibilities and find the colors that
                    illuminate your beauty and style. Whether you're a seasoned enthusiast
                    or just starting your journey, Your Pal-ette is your go-to destination
                    for all things colors.
                </p>
                <section>
                    <div className="card rounded-4 home-main-selection">
                        <a href="quiz.html">
                            <img
                                src="img/pexels-george-milton-6954213.jpg"
                                className="card-img-top"
                                alt="Person swatching different colors on arm"
                            />
                            <h3>Discover your colors take our Quiz</h3>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card rounded-4 home-selection left-card">
                                <a href="create.html">
                                    <img
                                        src="img/zhang-xinxin-cWY499Ma1SQ-unsplash.jpg"
                                        className="card-img-top"
                                        alt="A palette with paint on it"
                                    />
                                    <h3>Create your own palette</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card rounded-4 home-selection right-card">
                                <a href="explore.html">
                                    <img
                                        src="img/pexels-cottonbro-6583367.jpg"
                                        className="card-img-top"
                                        alt="Color Palettes Strips"
                                    />
                                    <h3>Share and Explore palettes</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <PageFooter />
        </body>
    );
}

export default HomePage;