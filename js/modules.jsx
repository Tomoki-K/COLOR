// common components
import React from "react";
import ReactDom from "react-dom";

export class Header extends React.Component {
    // constructor(){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <a href = './index.html'>home</a>
                <a href = './text.html'>text</a>
                <a href = './quiz.html'>quiz</a>
            </div>
        );
    }
}
