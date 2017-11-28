import React from "react";
import ReactMarkdown from "react-markdown";
import { If } from "./functions.jsx";
import { Header } from "./modules.jsx";

// import markdown here
const text_color = require('raw-loader!../md/color.md');
const text_rgb = require('raw-loader!../md/rgb.md');
const text_hex = require('raw-loader!../md/hex.md');

export default class Text extends React.Component {

    render() {
        return (
            <div className='mainWrapper'>
                <ReactMarkdown
                    escapeHtml={false}
                    source={eval(`text_${this.props.textPage}`)} className='mdZone'/>
                <button
                    className='nextBtn mainBtn medium'
                    onClick={() => {this.props.handleJump('quiz', this.props.textPage)}}>
                    練習問題へ
                </button>
            </div>
        );
    }
}
