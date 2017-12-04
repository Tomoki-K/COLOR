import React from "react";
import RadioList from "./RadioList.jsx";
import { If, generateColor, shuffle } from "./functions.jsx";

// import questions
const quiz = require('../json/pre-test.json');

export default class PreTest extends React.Component {
    constructor(props){
        super(props);
        let colorQuestions = [];
        for (var i = 0; i < 5; i++) {
            const qColor = generateColor();
            let choices = shuffle([qColor, generateColor(), generateColor()]);
            const answer = choices.findIndex(c => c == qColor);
            colorQuestions.push({
                question: `#${qColor.hex} はどの色?`,
                choices,
                answer
            });
        }
        this.state = {
            questions: quiz['pre-test'],
            colorQuestions,
            UserChoices: new Array(14).fill(null),
            marked: false,
            correctCnt: 0,
            secCorrectCnt: new Array(4).fill(0),
            unlockItems: []
        }
        this.unlock = this.unlock.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.checkAnswers = this.checkAnswers.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
    }

    unlock(){
        this.props.handleUnlock('pre-test', this.state.unlockItems);
        this.props.handleJump('index');
    }

    handleChangeValue(ansSet){
        let UserChoices = this.state.UserChoices;
        UserChoices[ansSet.qNum] = ansSet.ans;
        this.setState({UserChoices});
    }

    checkAnswers(){
        // determine which chapters to unlock
        const items = ['hex', 'rgb', 'color'];
        let secCorrectCnt = this.state.secCorrectCnt;
        let unlockItems = [];
        let sec_cnt = 0;
        let total_cnt = 0;
        let idx = 0;

        // regular questions
        this.state.questions.forEach((sec, id) => {
            sec_cnt = 0;
            sec.questions.forEach((q) => {
                if (q.answer === this.state.UserChoices[idx]) {
                    sec_cnt++;
                    total_cnt++
                };
                idx++;
            });
            secCorrectCnt[id] = sec_cnt;
            if (sec_cnt == sec.questions.length) {
                unlockItems.push(items[id]);
            }
        });

        // color questions
        sec_cnt = 0;
        this.state.colorQuestions.forEach((q) => {
            if(q.answer === this.state.UserChoices[idx]) {
                sec_cnt++;
                total_cnt++;
            }
            idx++;
        });
        secCorrectCnt[4] = sec_cnt;

        this.setState({secCorrectCnt, unlockItems, correctCnt: total_cnt, marked: true});
    }

    isCorrect(idx){
        return this.state.questions[idx].answer === this.state.UserChoices[idx]
    }

    render(){
        let qIdx = -1;
        return(
            <div className={`mainWrapper questionsWrapper ${this.state.marked ? 'marked' : ''}`}>
                <h1>pre-test</h1>
                {this.state.questions.map((sec, idx) => {
                    return(
                        <div className='sectionItem' key={`section-${idx}`}>
                            <h2>
                                {sec.title}
                                <If condition={this.state.marked}>
                                    <span className='secCorrectCnt'>[{this.state.secCorrectCnt[idx]}/3]</span>
                                </If>
                            </h2>
                            {sec.questions.map((q, id) => {
                                qIdx += 1;
                                const status = q.answer === this.state.UserChoices[qIdx] ? 'correct' : 'wrong';
                                return(
                                    <div className='questionItem' key={`questionBlock-${qIdx}`}>
                                        <h3 className={`question ${status}`}>{qIdx + 1}.{q.question}</h3>
                                        <RadioList
                                            name={`choices-${qIdx}`}
                                            qNum={qIdx}
                                            answer={q.answer}
                                            disabled={this.state.marked}
                                            checked={this.state.UserChoices[qIdx]}
                                            items={q.choices}
                                            onChangeValue={this.handleChangeValue}
                                            />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                {/* same as post-test */}
                <div className='sectionItem' key={`section-3`}>
                    <h2>
                        力試し問題
                        <If condition={this.state.marked}>
                            <span className='secCorrectCnt'>[{this.state.secCorrectCnt[4]}/5]</span>
                        </If>
                    </h2>
                    {this.state.colorQuestions.map((q, id) => {
                        qIdx += 1;
                        const status = q.answer === this.state.UserChoices[qIdx] ? 'correct' : 'wrong';
                        return(
                            <div className='questionItem' key={`questionBlock-${qIdx}`}>
                                <h3 className={`question ${status}`}>{qIdx + 1}.{q.question}</h3>
                                <RadioList
                                    name={`choices-${qIdx}`}
                                    qNum={qIdx}
                                    type='final'
                                    answer={q.answer}
                                    disabled={this.state.marked}
                                    checked={this.state.UserChoices[qIdx]}
                                    items={q.choices}
                                    onChangeValue={this.handleChangeValue}
                                    />
                            </div>
                        );
                    })}
                </div>

                <br/>
                <If condition={!this.state.marked}>
                    <button
                        className='mainBtn center'
                        onClick={this.checkAnswers}>
                        check answers
                    </button>
                </If>
                <If condition={this.state.marked}>
                        <p className='scoreText'>score: {this.state.correctCnt}/14</p>
                    <button
                        className='nextBtn mainBtn medium'
                        onClick={this.unlock}>
                        to index
                    </button>
                </If>
            </div>
        );
    }
}
