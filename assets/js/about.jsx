import React from "react";

export default class About extends React.Component {
    render() {
        return (
            <div className='mainWrapper center'>
                <h1>ABOUT</h1>
                <table className='LOMtable'>
                    <tr>
                        <th>教材名称</th>
                        <td>COLOR(コロル)</td>
                    </tr>
                    <tr>
                        <th>概要</th>
                        <td>カラーコードの理解を深めることで，コンピューター上における色彩表現を学習する．</td>
                    </tr>
                    <tr>
                        <th>キーワード</th>
                        <td>美術(色)，カラーコード，RGB，16進数</td>
                    </tr>
                    <tr>
                        <th>目標</th>
                        <td>
                            色からおおよそのカラーコードを推測できるようになること<br/>
                            カラーコードからおおよその色を推測できるようになること
                        </td>
                    </tr>
                    <tr>
                        <th>対象者</th>
                        <td>プログラミング初心者</td>
                    </tr>
                    <tr>
                        <th>対象者の条件</th>
                        <td>正常に色が判別できること</td>
                    </tr>
                    <tr>
                        <th>学習時間</th>
                        <td>15分</td>
                    </tr>
                    <tr>
                        <th>使用料</th>
                        <td>120円/ライセンス</td>
                    </tr>
                    <tr>
                        <th>企画・制作</th>
                        <td>
                            あざらし。<br/>
                            同志社大学理工学部e-ラーニング2017 グループ10
                        </td>
                    </tr>
                    <tr>
                        <th>募集方法</th>
                        <td>同志社大学理工学部情報系学科/文化情報学部の学生を対象とし，10名程度募集する．</td>
                    </tr>
                    <tr>
                        <th>制作者</th>
                        <td>
                          <ul>
                            <li>1G151012 早戸洋介 [マネージャー]</li>
                            <li>1G151026 狩野智輝 [開発者]</li>
                            <li>1G151027 岸田慎之介 [専門家]</li>
                            <li>1G151042 森本陽貴 [設計者]</li>
                          </ul>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
