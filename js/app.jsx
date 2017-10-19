import React from "react";
import ReactDom from "react-dom";
import { getColorAttr } from './functions.jsx'

class App extends React.Component {
    constructor(){
        super();
        this.state = {color: this.generateColor()};
    }

    generateColor(){
        var hex = '';
        while(hex.length < 6){
            hex = hex.concat((Math.round(Math.random()*256)).toString(16));
        }
        return hex;
    }

    newColor(){
        this.setState({color: this.generateColor()});
    }

    render() {
        return (
            <div>
                <h1 style={{color:`#${this.state.color}`}}>{this.state.color}</h1>
                <p>red: {getColorAttr(this.state.color, 'r')}</p>
                <p>green: {getColorAttr(this.state.color, 'g')}</p>
                <p>blue: {getColorAttr(this.state.color, 'b')}</p>
                <button onClick={()=>this.newColor()}>new color!</button>
            </div>
        );
    }
}
ReactDom.render(<App/>,  document.getElementById("app"));
