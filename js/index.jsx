import React from "react";
import ReactDom from "react-dom";
import { generateColor } from './functions.jsx'
import { Header } from "./modules.jsx";
require('../css/index.scss');

class Index extends React.Component {
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
            <div>
                <Header />
                <div className='mainWrapper center'>
                    <h1 style={{color: `#${this.state.color.hex}`}}>COLOR</h1>
                    <p>#{this.state.color.hex} rgb(
                            <span className='red'>{this.state.color.r}</span>,
                            <span className='green'>{this.state.color.g}</span>,
                            <span className='blue'>{this.state.color.b})</span>
                    </p>
                    <button onClick={() => this.newColor()}>new color!</button>
                </div>
            </div>
        );
    }
}
ReactDom.render(<Index/>, document.getElementById("app"));
