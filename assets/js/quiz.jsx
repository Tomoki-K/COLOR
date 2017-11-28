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
            UserChoices: new Array(quiz.length).fill(null),
            marked: false,
            correctCnt: 0
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
        let UserChoices = this.state.UserChoices;
        UserChoices[ansSet.qNum] = ansSet.ans;
        this.setState({UserChoices});
    }

    checkAnswers(){
        let cnt = 0;
        const questions = this.state.questions;
        this.state.UserChoices.forEach((a, idx) => {
            cnt += this.isCorrect(idx);
        });
        this.setState({correctCnt: cnt, marked: true});
    }

    isCorrect(idx){
        return this.state.questions[idx].answer === this.state.UserChoices[idx]
    }

    render(){
        return(
            <div className={`mainWrapper questionsWrapper ${this.state.marked ? 'marked' : ''}`}>
                <h1>{this.props.textPage}</h1>
                {this.state.questions.map((q, idx) => {
                    const status = this.isCorrect(idx) ? 'correct' : 'wrong';
                    return(
                        <div className='questionItem' key={`quistion-${idx}`}>
                            <h3 className={`question ${status}`}>{idx + 1}.{q.question}</h3>
                            <RadioList
                                name={`answers-${idx}`}
                                qNum={idx}
                                answer={q.answer}
                                disabled={this.state.marked}
                                checked={this.state.UserChoices[idx]}
                                items={q.choices}
                                onChangeValue={this.handleChangeValue}
                                />
                        </div>
                    );
                })}
                <br/>
                <If condition={!this.state.marked}>
                    <button
                        className='mainBtn center'
                        onClick={this.checkAnswers}>
                        check answers
                    </button>
                </If>
                <If condition={this.state.marked}>
                    <p className='scoreText'>score: {this.state.correctCnt}/{this.state.questions.length}</p>
                    <button
                        className='prevBtn mainBtn medium'
                        onClick={this.unlock}>
                        back to index
                    </button>
                </If>
            </div>
        );
    }
}
