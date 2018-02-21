/**
 * addTodo ToggleTodo delTodo 操作的这部分store的结构为
 * [{
 *  ID：1，//代办事项的唯一id
 *  text："XXX" ，//代办事项的内容
 *completed:"false" //代办事项是否完成的标志位
 * },
 * []]
 */
export const todoList = (state=[],action)=>{
    switch (action.type) {
        // 在已有的todoList上添加新的一项
        case "ADD_TODO":{
            let newState =   [
                    ...state,
                    {
                        id:action.id,
                        text:action.text,
                        completed:false
                    }
                ]
            console.log(newState);
            return (newState);
        }
        case "TOGGLETODO": {
            return (
                state.map((todo)=>{
                    if(todo.id !== action.id){
                        return todo;
                    }
                    // 注意！这里不能直接修改todo的值，只能使用Object.assign方法将todo和需要修改的属性合成新的对象。
                    if(todo.id == action.id){
                        return Object.assign({},todo,{completed:!todo.completed});
                    }
                })
            )
        }
        case "DELTODO": {
            return (
                state.filter((todo) => todo.id !== action.id)
            )
        }
        default:
            return state;
    }
}