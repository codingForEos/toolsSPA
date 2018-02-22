import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

import { ToggleMini } from "../actions/client.js";
import "./rightSide.scss";

// 经路由过来的组件
import { todoList } from "../todoContainer/index.js"
const RightSide1 = ({ skinOnof }) => {
    return (
        <div className="RightSide" 
            style={{ backgroundColor: skinOnof === "Dark" ? "rgb(145, 139, 99)" :"blanchedalmond"}}>
            <CHeaderMenu />
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
                    {/* <Redirect from="/" to="/todoList" /> */}
                </Switch>
            </div>
            <FooterBar/>
        </div>
    )
}
const mapStateToPropsRS = ( state ) =>(
    { skinOnof: state.ToggleSkin }
)
export const RightSide = connect(mapStateToPropsRS)(RightSide1);

//<HeaderMenu > 头部组件
const HeaderMenu = ({ onOf,handleToogle }) => {
    const transitionStyles = {
        entering: { transform: 'rotate(0deg)' },
        entered: { transform: 'rotate(180deg)' },
    };
    
    return(
        <div className='HeaderMenu'>
            <Transition in={onOf === 'NORMAL' ? true:false} timeout={0}>
                {(state) => (
                    <div style={{ ...transitionStyles[state] }} className="bar" 
                    onClick={ ()=>(handleToogle(onOf === 'NORMAL' ? 'MINI':'NORMAL')) }>
                        <i  className="iconfont icon-jiantouyou"></i>
                    </div>
                )}
            </Transition>
            <div className="user">
                <div><i className="iconfont icon-ren"></i></div>
                <h5>小狗</h5>
            </div>
        </div>
    )
}
const mapStateToPropsHM = (state) =>(
    { onOf: state.ToggleMini }
)
const mapDispatchToPropsHM =(dispatch) =>(
    { handleToogle: (text) => dispatch(ToggleMini(text)) } 
)
const CHeaderMenu = connect(mapStateToPropsHM, mapDispatchToPropsHM)(HeaderMenu);

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

