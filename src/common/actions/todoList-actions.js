import {createAction} from 'redux-actions';
/**
 * redux-actions 是一个action生成器的生成器，调用后生成一个action生成器，这个actions中只对type进行了定义
 */
// addTodo为增加代办事项的action-creater
export const addTodo = createAction("ADD_TODO");
// 显示待办 已办 未办事项
export const setVisibility = createAction('SET_VISIBILITY')
// 改变项目状态
export const toggleTodo = createAction('TOGGLE_TODO');
// 删除事项
export const delTodo = createAction('DEL_TODO');
