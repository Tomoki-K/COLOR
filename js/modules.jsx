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
                <ul>
                    <li key='index'><a href='./index.html'>home</a></li>
                    <li key='text'><a href='./text.html'>text</a></li>
                    <li key='quiz'><a href='./quiz.html'>quiz</a></li>
                    <li key='about' className='right'><a href='./about.html'>about</a></li>
                </ul>
            </div>
        );
    }
}
