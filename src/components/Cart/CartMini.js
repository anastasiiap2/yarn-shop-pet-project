import {Link} from "react-router-dom";
import cartBasket from "../../assets/images/cart-basket.svg";
import "./cartMini.sass";

export default function CartMini(props){
    return <>
        <Link to="/cart" id="cart-icon"><img src={cartBasket} alt="Cart basket icon" height="80" width="80"/>
            <span id="cart-length">{ props.cart.length !== 0 && props.cart.length}</span></Link>
    </>
}