import React from "react";
import ReactDom from "react-dom";
import {} from './functions.jsx'
require('../css/index.scss');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color: this.generateColor()
        };
    }

    generateColor() {
        let color = {
            hex: null,
            r: Math.round(Math.random() * 256),
            g: Math.round(Math.random() * 256),
            b: Math.round(Math.random() * 256)
        };
        color.hex = (color.r.toString(16) + color.g.toString(16) + color.b.toString(16)).toUpperCase();
        return color;
    }

    newColor() {
        this.setState({color: this.generateColor()});
    }

    render() {
        return (
            <div className='mainWrapper'>
                <h1 style={{
                    color: `#${this.state.color.hex}`
                }}>{this.state.color.hex}</h1>
                <p>red: {this.state.color.r}</p>
                <p>green: {this.state.color.g}</p>
                <p>blue: {this.state.color.b}</p>
                <button onClick={() => this.newColor()}>new color!</button>
            </div>
        );
    }
}
ReactDom.render(
    <App/>, document.getElementById("app"));
