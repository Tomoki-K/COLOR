import React from "react";
import ReactDom from "react-dom";

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

    render() {
        return (
            <div>
                <h1 style={{color:`#${this.state.color}`}}>{this.state.color}</h1>
            </div>
        );
    }
}
ReactDom.render(<App/>,  document.getElementById("app"));
