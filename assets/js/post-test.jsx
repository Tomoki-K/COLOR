import React from "react";
import { If, generateColor, shuffle } from './functions.jsx';

export default class PostTest extends React.Component {
    constructor() {
        super();
        const choices = this.generateChoices();
        this.state = {
            qNum: 0,
            message: '5問やで',
            marked: false,
            answerIdx: Math.floor(Math.random() * choices.length),
            selectedIdx: null,
            correctCnt: 0,
            choices
        };
    }

    newColorSet(){
        const choices = this.generateChoices();
        const answerIdx = Math.floor(Math.random() * choices.length);
        this.setState({ answerIdx, choices });
    }

    generateChoices(){
        let choices = [];
        for (var i = 0; i < 3; i++) {
            choices.push(generateColor());
        }
        return shuffle(choices);
    }

    checkAnswer() {
        let correctCnt = this.state.correctCnt;
        let message = 'ちがうよ！'
        if (this.state.answerIdx === this.state.selectedIdx) {
            correctCnt++;
            message = 'すっごーーーい！！'
        }
        this.setState({correctCnt, message, marked: true});
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    nextQuestion() {
        this.newColorSet();
        const qNum = this.state.qNum + 1;
        const message = (qNum + 1) + '問目'
        this.setState({
            qNum,
            message,
            selectedIdx: null,
            marked: false
        });
    }

    select(idx) {
        if (!this.state.marked) {
            this.setState({selectedIdx: idx});
        }
    }

    render() {
        return (
            <div className={`mainWrapper questionsWrapper center ${this.state.marked ? 'marked' : ''}`}>
                <If condition = {this.state.qNum < 5}>
                    <h1>#{this.state.choices[this.state.answerIdx].hex}</h1>
                    <p>{this.state.message}</p>
                    <div className='postTest-choiceBox'>
                        {this.state.choices.map((color, idx) => {
                            const selected = this.state.selectedIdx === idx;
                            const correctAns = this.state.answerIdx === idx;
                            let status = '';
                            if (selected && correctAns) {
                                status = 'correct'
                            } else if (selected && !correctAns) {
                                status = 'wrong'
                            } else if (!selected && correctAns) {
                                status = 'correctAns'
                            }
                            return (
                                <div key={`color-${idx}`} className={`radioItem ${status}`}>
                                    <div
                                        className={`colorChoiceItems ${selected ? 'selected' : ''}`}
                                        style={{backgroundColor: `#${color.hex}`}}
                                        onClick={() => this.select(idx)}
                                        />
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className='checkBtn mainBtn large'
                        onClick={() => this.checkAnswer()}>
                        check
                    </button>
                </If>
                <If condition = {this.state.qNum == 5}>
                    <h1>{this.state.correctCnt}/5</h1>
                    <button
                        className='mainBtn large'>
                        アンケート
                    </button>
                </If>
            </div>
        );
    }
}
