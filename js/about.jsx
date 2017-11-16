import React from "react";

export default class About extends React.Component {
    render() {
        return (
            <div className='mainWrapper center'>
                <h1>LOM情報</h1>
                <table className='LOMtable'>
                    <tr>
                        <th>行-1</th>
                        <td>
                            multi<br/>
                            line<br/>
                            foooo<br/>
                        </td>
                    </tr>
                    <tr>
                        <th>行-2</th>
                        <td>A-2</td>
                    </tr>
                    <tr>
                        <th>行-3</th>
                        <td>A-3</td>
                    </tr>
                </table>
            </div>
        );
    }
}
