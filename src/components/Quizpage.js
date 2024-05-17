import React, { useState } from 'react';
import PageHeader from './Header';
import PageFooter from './Footer';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

function QuizPage() {
    const questions = [
        {
            question: 'What is your skin tone? (Fitzpatrick Scale)',
            name: 'skin_tone',
            options: [
                { value: 'winter', label: 'Light, Pale White' },
                { value: 'spring', label: 'White, Fair' },
                { value: 'summer', label: 'Medium, White to Olive' },
                { value: 'autumn', label: 'Olive, Moderate Brown' },
                { value: 'autumn', label: 'Brown, Dark Brown' },
                { value: 'winter', label: 'Black, Very Dark' },
            ],
        },
        {
            question: 'What is your hair color? (Natural Hair Color)',
            name: 'hair_color',
            options: [
                { value: 'winter', label: 'Black Hair' },
                { value: 'autumn', label: 'Brown Hair' },
                { value: 'spring', label: 'Blonde Hair' },
                { value: 'autumn', label: 'Red Hair' },
                { value: 'summer', label: 'Grey/Silver Hair' },
                { value: 'spring', label: 'Other Color Hair' },
            ],
        },
        {
            question: 'What is your eye color?',
            name: 'eye_color',
            options: [
                { value: 'summer', label: 'Blue Eyes' },
                { value: 'spring', label: 'Green Eyes' },
                { value: 'autumn', label: 'Hazel Eyes' },
                { value: 'winter', label: 'Brown Eyes' },
                { value: 'winter', label: 'Very Dark/Black Eyes' },
                { value: 'spring', label: 'Other' },
            ],
        },
        {
            question: 'How would you describe your skin undertone?',
            name: 'undertone',
            options: [
                { value: 'winter', label: 'Cool Undertones (Blue or Purple veins)' },
                { value: 'spring', label: 'Neutral Undertones (Blue-Green veins)' },
                { value: 'autumn', label: 'Warm Undertones (Green or Olive veins)' },
            ],
        },
        {
            question: 'Which of these colors do you feel most comfortable wearing?',
            name: 'comfy_color',
            options: [
                { value: 'winter', label: 'Neutrals (black, white, gray...)' },
                { value: 'spring', label: 'Vibrant (red, blue, green...)' },
                { value: 'summer', label: 'Soft pastels (pink, lavender, baby blue...)' },
                { value: 'autumn', label: 'Earthy tones (brown, olive, camel...)' },
                { value: 'winter', label: 'Subdued tones (mauve, sage, slate...)' },
                { value: 'spring', label: 'Metallic tones (gold, silver, bronze...)' },
            ],
        },
        {
            question: 'Which season do you feel best represents your personality?',
            name: 'season',
            options: [
                { value: 'winter', label: 'Winter (cool tones)' },
                { value: 'spring', label: 'Spring (light and bright)' },
                { value: 'summer', label: 'Summer (soft and muted)' },
                { value: 'autumn', label: 'Autumn (rich and earthy)' },
            ],
        },
        {
            question: 'What\'s your preferred metal for jewelry?',
            name: 'metals',
            options: [
                { value: 'spring', label: 'Gold' },
                { value: 'winter', label: 'Silver' },
                { value: 'autumn', label: 'No Preference' },
            ],
        },
    ];

    const [quizResults, setQuizResults] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuizResults((prevResults) => ({
            ...prevResults,
            [name]: value,
        }));
    };

     const isFormComplete = () => {
        return questions.every(question => quizResults.hasOwnProperty(question.name));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormComplete()) {
            setIsSubmitted(true);
        } else {
            alert("Please answer all questions before submitting the quiz.");
        }
    };

    const handleRetakeQuiz = () => {
        setQuizResults({});
        setIsSubmitted(false);
    };

    return (
        <div>
            <PageHeader />
            <main className="quiz-page">
                <div className="quiz-intro">
                    <h1>Discover Your Colors: Take Our Color Analysis Quiz!</h1>
                    <p>Ever wondered which colors make you shine? Our fun and easy quiz will help you uncover your unique palette, tailored to your personal style, features, and preferences. Whether you're revamping your wardrobe or simply curious about which colors and hues complement you best, our quiz is your first step towards discovering the perfect colors for every occasion.</p>
                </div>
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <section className="quiz-container">
                            {questions.map((q, index) => (
                                <QuizQuestion key={index} question={q.question} name={q.name} options={q.options} onChange={handleInputChange} />
                            ))}
                        </section>
                        <div className="d-flex justify-content-center">
                            <button className="btn submit-button" type="submit" disabled={!isFormComplete()}>
                                Reveal My Colors!
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="results-container">
                        <QuizResults results={quizResults} />
                        <div className="d-flex justify-content-center">
                            <button className="btn submit-button" onClick={handleRetakeQuiz} aria-label="Retake Quiz">
                                Retake Quiz
                            </button>
                        </div>
                    </div>
                )}
            </main>
            <PageFooter />
        </div>
    );
}

export default QuizPage;