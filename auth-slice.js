import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: localStorage.getItem('token'), type: ""},
    reducers: {
        login(state, action) {
            const token = action.payload.token
            localStorage.setItem('token', token)
            state.token = token
            state.type= action.payload.type
        },
        logout(state) {
            localStorage.removeItem('token')
            state.token = undefined
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
