import "./item.sass";

export default function Item(props){
    const {details} = props;

    console.log(props)
    return <>
            <div className="item">
                <div className="image">
                    <img src={details.image} alt="" width="100" height="100"/>
                </div>
                <div className="info">
                    <h3>{details.name}</h3>
                    <p>{details.price}</p>
                </div>
            </div>
        </>
}