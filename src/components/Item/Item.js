import "./item.sass";

export default function Item(props) {
    const {details} = props;

    return <>
        <div className="item">
            <img src={details.image} alt="" width="180" height="180" className={"yarn-image"}/>
            <h2 className="item-title">{details.title}</h2>
            <div className="item-price-btn">
                <p id={"price"}>${details.price}</p>
                <button id="buy-btn">Add</button>
            </div>

        </div>
    </>
}