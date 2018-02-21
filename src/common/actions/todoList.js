let nextTodo = 0;

//增加代办项的action-creater
export const addTodo = (text) =>(
    {
        type: 'ADD_TODO',//必填
        id: nextTodo++,
        text
    }
)

// 改变代办事项的状态
export const toggleTodo = (id) => (
    {
        type: 'TOGGLETODO',//必填
        id
    }
)

// 删除代办事项
export const delTodo = (id) => (
    {
        type: 'DELTODO',//必填
        id
    }
)



// 显示不同的待办事项
// filter 的值有三种选项SHOW_ALL SHOW_COMPLETED SHOW_ACTIVE
export const setVisibility = (filter) => (
    {
        type: 'SETVISIBILITY',//必填
        filter
    }
)