import React from 'react';
import { If } from './functions.jsx';

export default class RadioList extends React.Component {
    constructor(props){
        super(props);
    }

    handleChangeValue(ans){
        this.props.onChangeValue({qNum: this.props.qNum, ans});
    }

    render() {
        return (
            <ul className={`radioList is_${this.props.name}`}>
                {this.props.items.map((item, idx) => {
                    const correctAns = this.props.answer === idx;
                    const checked = this.props.checked === idx;
                    let status = '';
                    if (checked && correctAns) {
                        status = 'correct'
                    } else if (checked && !correctAns) {
                        status = 'wrong'
                    } else if (!checked && correctAns) {
                        status = 'correctAns'
                    }
                    return (
                        <li className={`radioItem ${status}`} key={`${this.props.name}-${idx}`}>
                            {/* choices for normal quizes */}
                            <If condition={this.props.type != 'final'}>
                                <label>
                                    <input
                                        type='radio'
                                        name={this.props.name}
                                        disabled={this.props.disabled}
                                        key={`radio-${this.props.name}-${idx}`}
                                        onChange={() => this.handleChangeValue(idx)}></input>
                                    {item}
                                </label>
                            </If>
                            {/* choices for 'final' quizes */}
                            <If condition={this.props.type == 'final'}>
                                <label>
                                    <input
                                        type='radio'
                                        name={this.props.name}
                                        disabled={this.props.disabled}
                                        key={`radio-${this.props.name}-${idx}`}
                                        onChange={() => this.handleChangeValue(idx)}></input>
                                    {item.hex}
                                </label>
                            </If>
                        </li>
                    )}
                )}
            </ul>
        );
    }
}
