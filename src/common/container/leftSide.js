import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import {allMenu} from '../../common/utils/menu.js'
import "./leftSide.scss";

//<LeftSide content>
export class LeftSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="LeftSide">
                <HeaderMenubar />
                <ul>
                    {allMenu.map((menu) => <Menubar content={menu} mini={true} key={menu.url}/>)}
                </ul>
            </div>
        )
    }
}

// 首图有个旋转动画的功能，以后再添加
class HeaderMenubar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="HeaderMenubar">
                <div><a href="https://github.com/codingForEos/toolsSPA" target='_blank'><img src="./image/小狗狗.jpeg" alt="我的github仓库"/></a></div>
                <h1>小狗狗</h1>
            </div>
        )
    }
}
//<Menubar content={{}} mini={true} key={}/>
// 功能未完成，还有缩小成小图标，还有中间动画未添加
class Menubar extends React.Component{
    constructor(props){
        super(props)
        this.state = {spread:true}//默认情况下组件是不展开的
    }
    handleToggle = (e) =>{
        console.log('hahha');
        this.setState({spread:!this.state.spread});
    }
    render(){
        let { name, url, icon, children} = this.props.content;
        let spread = this.state.spread;
        let mini = this.props.mini;
        return(
            <li className='Menubar'>
                <div>
                    <div>
                        <div className="MenuListLogo"><i className={icon}></i></div>
                        <div className="MenuListName" >{name}</div>
                        {/* 无子菜单时，不需要下拉logo */}
                        {(typeof children !== 'undefined') &&
                        <div className="MenuListTip" ><i className="iconfont icon-jiantouarrow483"></i></div>}
                    </div>
                    {/* 遮罩层 */}
                    <div className='transparent' onClick={this.handleToggle}></div>
                </div>
                {/* 子菜单 */}
                <ul>
                    {(typeof children !== 'undefined') && (spread === true)
                        && (children.map((bar) => <Link className='Link' key={bar.name} to={bar.url}><li >{bar.name}</li></Link>))}
                </ul>
            </li>
        )
    }
}