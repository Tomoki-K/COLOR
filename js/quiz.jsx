import React from "react";

export default class Quiz extends React.Component {
    render(){
        return(
            <div className='mainWrapper center'>
                {this.props.textPage}
            </div>
        );
    }
}
