// 放置关于主界面的action
//改变导航菜单的显示方式的action-creater
// text的值可以为“MINI” “NORMAL”
export const ToggleMini = (text) => (
    {
        type: 'TOGGLE_MINI',//必填
        text
    }
)
// 改变导航菜单的皮肤
//text的值可以为"Dark"、"Light"
export const ToggleSkin = (text) => (
    {
        type:'TOGGLE_SKIN',
        text
    }
)