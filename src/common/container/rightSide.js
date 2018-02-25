import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux';

import history from "../../common/utils/history.js"
import Transition from 'react-transition-group/Transition';

import { ToggleMini } from "../actions/client.js";
import "./rightSide.scss";

// 经路由过来的组件
import { todoList } from "../todoContainer/index.js"


export const RightSide = () => {
    return (
        <div className="RightSide" >
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
                <Route path='/login' component={Login} />
                    调试方便直接跳转到需要调试的页面
                <Redirect from="/" to="/login" />
                </Switch>
            </div>
            <FooterBar/>
        </div>
    )
}

//<HeaderMenu > 头部组件
class  HeaderMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = { hoverExitButton: false}
        this.transitionStyles = {
            entering: { transform: 'rotate(0deg)' },
            entered: { transform: 'rotate(180deg)' },
        }
        this.transitionStyles1 = {
            entering: { height: '0px', opacity: '0' },
            entered: { height: '60px', opacity: '1' },
            exiting: { height: '60px', opacity: '1' },
            exited: { height: '0px', opacity: '0' }
        }
    }
    overExitButton = () =>{
        console.log("劲来" + this.statehoverExitButton);
        this.setState({hoverExitButton:true});
    }
    outExitButton = () =>{
        console.log("出来" + this.state.hoverExitButton);
        this.setState({hoverExitButton:false});
    }
    render(){
        let hoverExitButton = this.state.hoverExitButton;
        return(
            <div className='HeaderMenu'>
                <Transition in={this.props.onOf === 'NORMAL' ? true:false} timeout={0}>
                    {(state) => (
                        <div style={{ ...this.transitionStyles[state] }} className="bar" 
                        onClick={ ()=>(this.props.handleToogle(this.props.onOf === 'NORMAL' ? 'MINI':'NORMAL')) }>
                            <i  className="iconfont icon-jiantouyou"></i>
                        </div>
                    )}
                </Transition>
                <ul className="user">
                    <li className="message" onMouseOver={this.overExitButton} onMouseOut={this.outExitButton}>
                        <div><i className="iconfont icon-ren"></i></div>
                        <h5>小狗</h5>
                    </li>
                    <Transition in={hoverExitButton} timeout={{ enter: 0, exit: 100 }}>
                        {(state) => (
                            <li className="exitButton" style={{ ...this.transitionStyles1[state] }}
                                onMouseOver={this.overExitButton} onMouseOut={this.outExitButton}>
                                <Link to='/login'><h5>退出</h5> </Link>
                            </li>
                        )}
                    </Transition>
                </ul>
            </div>
        )
    }
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
// react渲染

//登陆页
class Login extends React.Component{
    constructor(props){
        super(props)
    }
    handleLogin = (e) =>{
        e.preventDefault();
        
        history.push('/todolist');
    }
    render(){
        return(
            <form className='login' onSubmit={(e)=>this.handleLogin(e)}>
                <div className='user'><input type='text' placeholder="用户名"></input></div>
                <div className='passWord'><input type="password" placeholder="密码"></input></div>
                <div className='submit'><button type='submit'>提交</button></div>
            </form>
        )
    }
} 

