/**
 * ToggleMini 操作的这部分store，
 * state的值“MINI” “NORMAL”
 */
export const ToggleMini = (state = "NORMAL", action) => {
    switch (action.type) {
        case 'TOGGLE_MINI': {
            // console.log(action.text)
            return action.text
        }
        default:
            return state;
    }
}
/**
 * ToggleSkin 操作的这部分store，
 * state的值"Dark"、"Light"
 */
export const ToggleSkin = (state = "Light",action) => {
    switch (action.type) {
        case "TOGGLE_SKIN":{
            console.log(action.text);
            return action.text;
        }
        default:
            return state;
    }
}