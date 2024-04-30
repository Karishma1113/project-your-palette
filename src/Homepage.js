export function Homepage() {
    return (
        <body>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">
                            <img
                                src="img/palette_logo_without_bg.png"
                                class="logo"
                                alt="Your Pal-ette Logo"
                            />
                            Your Pal-ette
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end">
                            <ul class="navbar-nav p-2">
                                <li class="nav-item px-4">
                                    <a class="nav-link active" href="quiz.html">
                                        Quiz
                                    </a>
                                </li>
                                <li class="nav-item px-4">
                                    <a class="nav-link active" href="create.html">
                                        Create
                                    </a>
                                </li>
                                <li class="nav-item px-4">
                                    <a class="nav-link active" href="explore.html">
                                        Explore
                                    </a>
                                </li>
                                <li class="nav-item px-4">
                                    <a class="nav-link active" href="sign-in.html">
                                        Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main class="homepage">
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
                    <div class="card rounded-4 home-main-selection">
                        <a href="quiz.html">
                            <img
                                src="img/pexels-george-milton-6954213.jpg"
                                class="card-img-top"
                                alt="Person swatching different colors on arm"
                            />
                            <h3>Discover your colors take our Quiz</h3>
                        </a>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card rounded-4 home-selection left-card">
                                <a href="create.html">
                                    <img
                                        src="img/zhang-xinxin-cWY499Ma1SQ-unsplash.jpg"
                                        class="card-img-top"
                                        alt="A palette with paint on it"
                                    />
                                    <h3>Create your own palette</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card rounded-4 home-selection right-card">
                                <a href="explore.html">
                                    <img
                                        src="img/pexels-cottonbro-6583367.jpg"
                                        class="card-img-top"
                                        alt="Color Palettes Strips"
                                    />
                                    <h3>Share and Explore palettes</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>
                    &copy Kevin Tran, Leanna Sun, Fan Bu, Karishma Raj, Your Pal-ette 2024
                </p>
            </footer>
            <script src="js/index.js"></script>
        </body>
    );
}
