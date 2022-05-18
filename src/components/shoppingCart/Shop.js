import { useDispatch, useSelector } from "react-redux";
import { addToCart, resetCart } from "./shopSlice";

export function Shop() {
    const products = useSelector(s=>s.shop.products);
    const cart = useSelector(s=>s.shop.cart);
    const cartLength = cart.length;
    const test = useSelector(s=>s.shop);
    console.log("tets",test);
    const dispatch = useDispatch();
    
return(
    <div className="row">
        <h1>My Shop</h1>
        <label style={{textAlign:'left', margin:'2rem'}}>Products</label>
        <table className = "u-full-width" style={{margin:'2rem'}}>
            <thead style={{fontFamily:"cursive"}}>
                <tr>
                <th>Product</th>
                <th>Cost</th>
                <th>Products left!</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {products.map(x=>
            <tr key ={x.id}>
                <td>{x.name}</td>
                <td>${x.cost}</td>
                <td>{x.count}</td>
                <td><button className="button-primary" disabled = {x.count === 0 ? true :false } onClick={()=>dispatch(addToCart({id:x.id}))}> {x.count > 0 ? 'Add to cart' : 'Sold Out'}</button></td>
            </tr>)}
            </tbody>
        </table>
        <label style={{textAlign:'left', margin:'2rem'}}>Your Cart</label>
        <table  style={{margin:'2rem'}}>
            <tbody>
              {cartLength >0 ? cart.map(x=>
                <tr key={x.id} >
                <td>{x.name} - ${x.cost} * {x.count}</td>
                </tr>
                ) : <tr><td>Please add some products to cart</td></tr>}  
                <tr>
                <td>
                <b>Your Total</b>: ${cartLength >0 ? cart.reduce((accum,current)=>{
                return (current.cost*current.count) +accum
                },0): 0}
                </td>
                </tr>
                <tr>
                    <td><button className="button-primary" disabled={cartLength > 0 ? false : true} onClick={()=>{alert("Thanks for order!");dispatch(resetCart())}}>Checkout</button></td>
                </tr>
            </tbody>
        </table>
    </div>
);
}