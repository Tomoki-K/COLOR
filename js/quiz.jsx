import React from "react";
import ReactDom from "react-dom";
import { generateColor, shuffle } from './functions.jsx'
require('../css/index.scss');

class Quiz extends React.Component {
    constructor() {
        let answer = generateColor();
        super();
        this.state = {
            combo: 0,
            status: 'which color?',
            answer: answer,
            choices: shuffle([generateColor(), generateColor(), answer])
        };
    }

    newColor(){
        let answer = generateColor();
        this.setState({
            answer: answer,
            choices: shuffle([generateColor(), generateColor(), answer])
        });
    }

    checkAnswer(selection) {
        if (selection == this.state.answer.hex) {
            this.newColor();
            this.setState({combo: this.state.combo + 1, status: 'correct!'});
        } else {
            this.setState({combo: 0, status: 'wrong!'});
        }
    }

    render() {
        return (
            <div className='mainWrapper'>
                <h1>#{this.state.answer.hex}</h1>
                <p>{this.state.status}</p>
                <div className='choice-box'>
                    {this.state.choices.map((color, idx) => {
                        return (
                            <button
                                className='color-choice'
                                style={{backgroundColor: `#${color.hex}`}}
                                onClick={() => this.checkAnswer(color.hex)}
                            />
                        );
                    })}
                </div>
                <p>combo: {this.state.combo}</p>
                <br/>
                <a href='./index.html'>home</a>
            </div>
        );
    }
}
ReactDom.render(
    <Quiz/>, document.getElementById("quiz"));
