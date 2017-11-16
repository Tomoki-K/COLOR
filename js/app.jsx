import React from "react";
import ReactDom from "react-dom";
import { generateColor, If } from './functions.jsx'
import { Header } from "./modules.jsx";
import About from "./about.jsx";
import Text from "./text.jsx";
import Quiz from "./quiz.jsx";
import PostTest from "./post-test.jsx";
require('../css/index.scss');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'title',
            textPage: null,
            pages: [
                {label: '色の世界', type: 'text', value: 'color', unlocked: true},
                {label: 'RGB', type: 'text', value: 'rgb', unlocked: false},
                {label: '16進数', type: 'text', value: 'hex', unlocked: false},
                {label: '最終テスト', type: 'post-test', value: '', unlocked: false}
            ],

            color: generateColor()
        };
        this.jumpto = this.jumpto.bind(this);
        this.unlockNextPage = this.unlockNextPage.bind(this);
    }

    newColor() {
        this.setState({color: generateColor()});
    }

    jumpto(nextPage, text){
        this.setState({
            page: nextPage,
            textPage: text
        });
    }

    unlockNextPage(current){
        const idx = this.state.pages.findIndex(p => p.value == current);
        this.state.pages[idx + 1].unlocked = true;
    }

    render() {
        return (
            <div>
                <Header handleJump={this.jumpto}/>
                {/* ===== TITLE PAGE ===== */}
                <If condition={this.state.page == 'title'}>
                    <div className='mainWrapper center'>
                        <h1 style={{color: `#${this.state.color.hex}`}}>COLOR</h1>
                        <p>#{this.state.color.hex} rgb(
                                <span className='red'>{this.state.color.r}</span>,
                                <span className='green'>{this.state.color.g}</span>,
                                <span className='blue'>{this.state.color.b})</span>
                        </p>
                        <button onClick={() => this.jumpto('index')}>index</button>
                    </div>
                </If>
                {/* ===== INDEX PAGE ===== */}
                <If condition={this.state.page == 'index'}>
                    <div className='mainWrapper center'>
                        <h1>index</h1>
                        <div className='indexList'>
                            {this.state.pages.map((page, idx)=>{
                                return(
                                    <p
                                        className={page.unlocked ? 'unlocked' : 'locked'}
                                        key={`page-${page.value}`}
                                        onClick={()=> (page.unlocked) ? this.jumpto(page.type, page.value) : {}}>
                                        {idx + 1}.  {page.label}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </If>
                {/* ===== PRE-TEST PAGE ===== */}
                <If condition={this.state.page == 'pre-test'}>

                </If>
                {/* ===== TEXT PAGE ===== */}
                <If condition={this.state.page == 'text'}>
                    <Text textPage={this.state.textPage} handleJump={this.jumpto}/>
                </If>
                {/* ===== QUIZ PAGE ===== */}
                <If condition={this.state.page == 'quiz'}>
                    <Quiz
                        textPage={this.state.textPage}
                        handleJump={this.jumpto}
                        handleUnlock={this.unlockNextPage}/>
                </If>
                {/* ===== POST-TEST PAGE ===== */}
                <If condition={this.state.page == 'post-test'}>
                    <PostTest />
                </If>
                {/* ===== ABOUT PAGE ===== */}
                <If condition={this.state.page == 'about'}>
                    <About />
                </If>
            </div>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("app"));
