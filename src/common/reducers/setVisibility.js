/**
 * setVisibility 操作的这部分store，只有一个filter
 */
export const setVisibility = (state="SHOW_ALL",action) =>{
    switch (action.type) {
        case 'SETVISIBILITY':{
            console.log(action.filter)
            return action.filter
        }
        default:
            return state;
    }
}