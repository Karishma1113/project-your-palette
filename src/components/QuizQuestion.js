import React from 'react';

function QuizQuestion(props) {
    const { question, name, options, onChange } = props;
    return (
        <div className="question">
            <p>{question}</p>
            <div className="question-answers">
                {options.map((option, index) => (
                    <div key={index}>
                        <input type="radio" id={`${name}_${index}`} value={option.value} name={name} onChange={onChange} />
                        <label htmlFor={`${name}_${index}`}>&nbsp; {option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizQuestion;