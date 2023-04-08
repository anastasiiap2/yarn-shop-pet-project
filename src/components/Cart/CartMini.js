import {Link} from "react-router-dom";
import cartBasket from "../../assets/images/cart-basket.svg";
import "./cartMini.sass";

export default function CartMini(){
    return <>
        <Link to="/cart"><img src={cartBasket} alt="Cart basket icon" height="80" width="80" id="cart-icon"/></Link>
    </>
}