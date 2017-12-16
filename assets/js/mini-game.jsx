import React from "react";
import { generateColor, shuffle } from './functions.jsx';

export default class PostTest extends React.Component {
    constructor() {
        let answer = generateColor();
        super();
        this.state = {
            combo: 0,
            message: 'カラーコードが表す色を当ててね！',
            answer: answer,
            choices: this.generateChoices(answer)
        };
    }

    newColorSet(){
        let answer = generateColor();
        this.setState({
            answer: answer,
            choices: this.generateChoices(answer)
        });
    }

    generateChoices(answer){
        let choices = [answer];
        for (var i = 0; i < 2; i++) {
            choices.push(generateColor());
        }
        return shuffle(choices);
    }

    checkAnswer(selection) {
        if (selection == this.state.answer.hex) {
            this.newColorSet();
            this.setState({
                combo: this.state.combo + 1,
                message: 'すっごーーーい！！'
            });
        } else {
            this.setState({
                combo: 0,
                message: `ちがうよ！ それは #${selection} ！`
            });
        }
    }

    render() {
        return (
            <div className='mainWrapper center'>
                <h1>#{this.state.answer.hex}</h1>
                <p>{this.state.message}</p>
                <div className='choice-box'>
                    {this.state.choices.map((color, idx) => {
                        return (
                            <div
                                key={`color-${idx}`}
                                className='color-choice'
                                style={{backgroundColor: `#${color.hex}`}}
                                onClick={() => this.checkAnswer(color.hex)}
                            />
                        );
                    })}
                </div>
                <p>combo: {this.state.combo}</p>
                <button
                    className='mainBtn prevBtn'
                    onClick={() => this.props.handleJump('index')}>
                    done
                </button>
            </div>
        );
    }
}
