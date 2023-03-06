import "./item.sass";

export default function Item(props){
    const {details} = props;

    return <>
            <div className="item">
                <div className="image">
                    <img src={details.image} alt="" width="200" height="200" className={"yarn-image"}/>
                </div>
                <div className="info">
                    <h3>{details.title}</h3>
                    <p>${details.price}</p>
                    <p>{details.description}</p>
                </div>
            </div>
        </>
}