import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import "./rightSide.scss";

// 经路由过来的组件
import { todoList } from "../todoContainer/index.js"
export const RightSide = () => {
    return (
        <div className="RightSide">
            <HeaderMenu />
            <div className='content'>
                <Switch>
                    <Route path='/music' component={Music}/>
                    <Route path='/tools' component={Tools}/>
                    <Route path='/editor' component={Editor}/>
                    <Route path='/todoList' component={todoList}/>
                    <Route path='/album' component={Album}/>
                    <Route path='/searchEngine' component={SearchEngine}/>
                    <Route path='/searchEngine' component={Tools}/>
                    <Route path='/todo' component={Todo}/>
                    {/* 调试方便直接跳转到需要调试的页面 */}
                    <Redirect from="/" to="/todoList" />
                </Switch>
            </div>
            <FooterBar/>
        </div>
    )
}

//<HeaderMenu > 头部组件
class HeaderMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {direction:'left'}//图标样式，想左还是向右。
    }
    handleToogle = () =>{
        console.log(`菜单变化:${this.state.direction}`);
        this.setState(
            {direction:this.state.direction === 'right' ? 'left' : 'right'}
        )
    }
    render(){
        let direction = this.state.direction;
        return(
            <div className='HeaderMenu'>
                <div className="bar"
                    onClick={this.handleToogle}>
                    <i className={direction === "right" ? "iconfont icon-jiantouyou" : "iconfont icon-jiantouzuo"}></i>
                </div>
                <div className="user">
                    <div><i className="iconfont icon-ren"></i></div>
                    <h5>小狗</h5>
                </div>
            </div>
        )
    }
}

//<FooterBar>
class FooterBar extends React.Component{
    render(){
        return(
            <div className="FooterBar">
                <span className="message">© 2018 CodeForEos</span>
                <span className="time">您已在小窝里逗留了XX秒</span>
            </div>
        )
    }
}











// 待开发组件
const Music = () => <div>音乐系列</div>
const Tools = () => <div>小应用</div>
const Editor = () => <div>富文本编辑器</div>
const Album = () => <div>时光照片</div>
const SearchEngine = () => <div>搜索引擎</div>
const Todo = () => <div>更多模块开发中</div>

