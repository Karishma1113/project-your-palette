function HomePage() {
    return (
        <div>
            <main className="homepage">
                <h1>Welcome to Your Pal-ette</h1>
                <span>Uncover Your True Colors</span>
                <p> Welcome to Your Pal-ette, where we help you uncover the palette that speaks to you. Dive into the world of colors with our interactive quiz that delves deep into your unique complex and preferences to curate a personalized color palette just for you. Explore endless color palettes and unleash your creativity like never before sharing your own color palette with the world. From flattering neutrals to vibrant hues, explore the spectrum of possibilities and find the colors that illuminate your beauty and style. Whether you're a seasoned enthusiastor just starting your journey, Your Pal-ette is your go-to destinationfor all things colors. </p>
                <section>
                    <div className="card-container">
                        <div className="card rounded-4 home-main-selection">
                            <a href="quiz.html">
                                <img src="/img/Homepage/Quiz.jpeg" className="card-img-top" alt="A note book, a color palette, and study material for different colors. Generated through: https://deepai.org/machine-learning-model/text2img "/>
                                <h3>Discover your colors! <br/> Take our Quiz</h3>
                            </a>
                        </div>
                        <div className="card rounded-4 home-main-selection">
                            <a href="create.html">
                                <img src="/img/Homepage/Create.jpeg" className="card-img-top" alt="A palette with variety of colors on it. Generated through: https://deepai.org/machine-learning-model/text2img "/>
                                <h3>Create your own Palette!</h3>
                            </a>
                        </div>
                        <div className="card rounded-4 home-main-selection">
                            <a href="explore.html">
                                <img src="/img/Homepage/Discover.jpeg" className="card-img-top" alt="Different colors palette strips. Generated through: https://deepai.org/machine-learning-model/text2img "/>
                                <h3>Share & Explore Palettes</h3>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomePage;