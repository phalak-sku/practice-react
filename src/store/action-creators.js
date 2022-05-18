import { TYPE_DECREMENT, TYPE_INCREMENT } from "./action-types"


export const increment = ()=>({
type:TYPE_INCREMENT
});

export const decrement = () => ({
type:TYPE_DECREMENT
});