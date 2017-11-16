import React from "react";

export default class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.unlock = this.unlock.bind(this);
    }

    unlock(){
        this.props.handleUnlock(this.props.textPage);
        this.props.handleJump('index');
    }

    render(){
        return(
            <div className='mainWrapper center'>
                {this.props.textPage}
                <br/>
                <button onClick={this.unlock}>index(仮)</button>
            </div>
        );
    }
}
