import "./item.sass";

export default function Item(props) {
    const {details} = props;

    return <>
        <div className="item">
                <img src={details.image} alt="" width="200" height="200" className={"yarn-image"}/>
                <h2 className="item-title">{details.title}</h2>
                <p id={"price"}>${details.price}</p>
        </div>
    </>
}