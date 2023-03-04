import {useState, useEffect} from "react";
import Item from "./Item";
import Navbar from "../navbar/Navbar";
import "./item-list.sass"

export default function ItemsList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("yarn-db.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
            .catch(error => console.log(error))
    }, [])

    return <>
        <Navbar/>
        <div className="product-layout">
            <h1>Shop</h1>
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
