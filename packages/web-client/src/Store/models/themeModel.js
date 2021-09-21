const themeModel = {
    name:'theme',
    state : {
        mode: '',
        color: ''
    },
    reducers:{
        setMode(state,payload){
            return {
                ...state,
                mode : payload
            }
        },
        setColor(state,payload){
            return {
                ...state,
                color : payload
            }
        }
    }
}

export default themeModel