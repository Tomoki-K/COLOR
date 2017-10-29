import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import { If } from "./functions.jsx";

import text from '../json/text.json';

class Text extends React.Component {

    constructor(){
        super();
        this.state = {
            pg: 0,
            currentPg: text['text_0'].text,
            nextPg: text['text_1']
        }
        this.loadNextPage = this.loadNextPage.bind(this);
        this.loadFirstPage = this.loadFirstPage.bind(this);
    }

    loadNextPage(){
        const nextPg = this.state.pg + 1;
        this.setState({
            pg: nextPg,
            currentPg: text['text_' + nextPg].text,
            nextPg: text['text_' + (nextPg + 1)] || null
        });
    }

    loadFirstPage(){
        this.setState({
            pg: 0,
            currentPg: text['text_0'].text,
            nextPg: text['text_1']
        });
    }

    render() {
        return (
            <div className='mainWrapper'>
                <ReactMarkdown source={this.state.currentPg} />
                <If condition={this.state.nextPg != null}>
                    <button onClick={this.loadNextPage}>next page</button>
                </If>
                <If condition={this.state.nextPg == null}>
                    <button onClick={this.loadFirstPage}>restart</button>
                </If>
            </div>
        );
    }
}
ReactDom.render(
    <Text/>, document.getElementById("text"));
