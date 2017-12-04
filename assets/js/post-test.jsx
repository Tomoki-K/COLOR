import React from "react";
import { If, generateColor, shuffle } from './functions.jsx';

const kemonoMessages = [
    '「へーきへーき!フレンズによって得意なこと違うから!」(サーバル)',
    '「本当につらいときは誰かを頼ったっていいのよ」(かば)',
    '「かばんちゃんはすっごい頑張り屋だから、きっとすぐ何が得意か分かるよ！」(サーバル)',
    '「おいしいものを食べてこその人生なのです」(はかせ)',
    '「やりますねぇ」(はかせ/じょしゅ)',
    '「無敵の布陣なのだ！」(あらい)'
];

export default class PostTest extends React.Component {
    constructor() {
        super();
        const choices = this.generateChoices();
        this.state = {
            qNum: 0,
            message: 'カラーコードが表す色を当ててね！',
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
        if (this.state.marked) {
            return;
        }
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
        if (this.state.marked) {
            return;
        }
        this.setState({selectedIdx: idx});
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
                        check answer
                    </button>
                </If>
                <If condition = {this.state.qNum == 5}>
                    <p>結果：</p>
                    <h1>{this.state.correctCnt}/5</h1>
                    <p>{kemonoMessages[this.state.correctCnt]}</p>
                    <button
                        className='checkBtn mainBtn large'>
                        アンケート
                    </button>
                </If>
            </div>
        );
    }
}
