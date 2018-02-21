import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { addTodo, toggleTodo, delTodo, setVisibility } from '../actions/todoList.js'

import './index.scss'

// todoList的顶层组件，倒出给其他使用
export class todoList extends React.Component{
    render(){
        return(
            <div className="todoList">
                <CHeaderFillter />
                <div className='TodosList'>
                    <CTodos />
                </div>
                <CAddTask />
            </div>
        )
    }
}

// 头部Fillter选项
const HeaderFillter = ({fillter, handleFilter}) =>(
    <div className="HeaderFillter">
        <span className="allTask" onClick={() => {handleFilter("SHOW_ALL")} }
            style={{ background: fillter === "SHOW_ALL" ? 'rgb(217, 250, 239)' : 'rgb(250, 248, 248)',
                color: fillter === "SHOW_ALL" ? 'white' : 'black'}}>
            全部任务
        </span>    
        <span className="waitTask" onClick={ ()=>{handleFilter("SHOW_ACTIVE")} }
            style={{ background: fillter === "SHOW_ACTIVE" ? 'rgb(217, 250, 239)' : 'rgb(250, 248, 248)' ,
                color: fillter === "SHOW_ACTIVE" ? 'white' : 'black' }} >
            带办任务
        </span>    
        <span className="finishTask" onClick={ ()=>{handleFilter("SHOW_COMPLETED")} }
            style={{ background: fillter === "SHOW_COMPLETED" ? 'rgb(217, 250, 239)' : 'rgb(250, 248, 248)', 
                color: fillter === "SHOW_COMPLETED" ? 'white' : 'black'}} >
            已完成任务
        </span>    
    </div>
)
// 在<HeaderFillter>组件的props上添加了一个名叫fillter的属性
const mapStateToPropsHeader = (state) =>{
    return { fillter: state.setVisibility }
}
const mapDispatchToPropsHeader = (dispatch) =>(
    { 
        handleFilter:(filter) => {
             dispatch(setVisibility(filter));
        }
    }
)

const CHeaderFillter = connect(mapStateToPropsHeader, mapDispatchToPropsHeader)(HeaderFillter);

//<Todos >中间内容区选项
const Todos = ({ todos, handleDettle, handleToggle}) =>{
    return(
        todos.map((todo)=>(
            <div key={todo.id} className="Todos">
                <span className="item" onClick={() => handleToggle(todo.id)}>
                    <i className="iconfont icon-duigou" 
                        style={{ 
                            backgroundColor: todo.completed ? 'rgb(217, 250, 239)':'white'}}
                    ></i>
                    <span 
                        style={{
                            textDecorationLine: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                    </span>
                </span>
                <span className="delete" onClick={() => handleDettle(todo.id)}>删除</span>
            </div>
        ))
    )
}
// 向<Todos>组件中的props中添加一个todos属性
const mapStateToPropsTodos = (state) => {
    switch (state.setVisibility) {
        case "SHOW_ALL":
            return { todos: state.todoList };
        case "SHOW_COMPLETED":
            return { todos: state.todoList.filter((todo) => todo.completed) }
        case "SHOW_ACTIVE":
            return { todos: state.todoList.filter((todo) => !todo.completed) }
        default:
            return { todos: state.todoList }
    }
}
// 向<Todos>组件的props中添加一个handleDettle方法 和一个handleToggle方法
const mapDispatchToPropsTodos = (dispatch) => (
    {
        handleDettle:(id) => {
            dispatch(delTodo(id))
        },
        handleToggle:(id) =>{
            dispatch(toggleTodo(id))
        }
    }
)
const CTodos = connect(mapStateToPropsTodos, mapDispatchToPropsTodos)(Todos);

//<AddTask /> 添加任务组件 无状态组件 使用函数形式
const AddTask = ({dispatch}) =>{ 
    let input = {};
    return(
        <div className="AddTask">
            <form className="wrap" 
                onSubmit={(e)=>{
                    e.preventDefault();
                    let value = input.value.trim();
                    if(!!value){
                        dispatch(addTodo(value));
                        input.value = "";
                    }
                        
                }}>
                <input className="input" type='text' ref={a=>input = a} placeholder="你想做点什么呢"/>
                <button className="button" type="submit">添加任务</button>
            </form>
        </div>
    )
} 
const CAddTask = connect()(AddTask);
