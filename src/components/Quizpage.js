import PageHeader from "./Header";
import PageFooter from "./Footer";

function QuizPage() {
    return (
        <body>
            <PageHeader />
            <main class="quiz-page">
                <div class="quiz-intro">
                    <h1>Discover Your Colors: Take Our Color Analysis Quiz!</h1>
                    <p>Ever wondered which colors make you shine? Our fun and easy quiz will help you uncover your unique palette, tailored to your personal style, features, and preferences. Whether you're revamping your wardrobe or simply curious about which colors and hues complement you best, our quiz is your first step towards discovering the perfect colors for every occasion.</p>
                </div>
                <form>
                    <section class="quiz-container">
                        <div class="question">
                            <p>What is your skin tone? (Fitzpatrick Scale)</p>
                            <div class="question-answers">
                                <div>
                                    <input type="radio" id="light_skin" value="#" name="skin_tone"/>
                                    <label for="light_skin">&nbsp; Light, Pale White</label>  
                                </div>
                                <div>
                                    <input type="radio" id="white_skin" value="#" name="skin_tone"/>
                                    <label for="white_skin">&nbsp; White, Fair</label>  
                                </div>
                                <div>
                                    <input type="radio" id="medium_skin" value="#" name="skin_tone"/>
                                    <label for="medium_skin">&nbsp; Medium, White to Olive</label>  
                                </div>
                                <div>
                                    <input type="radio" id="olive_skin" value="#" name="skin_tone"/>
                                    <label for="olive_skin">&nbsp; Olive, Moderate Brown</label>  
                                </div>
                                <div>
                                    <input type="radio" id="brown_skin" value="#" name="skin_tone"/>
                                    <label for="brown_skin">&nbsp; Brown, Dark Brown</label>  
                                </div>
                                <div>
                                    <input type="radio" id="dark_skin" value="#" name="skin_tone"/>
                                    <label for="dark_skin">&nbsp; Black, Very Dark</label>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p>What is your hair color? (Natural Hair Color)</p>
                            <div class="question-answers">
                                <div>
                                    <input type="radio" id="black_hair" value="#" name="hair_color"/>
                                    <label for="black_hair">&nbsp; Black Hair</label>  
                                </div>
                                <div>
                                    <input type="radio" id="brown_hair" value="#" name="hair_color"/>
                                    <label for="brown_hair">&nbsp; Brown Hair</label>  
                                </div>
                                <div>
                                    <input type="radio" id="blonde_hair" value="#" name="hair_color"/>
                                    <label for="blone_hair">&nbsp; Blonde Hair</label>  
                                </div>
                                <div>
                                    <input type="radio" id="red_hair" value="#" name="hair_color"/>
                                    <label for="red_hair">&nbsp; Red Hair</label>  
                                </div>
                                <div>
                                    <input type="radio" id="silver_grey_hair" value="#" name="hair_color"/>
                                    <label for="silver_grey_hair">&nbsp; Grey/Silver Hair</label>  
                                </div>
                                <div>
                                    <input type="radio" id="other_hair" value="#" name="hair_color"/>
                                    <label for="other_hair">&nbsp; Other Color Hair</label>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p>What is your eye color?</p>
                            <div class="question-answers">
                                <div>
                                    <input type="radio" id="blue_eyes" value="#" name="eye_color"/>
                                    <label for="blue_eyes">&nbsp; Blue Eyes</label>  
                                </div>
                                <div>
                                    <input type="radio" id="green_eyes" value="#" name="eye_color"/>
                                    <label for="green_eyes">&nbsp; Green Eyes</label>  
                                </div>
                                <div>
                                    <input type="radio" id="hazel_eyes" value="#" name="eye_color"/>
                                    <label for="hazel_eyes">&nbsp; Hazel Eyes</label>  
                                </div>
                                <div>
                                    <input type="radio" id="brown_eyes" value="#" name="eye_color"/>
                                    <label for="brown_eyes">&nbsp; Brown Eyes</label>  
                                </div>
                                <div>
                                    <input type="radio" id="black_eyes" value="#" name="eye_color"/>
                                    <label for="black_eyes">&nbsp; Very Dark/Black Eyes</label>  
                                </div>
                                <div>
                                    <input type="radio" id="other_eyes" value="#" name="eye_color"/>
                                    <label for="other_eyes">&nbsp; Other</label>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p>How would you describe your skin undertone?</p>
                            <div class="question-answers">
                                <div>
                                    <input type="radio" id="cool_undertones" value="#" name="undertone"/>
                                    <label for="cool_undertones">&nbsp; Cool Undertones (Blue or Purple veins)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="neutral_undertones" value="#" name="undertone"/>
                                    <label for="neutral_undertones">&nbsp; Neutral Undertones (Blue-Green veins)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="warm_undertones" value="#" name="undertone"/>
                                    <label for="warm_undertones">&nbsp; Warm Undertones (Green or Olive veins)</label>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p>Which of these colors do you feel most comfortable wearing?</p>
                            <div class="question-answers">
                                <div>
                                    <input type="radio" id="neutral_colors" value="#" name="comfy_color"/>
                                    <label for="neutral_colors">&nbsp; Neutrals (black, white, gray...)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="vibrant_colors" value="#" name="comfy_color"/>
                                    <label for="vibrant_colors">&nbsp; Vibrant (red, blue, green...)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="pastel_colors" value="#" name="comfy_color"/>
                                    <label for="pastel_colors">&nbsp; Soft pastels (pink, lavender, baby blue...)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="earthy_colors" value="#" name="comfy_color"/>
                                    <label for="earthy_colors">&nbsp; Earthy tones (brown, olive, camel...)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="subdued_colors" value="#" name="comfy_color"/>
                                    <label for="subdued_colors">&nbsp; Subdued tones (mauve, sage, slate...)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="metallic_colors" value="#" name="comfy_color"/>
                                    <label for="metallic_colors">&nbsp; Metallic tones (gold, silver, bronze...)</label>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p>Which season do you feel best represents your personality?</p>
                            <div class="question-answers">
                                <div>
                                    <input type="radio" id="winter" value="#" name="season"/>
                                    <label for="winter">&nbsp; Winter (cool tones)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="spring" value="#" name="season"/>
                                    <label for="spring">&nbsp; Spring (light and bright)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="summer" value="#" name="season"/>
                                    <label for="summer">&nbsp; Summer (soft and muted)</label>  
                                </div>
                                <div>
                                    <input type="radio" id="autumn" value="#" name="season"/>
                                    <label for="autumn">&nbsp; Autumn (rich and earthy)</label>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p>What's your preferred metal for jewelry?</p>
                            <div class="question-answers">
                                <div>
                                    <input type="radio" id="gold_jewelery" value="#" name="metals"/>
                                    <label for="gold_jewelery">&nbsp; Gold</label>  
                                </div>
                                <div>
                                    <input type="radio" id="silver_jewelery" value="#" name="metals"/>
                                    <label for="silver_jewelery">&nbsp; Silver</label>  
                                </div>
                                <div>
                                    <input type="radio" id="no_jewelery" value="#" name="metals"/>
                                    <label for="no_jewelery">&nbsp; No Preference</label>  
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="d-flex justify-content-center">
                        <button class="btn" type="submit" disabled aria-label="Reveal My Colors!">Reveal My Colors!</button>
                    </div>
                </form>
            </main>
            <PageFooter />
        </body>
    )
}

export default QuizPage;