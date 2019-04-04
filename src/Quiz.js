import React, { Component, useState } from 'react'

import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position : 1};
    }

    render () {
        let question = quizData.quiz_questions[this.state.quiz_position - 1];
        const isQuizEnd = this.state.quiz_position -1 === quizData.quiz_questions.length;

        return <div>
            {(isQuizEnd ? <QuizEnd /> :<QuizQuestion quiz_question={question} />)}
        </div>
    }
}

export default Quiz;