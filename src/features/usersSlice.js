import { createSlice } from "@reduxjs/toolkit";
const initialState =[
    {
        id:1,
        name:'David',
        email:'dave@gmail.com'
    },
    {
        id:2,
        name:'phalak',
        email:'phalak@gmail.com'
    }
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        editUser(state,action) {
            return state.map(x=>x.id === action.payload.id ? action.payload : x);
        },
        deleteUser(state,action) {
            return state.filter(x=>x.id !== action.payload.id);
        }
    }
});
export const {addUser,editUser,deleteUser} =usersSlice.actions;

export default usersSlice.reducer;