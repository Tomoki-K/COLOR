import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";

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
    }

    loadNextPage(){
        if (this.state.nextPg == null) return false;
        const nextPg = this.state.pg + 1;
        this.setState({
            pg: nextPg,
            currentPg: text['text_' + nextPg].text,
            nextPg: text['text_' + (nextPg + 1)] || null
        });
    }

    render() {
        return (
            <div className='mainWrapper'>
                <ReactMarkdown source={this.state.currentPg} />
                <button onClick={this.loadNextPage}>next page</button>
            </div>
        );
    }
}
ReactDom.render(
    <Text/>, document.getElementById("text"));
