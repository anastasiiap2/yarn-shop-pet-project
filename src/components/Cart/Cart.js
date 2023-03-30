import cartBasket from "../../assets/images/cart-basket.svg"
import "./cart.sass";

export default function Cart(){
    return <>
        <img src={cartBasket} alt="Cart basket icon" height="80" width="80" id="cart-icon"/>
    </>
}