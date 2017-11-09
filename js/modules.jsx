// common components
import React from "react";
import ReactDom from "react-dom";
require('../css/index.scss');

export class Header extends React.Component {
    // constructor(){
    //     super(props);
    // }

    render(){
        return(
            <div className='headerWrapper'>
                <a href='./index.html'><button className="headerBtn">home</button></a>
                <a href='./text.html'><button className="headerBtn">text</button></a>
                <a href='./quiz.html'><button className="headerBtn">quiz</button></a>
            </div>
        );
    }
}
