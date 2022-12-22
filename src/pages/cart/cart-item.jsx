import React ,{useContext}from "react";
import{ShopContext} from"../../context/shop-context"
export const CartItem=(props)=>{
    const {id,productName,price,productImage}=props.data;
    const {cartItems,addToCart,removefromCart,updatecartItemCount}=useContext(ShopContext)
    return(
        <div className="cartItem">
        <img src={productImage} alt="" srcset="" />
        <div className="description">
            <p><strong> {productName}</strong></p>
            <p>{price}</p>
            <div className="countHandler">
                <button onClick={()=>removefromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e)=> updatecartItemCount(Number(e.target.value),id)} />
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
        </div>
    )
}