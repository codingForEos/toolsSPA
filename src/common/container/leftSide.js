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

import { ToggleSkin } from "../actions/client.js";
import {allMenu} from '../../common/utils/menu.js';
import "./leftSide.scss";

//<LeftSide content>
const LeftSide1 = ({ onOf, skinOnof}) =>{
    const transitionStyles = {
        entering: { width: '200px' },
        entered: { width: '65px' },
    };
    return(
        <Transition in={onOf === 'MINI' ? true : false} timeout={0}>
            {(state) => (
                <div className="LeftSide" style={{ ...transitionStyles[state]}}>
                    <HeaderMenubar />
                    <ul>
                        {allMenu.map((menu) => <Menubar content={menu} mini={true} key={menu.url} />)}
                    </ul>
                    <SKin/>
                </div>
            )}
        </Transition>
    )
}
const mapStateToPropsLS =(state) => (
    { onOf: state.ToggleMini,
      skinOnof: state.ToggleSkin
    }
)
export const LeftSide = connect(mapStateToPropsLS)(LeftSide1); 

class HeaderMenubar1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { rotate:0 }
        this.transitionStyles = {
            entering: { flex: '1' },
            entered: { flex: '0' },
        };
        setInterval(() => {
            // console.log(this.state.rotate);
            this.setState({ rotate: this.state.rotate+0.08 })
        }, 1)
    }
    render(){
        return(
            <div className="HeaderMenubar">
                <div>
                    <div style={{ transform: `rotate(${this.state.rotate}deg)`}} >
                        <a href="https://github.com/codingForEos/toolsSPA" target='_blank'>
                            <img src="./image/小狗狗.jpeg" alt="我的github仓库" />
                        </a>
                    </div>
                </div>
                <Transition in={this.props.onOf === 'MINI' ? true : false} timeout={0}>
                    {(state) => (
                        <h1 onClick={this.handleToggle} style={{ ...this.transitionStyles[state] }}>小狗</h1>
                    )}
                </Transition>
            </div>
        )
    }
}
const mapStateToPropsHMB = (state) => (
    { onOf: state.ToggleMini }
)
const HeaderMenubar = connect(mapStateToPropsHMB)(HeaderMenubar1);

//<Menubar content={{}} mini={true} key={}/>
// 功能未完成，还有缩小成小图标，还有中间动画未添加
class Menubar1 extends React.Component{
    constructor(props){
        super(props)
        this.state = { spread: false, spreadMINI: false}//默认情况下组件是不展开的
        this.transitionStyles = {
            entering: { flex: '7' },
            entered: { flex: '0' },
        };
        this.transitionStyles1 = {
            entering: { transform:'scale(0.75)' },
            entered: { transform: 'scale(1)' },
        };
        this.transitionStyles2 = {
            entering: { height: '40px' },
            entered: { height: '0px' },
        };
        this.transitionStyles3 = {
            entering: { opacity: '0',transform: 'scale(0)'},
            entered: { opacity: '1', transform: 'scale(1)'},
            exiting: { opacity: '1', transform: 'scale(1)'},
            exited: { opacity: '0', transform: 'scale(0)'}
        };
    }
    handleToggle = (e) =>{
        this.setState({spread:!this.state.spread});
    }
    handleOnmouseover = () =>{
        if (this.props.onOf === "MINI") {
            this.setState({ spreadMINI: true })
        }
    }
    handleOnmouseout = () =>{
        if(this.props.onOf === "MINI"){
            this.setState({ spreadMINI:false})
        }
    }
    render(){
        let { name, url, icon, children} = this.props.content;
        let spread = this.state.spread;
        let spreadMINI = this.state.spreadMINI;
        let mini = this.props.mini;
        let onOf = this.props.onOf
        return(
            <li className='Menubar' onMouseOver={this.handleOnmouseover} onMouseOut={this.handleOnmouseout}>
                <div>
                    <div>
                        <Transition in={onOf === 'MINI' ? true : false} timeout={0}>
                            {(state) => (
                                <div className="MenuListLogo" 
                                style={{...this.transitionStyles1[state]}}><i className={icon}></i></div>
                            )}
                        </Transition>
                        <Transition in={onOf === 'MINI' ? true : false} timeout={0}>
                            {(state) => (
                                <div style={{ ...this.transitionStyles[state] }}>
                                    <div className="MenuListName" >{name}</div>
                                    {/* 无子菜单时，不需要下拉logo */}
                                    {(typeof children !== 'undefined') &&
                                    <div className="MenuListTip" ><i className="iconfont icon-jiantouarrow483"></i></div>}
                                </div>
                            )}
                        </Transition>
                    </div>
                    {/* 遮罩层 */}
                    <div className='transparent' onClick={this.handleToggle}></div>
                </div>
                {/* 子菜单 */}
                {/* NORMAL模式下菜单的时候显示的组件 */}
                {(typeof children !== 'undefined') &&
                    <ul className="Tipmuber">
                        <Transition in={(spread === true) && onOf === 'NORMAL' ? false : true} timeout={0}>
                            {(state) => (
                                (children.map((bar) => <Link className='Link' key={bar.name} to={bar.url}><li style={{ ...this.transitionStyles2[state] }}>{bar.name}</li></Link>))
                            )}
                        </Transition>
                    </ul>
                }
                {/* MINI模式下显示组件的方式 */}
                {/* NORMAL模式下菜单的时候显示的组件 */}
                {(typeof children !== 'undefined') && 
                    <Transition in={(spreadMINI === true) && onOf === 'MINI' ? true : false} timeout={{enter:0,exit:100}}>
                    {(state) => (
                        <ul className="TipmuberMINI"
                            onMouseOver={this.handleOnmouseover}
                            onMouseOut={this.handleOnmouseout}
                            style={{ ...this.transitionStyles3[state] }}>
                                {(children.map((bar) => <Link className='Link' key={bar.name} to={bar.url}><li>{bar.name}</li></Link>))}
                        </ul>
                    )}
                    </Transition>
                }
            </li>
        )
    }
}
const mapStateToPropsMB = (state) => (
    { onOf: state.ToggleMini }
)
const Menubar = connect(mapStateToPropsMB)(Menubar1);

// 皮肤开关
const Skin1 = ({skinOnof,handleOnof}) => {
    const transitionStyles = {
        entering: { flex: '2' },
        entered: { flex: '0' },
    }
    const transitionStyles1 = {
        entering: { flex: '0' },
        entered: { flex: '2' },
    }
    return(
        <div className="Skin">
            <span onClick={()=>handleOnof(skinOnof === "Dark" ? 'Light':'Dark')}>
                <Transition in={skinOnof === 'Dark' ? true : false } timeout={0}>
                    {(state) => (
                        <i className="Dark" style={{ ...transitionStyles[state] }}>LIGHT</i>
                    )}
                </Transition>
                <span></span>
                <Transition in={skinOnof === 'Dark' ? true : false} timeout={0}>
                    {(state) => (
                        <i className="Light" style={{ ...transitionStyles1[state] }}>DARK</i>
                    )}
                </Transition>
            </span>
        </div>
    )
}
const mapStateToPropsSK = (state) =>(
    { skinOnof: state.ToggleSkin }
)
const mapDispatchToPropsSK = (dispatch) => (
    { handleOnof: (text) => dispatch(ToggleSkin(text)) }
)
const SKin = connect(mapStateToPropsSK, mapDispatchToPropsSK)(Skin1);