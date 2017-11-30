import React from "react";
import RadioList from "./RadioList.jsx";
import { If } from "./functions.jsx";

// import questions
const quiz = require('../json/quiz.json');

export default class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questions: quiz[`${this.props.textPage}`].questions,
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
        // unlock next chapter
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
                <h1>{quiz[`${this.props.textPage}`].title}</h1>
                {this.state.questions.map((q, idx) => {
                    const status = this.isCorrect(idx) ? 'correct' : 'wrong';
                    return(
                        <div className='questionItem' key={`question-${idx}`}>
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
