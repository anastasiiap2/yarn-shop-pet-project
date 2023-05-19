import Navbar from "../Navbar/Navbar";
import "./cart.sass"
import deleteBtn from "../../assets/images/delete-icon.svg";
import {useEffect, useState} from "react";

export default function Cart(props) {


    return <>
        <Navbar/>
        {/*<div className="cart-layout-grid">*/}
        <div id="checkout">
            <table id="checkout-table">
                <tbody>
            {props.cart.map((item,index) => {
                return <tr key={index} id="table-row">
                    <td><img src={item.image} alt="" width="80" height="80"/></td>
                    <td>{item.name}</td>
                    <td>{item.option}</td>
                    <td>{item.quantity}</td>
                    <td><button onClick={() => props.onProductDecrement(item.id, item.option)} disabled={item.quantity === 1 && 'true'}>-</button><button onClick={() => props.onProductIncrement(item.id, item.option)}>+</button></td>
                    <td>{item.quantity * item.price}zł</td>
                    <td><button onClick={() => props.onProductDelete(item.id, item.option)} id="btn-delete"><img src={deleteBtn} alt="" width="30" height="30"/></button></td>
                </tr>
            })}
                </tbody>
            </table>
            <div id="checkout-summary">

            </div>
        </div>
        {/*</div>*/}
    </>
}