import Navbar from "../Navbar/Navbar";
import "./cart.sass"
import {useState} from "react";
export default function Cart(){
    const [cart, setCart] = useState([]);

    return <>
        <Navbar />
        {/*<div className="cart-layout-grid">*/}
            <div id="checkout-items">
                <div id="checkout-table">
                    <div className="list-item">
                        <li>
                            <div>Pic</div>
                            <div>Description</div>
                            <div>Price,delete,amount</div>
                        </li>

                    </div>
                </div>
            </div>
        {/*</div>*/}
    </>
}