
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice";
import shopReducer from './components/shoppingCart/shopSlice';

export default configureStore({
    reducer: {
        users:usersReducer,
        shop:shopReducer
    },
});