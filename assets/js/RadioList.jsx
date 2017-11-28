import React from 'react';

export default class RadioList extends React.Component {
    constructor(props){
        super(props);
    }

    handleChangeValue(ans){
        this.props.onChangeValue({qNum: this.props.qNum, ans});
    }

    render() {
        return (
            <ul className={`radioBoxList is_${this.props.name}`}>
                {this.props.items.map((item, idx) => {
                    return (
                        <li key={`${this.props.name}-${idx}`}>
                            <label>
                                <input
                                    type='radio'
                                    className={this.props.checked === idx ? 'radio-checked' : 'radio'}
                                    name={this.props.name}
                                    disabled={this.props.disabled}
                                    key={`radio-${this.props.name}-${idx}`}
                                    onChange={() => this.handleChangeValue(idx)}/>
                                {item}
                            </label>
                        </li>
                    )}
                )}
            </ul>
        );
    }
}
