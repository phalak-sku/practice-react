import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products:[
        {
            id:253482,
            name:'teddy bear',
            count:6,
            cost: 20
        },
            {
                id:253483,
                name:'coffe mug',
                count:20,
                cost: 8
            },
            {
                id:253484,
                name:'photo frame',
                count:16,
                cost: 25
            }
        
    ],
    cart:[]
}

const shopSlice = createSlice({
    name:'shop',
    initialState,
    //state.cart.map(x=>x.id === itemId ? {...x, count: x.count + 1} : x) ? ...state.cart,itemto
    //state.products.map(x=>itemId === x.id ? {...x , count: x.count - 1} : x),
    reducers:{
        addToCart(state,action) {
            const itemId =  action.payload.id;
            const itemToAdd = state.products.find((x)=>x.id === itemId);
            const inCartItem = state.cart.find((x)=>x.id === itemId);
            console.log('inCart',inCartItem);
            return{
              ...state,
              products:state.products.map(x=>itemId === x.id ? {...x , count: x.count - 1} : x),
              cart: (inCartItem ? state.cart.map(x=>x.id === itemId ? {...x, count: x.count + 1} : x)  : state.cart.concat({...itemToAdd,count:1}))
              }
            },
        resetCart(state,action) {
            return {
                ...state,
                cart : []
            }
        }
        }
});

export const {addToCart,resetCart} = shopSlice.actions;
export default shopSlice.reducer