import Navbar from "../Navbar/Navbar";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import priceTag from "../../assets/images/price-tag.svg";
import "./itemPage.sass";
import CartMini from "../Cart/CartMini";

export default function ItemPage() {
    const [item, setItem] = useState({});
    const [imageSource, setImageSource] = useState('');
    const [form, setForm] = useState({
        option: '',
        quantity: 1
    });

    const params = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/items/${params.id}.json`)
            .then(response => response.json())
            .then(data => {
                setItem(data)
                setImageSource(data.image0)
                console.log(item.sizes)
            })
    }, [])

    const handleImageChange = (event) => {
        let source = event.target.getAttribute('src')
        console.log(source)
        setImageSource(source)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }

    const handleRadioSelect = (event) => {
        setForm({...form, option: event.target.value})
    }

    const handleQuantitySelect = (event) => {
        setForm({...form, quantity: event.target.value})
    }

    return <>
        <Navbar/>
        <div className="item-page-layout">
            <div id="main-container">
                <div className="item-images-container">
                    <div>
                        <img src={imageSource} alt="" width="300" height="300"/>
                        <ul className="image-list">
                            <li className=""><img src={item.image0} alt="" width="70" height="70"
                                                  className="list-image-item"
                                                  onClick={handleImageChange}/></li>
                            <li className=""><img src={item.image1} alt="" width="70" height="70"
                                                  className="list-image-item"
                                                  onClick={handleImageChange}/></li>
                            <li className=""><img src={item.image2} alt="" width="70" height="70"
                                                  className="list-image-item"
                                                  onClick={handleImageChange}/></li>
                        </ul>
                    </div>
                </div>
                <div className="item-description-container">
                    <h1 className="display-6">{item.title}</h1>
                    <div className="price-div">
                        <p id="item-price">{item.price}zł</p>
                        <img src={priceTag} alt="" width="30" height="30" id="price-tag"/>
                    </div>
                    <p id="item-description">{item.description}</p>
                    <form action="" onSubmit={handleFormSubmit}>
                        <div className="list-items">
                            {item.sizes && item.sizes.map((size, index) => {
                                return <li key={index} id="option-list-item">
                                    <label aria-label={size}>
                                        <input type="radio" id="input-radio" name="option" onChange={handleRadioSelect} value={size}/>
                                        <span id="option">{size}</span>
                                    </label>
                                </li>
                            })}
                        </div>
                        <div className="quantity-add-item">
                            <div className="input-group">
                                <label htmlFor="quantity" className="input-group-text">Quantity:</label>
                                <input type="number" className="form-control" pattern="[0-9]*" min="1" step="1"
                                       id="quantity" name="quantity" aria-label="Input field for quantity" onChange={handleQuantitySelect} value={form.quantity}/>
                            </div>
                            <button id="buy-btn" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="more-items-carousel">

        </div>
        <CartMini/>
    </>
}