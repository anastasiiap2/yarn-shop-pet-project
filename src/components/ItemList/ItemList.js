import {useState, useEffect} from "react";
import Item from "../Item/Item";
import Navbar from "../Navbar/Navbar";
import CartMini from "../Cart/CartMini";
import "./item-list.sass"

export default function ItemList(props) {
    const [items, setItems] = useState([]);

    const url = "http://127.0.0.1:3000/items/";

    useEffect(() => {
        fetch(url + props.details.listName)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);

            })
            .catch(error => console.error(error))
    }, [props.details.listName])

    return <>
        <Navbar/>
        <div className="product-layout">
            <CartMini/>
            <h1 id={"category-header"}>{props.details.name}</h1>
            <p id={"category-description"}>{props.details.description}</p>
            <hr/>
            <div className="items-grid-container">
                {items.map(item => {
                    return <div key={item.id} className="item-grid">
                        <Item
                            details={item}
                        />
                    </div>
                })}
            </div>
        </div>
    </>
}
