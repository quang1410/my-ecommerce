import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: 'themes',
    initialState:{
        mode: '',
        color: ''
    },
    reducers:{
        setMode(state,action){
            state.mode=action.payload
        },
        setColor(state,action){
            state.color=action.payload
        }
    }
})

// Action export
export const themeActions  = ThemeSlice.actions

// Export reducer
export default ThemeSlice