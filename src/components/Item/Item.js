import "./item.sass";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Item(props) {
    const {details} = props;

    return <>
        <Link to={`/items/${details.id}`} id="link">
        <div className="item">
            <img src={details.image} alt="" width="180" height="180" className={"yarn-image"}/>
            <h2 className="item-title">{details.title}</h2>
            <div className="item-price-btn">
                <p id={"price"}>${details.price}</p>
            </div>
        </div>
        </Link>
    </>
}