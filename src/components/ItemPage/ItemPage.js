import Navbar from "../Navbar/Navbar";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./itemPage.sass";
import CartMini from "../Cart/CartMini";

export default function ItemPage() {
    const [resp, setResp] = useState({});
    const [imageSource, setImageSource] = useState('');

    const params = useParams();

    const handleAddItem = (event) => {

    }


    useEffect(() => {
        fetch(`http://127.0.0.1:3000/items/${params.id}.json`)
            .then(response => response.json())
            .then(data => {
                setResp(data)
                setImageSource(data.image0)
                console.log(resp.sizes)
            })
    }, [])

    const handleChangeImage = (event) => {
        let source = event.target.getAttribute('src')
        console.log(source)
        setImageSource(source)
    }

    return <>
        <Navbar/>
        <div className="item-page-layout">
            <div id="main-container">
                <div className="item-images-container">
                    <div>
                        <img src={imageSource} alt="" width="300" height="300"/>
                        <ul className="image-list">
                            <li className=""><img src={resp.image0} alt="" width="70" height="70"
                                                  className="list-image-item"
                                                  onClick={handleChangeImage}/></li>
                            <li className=""><img src={resp.image1} alt="" width="70" height="70"
                                                  className="list-image-item"
                                                  onClick={handleChangeImage}/></li>
                            <li className=""><img src={resp.image2} alt="" width="70" height="70"
                                                  className="list-image-item"
                                                  onClick={handleChangeImage}/></li>
                        </ul>
                    </div>
                </div>
                <div className="item-description-container">
                    <h1 className="display-6">{resp.title}</h1>
                    <p id="item-description">{resp.description}</p>
                    <form action="">
                    <div className="list-items">
                        {resp.sizes && resp.sizes.map((size, index) => {
                            return <li key={index} id="option-list-item">
                                <label aria-label={size}>
                                    <input type="radio" id="input-radio" name="option"/>
                                    <span id="option">{size}</span>
                                </label>
                            </li>
                        })}
                    </div>
                    <div className="price-buy">
                        <p id="item-price">{resp.price}zł</p>
                        <button id="buy-btn" onClick={handleAddItem} type="submit">Add</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <CartMini />
    </>
}