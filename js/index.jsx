import React from "react";
import ReactDom from "react-dom";
import { generateColor } from './functions.jsx'
import { Header } from "./modules.jsx";
require('../css/index.scss');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color: generateColor()
        };
    }

    newColor() {
        this.setState({color: generateColor()});
    }

    render() {
        return (
            <div className='mainWrapper'>
                <Header />
                <h1 style={{color: `#${this.state.color.hex}`}}>#{this.state.color.hex}</h1>
                <p>rgb(
                        <span className='red'>{this.state.color.r}</span>,
                        <span className='green'>{this.state.color.g}</span>,
                        <span className='blue'>{this.state.color.b})</span>
                </p>
                <button onClick={() => this.newColor()}>new color!</button>
                <br/>
                <a href = './quiz.html'>quiz page</a>
                <br/>
                <a href = './text.html'>text page</a>
            </div>
        );
    }
}
ReactDom.render(
    <App/>, document.getElementById("app"));
