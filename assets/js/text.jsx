import React from "react";
import ReactMarkdown from "react-markdown";
import { If } from "./functions.jsx";
import { Header } from "./modules.jsx";

import text from '../json/text.json';

export default class Text extends React.Component {

    render() {
        const page = text[this.props.textPage];
        return (
            <div className='mainWrapper'>
                <ReactMarkdown source={page.text} className='mdZone'/>
                <p className='nextBtn' onClick={() => {this.props.handleJump('quiz', this.props.textPage)}}>練習問題へ >></p>
            </div>
        );
    }
}
