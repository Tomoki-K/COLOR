import React from "react";
import { generateColor, shuffle } from './functions.jsx';

export default class PostTest extends React.Component {
    constructor() {
        let answer = generateColor();
        super();
        this.state = {
            level: 1,
            combo: 0,
            status: 'which color?',
            answer: answer,
            choices: this.generateChoices(answer, 1)
        };
    }

    newColorSet(){
        let answer = generateColor();
        this.setState({
            answer: answer,
            choices: this.generateChoices(answer, this.state.level)
        });
    }

    generateChoices(answer, level){
        let choices = [answer];
        for (var i = 0; i < level; i++) {
            choices.push(generateColor());
        }
        return shuffle(choices);
    }

    checkAnswer(selection) {
        if (selection == this.state.answer.hex) {
            this.newColorSet();
            this.setState({
                combo: this.state.combo + 1,
                status: 'correct!'
            });
        } else {
            this.setState({
                combo: 0,
                status: `wrong! That color was #${selection}`
            });
        }
    }

    render() {
        return (
            <div className='mainWrapper center'>
                <h1>#{this.state.answer.hex}</h1>
                <p>{this.state.status}</p>
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
            </div>
        );
    }
}
