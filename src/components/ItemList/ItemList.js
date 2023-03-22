import {useState, useEffect} from "react";
import Item from "../Item/Item";
import Navbar from "../Navbar/Navbar";
import "./item-list.sass"

export default function ItemList(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(props.url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);

            })
            .catch(error => console.log(error))
    }, [props.url])

    return <>
        <Navbar/>
        <div className="product-layout">
            <h1 id={"shop-header"}>Shop</h1>
            <p id={"shop-slogan"}>Lorem ipsum dolores</p>
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
