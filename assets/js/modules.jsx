// common components
import React from "react";
import ReactDom from "react-dom";
require('../css/index.scss');

export class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='headerWrapper'>
                <ul>
                    <li key='index'><p onClick={() => this.props.handleJump('index')}>index</p></li>
                    <li key='about' className='right'><p onClick={() => this.props.handleJump('about')}>about</p></li>
                </ul>
            </div>
        );
    }
}
