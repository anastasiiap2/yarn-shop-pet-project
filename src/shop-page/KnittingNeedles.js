import {useState, useEffect} from "react";
import Item from "./Item";
import Navbar from "../navbar/Navbar";
import "./item-list.sass"

export default function KnittingNeedles() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/items/knitting-needles")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);

            })
            .catch(error => console.log(error))
    }, [])

    const handleFilterClick = () => {
        fetch("http://127.0.0.1:3000/items?low.price")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
            .catch(error => console.log(error))
    }

    return <>
        <Navbar/>
        <div className="product-layout">
            <h1 id={"shop-header"}>Shop</h1>
            <p id={"shop-slogan"}>Lorem ipsum dolores</p>
            <button onClick={handleFilterClick}>click me</button>
            <hr/>
            <div className="items-grid-container">
                {items.map(item => {
                        return <div key={item.id} className="item-grid">
                        <Item
                            details={item}y
                        />
                        </div>
                    })}
            </div>
        </div>
    </>

}
