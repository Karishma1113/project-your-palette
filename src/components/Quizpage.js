import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

function QuizPage() {
    const questions = [
        {
            question: 'What is your skin tone? (Fitzpatrick Scale)',
            name: 'skin_tone',
            options: [
                { value: 'Light, Pale White', season: 'winter' },
                { value: 'White, Fair', season: 'spring' },
                { value: 'Medium, White to Olive', season: 'summer' },
                { value: 'Olive, Moderate Brown', season: 'autumn' },
                { value: 'Brown, Dark Brown', season: 'autumn' },
                { value: 'Black, Very Dark', season: 'winter' },
            ],
        },
        {
            question: 'What is your hair color? (Natural Hair Color)',
            name: 'hair_color',
            options: [
                { value: 'Black Hair', season: 'winter' },
                { value: 'Brown Hair', season: 'autumn' },
                { value: 'Blonde Hair', season: 'spring' },
                { value: 'Red Hair', season: 'autumn' },
                { value: 'Grey/Silver Hair', season: 'summer' },
                { value: 'Other Color Hair', season: 'spring' },
            ],
        },
        {
            question: 'What is your eye color?',
            name: 'eye_color',
            options: [
                { value: 'Blue Eyes', season: 'summer' },
                { value: 'Green Eyes', season: 'spring' },
                { value: 'Hazel Eyes', season: 'autumn' },
                { value: 'Brown Eyes', season: 'winter' },
                { value: 'Very Dark/Black Eyes', season: 'winter' },
                { value: 'Other', season: 'spring' },
            ],
        },
        {
            question: 'How would you describe your skin undertone?',
            name: 'undertone',
            options: [
                { value: 'Cool Undertones (Blue or Purple veins)', season: 'winter' },
                { value: 'Neutral Undertones (Blue-Green veins)', season: 'spring' },
                { value: 'Warm Undertones (Green or Olive veins)', season: 'autumn' },
            ],
        },
        {
            question: 'Which of these colors do you feel most comfortable wearing?',
            name: 'comfy_color',
            options: [
                { value: 'Neutrals (black, white, gray...)', season: 'winter' },
                { value: 'Vibrant (red, blue, green...)', season: 'spring' },
                { value: 'Soft pastels (pink, lavender, baby blue...)', season: 'summer' },
                { value: 'Earthy tones (brown, olive, camel...)', season: 'autumn' },
                { value: 'Subdued tones (mauve, sage, slate...)', season: 'winter' },
                { value: 'Metallic tones (gold, silver, bronze...)', season: 'spring' },
            ],
        },
        {
            question: 'Which season do you feel best represents your personality?',
            name: 'season',
            options: [
                { value: 'Winter (cool tones)', season: 'winter' },
                { value: 'Spring (light and bright)', season: 'spring' },
                { value: 'Summer (soft and muted)', season: 'summer' },
                { value: 'Autumn (rich and earthy)', season: 'autumn' },
            ],
        },
        {
            question: 'What\'s your preferred metal for jewelry?',
            name: 'metals',
            options: [
                { value: 'Gold', season: 'spring' },
                { value: 'Silver', season: 'winter' },
                { value: 'No Preference', season: 'autumn' },
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

    const calculateSeason = (results) => {
        const seasonCounts = {
            winter: 0,
            spring: 0,
            summer: 0,
            autumn: 0,
        };

        questions.forEach((question) => {
            const selectedOption = question.options.find(option => option.value === results[question.name]);
            if (selectedOption) {
                seasonCounts[selectedOption.season]++;
            }
        });

        return Object.keys(seasonCounts).reduce((a, b) => seasonCounts[a] > seasonCounts[b] ? a : b);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormComplete()) {
            const season = calculateSeason(quizResults);
            setQuizResults((prevResults) => ({
                ...prevResults,
                season,
            }));
            setIsSubmitted(true);

            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                try {
                    const db = getDatabase();
                    const userRef = ref(db, `users/${user.uid}/season`);
                    await firebaseSet(userRef, season);
                } catch (error) {
                    console.error('Error saving quiz result:', error);
                }
            } else {
                alert('You must be logged in to save your quiz results.');
            }
        } else {
            alert("Please answer all questions before submitting the quiz.");
        }
    };

    const handleRetakeQuiz = () => {
        setQuizResults({});
        setIsSubmitted(false);
    };

    const renderQuestions = () => {
        return questions.map((q, index) => (
            <QuizQuestion
                key={index}
                question={q.question}
                name={q.name}
                options={q.options.map(option => ({ value: option.value, label: option.value }))}
                onChange={handleInputChange}
            />
        ));
    };

    return (
        <div>
            <main className="quiz-page">
                <div className="quiz-intro">
                    <h1>Discover Your Colors: Take Our Color Analysis Quiz!</h1>
                    <p>Ever wondered which colors make you shine? Our fun and easy quiz will help you uncover your unique palette, tailored to your personal style, features, and preferences. Whether you're revamping your wardrobe or simply curious about which colors and hues complement you best, our quiz is your first step towards discovering the perfect colors for every occasion.</p>
                </div>
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <section className="quiz-container">
                            {renderQuestions()}
                        </section>
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn submit-button"
                                type="submit"
                                disabled={!isFormComplete()}
                            >
                                Reveal My Colors!
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="results-container">
                        <QuizResults results={quizResults} />
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn submit-button"
                                onClick={handleRetakeQuiz}
                                aria-label="Retake Quiz"
                            >
                                Retake Quiz
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default QuizPage;