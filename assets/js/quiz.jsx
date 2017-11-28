import React from "react";
import RadioList from "./RadioList.jsx";
import { If } from "./functions.jsx";

// TODO: move to JSON file
const quiz = [
    {
        question: 'question1',
        choices: ['c1', 'c2', 'c3', 'c4'],
        answer: 1
    },{
        question: 'question2',
        choices: ['c1', 'c2', 'c3', 'c4'],
        answer: 2
    },{
        question: 'question3',
        choices: ['c1', 'c2', 'c3', 'c4'],
        answer: 1
    }
];

export default class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questions: quiz,
            answers: new Array(quiz.length).fill(null),
            checked: false,
            correctCount: 0
        }
        this.unlock = this.unlock.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.checkAnswers = this.checkAnswers.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
    }

    unlock(){
        this.props.handleUnlock(this.props.textPage);
        this.props.handleJump('index');
    }

    handleChangeValue(ansSet){
        let answers = this.state.answers;
        answers[ansSet.qNum] = ansSet.ans;
        this.setState({answers});
    }

    checkAnswers(){
        let cnt = 0;
        const questions = this.state.questions;
        this.state.answers.forEach((a, idx) => {
            cnt += this.isCorrect(idx);
        });
        this.setState({correctCount: cnt, checked: true});
    }

    isCorrect(idx){
        return this.state.questions[idx].answer === this.state.answers[idx]
    }

    render(){
        return(
            <div className='mainWrapper center'>
                {this.props.textPage}
                {this.state.questions.map((q, idx) => {
                    const correct = this.state.checked && this.isCorrect(idx);
                    return(
                        <div key={`quistion-${idx}`}>
                            <h3>{idx + 1}. {q.question}</h3>
                            <RadioList
                                name={`answers-${idx}`}
                                qNum={idx}
                                disabled={this.state.checked}
                                checked={this.state.answers[idx]}
                                items={q.choices}
                                onChangeValue={this.handleChangeValue}
                                />
                        </div>
                    );
                })}
                <br/>
                <If condition={this.state.checked}>
                    <p>score: {this.state.correctCount}/{this.state.questions.length}</p>
                    <button onClick={this.unlock}>index(仮)</button>
                </If>
                <button onClick={this.checkAnswers}>check</button>
            </div>
        );
    }
}
