import Navbar from "../Navbar/Navbar";
import {useState, useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import priceTag from "../../assets/images/price-tag.svg";
import "./itemPage.sass";
import CartMini from "../Cart/CartMini";

export default function ItemPage() {
    let location = useLocation();

    const [item, setItem] = useState({});
    const [imageSource, setImageSource] = useState(location.state.details.image);
    const [cart, setCart] = useState([]);
    const [purchase, setPurchase] = useState({
        name: '',
        option: '',
        quantity: 1
    });

    const params = useParams();

    const handleAddItem = (event) => {
        event.preventDefault()
        setCart([...cart, purchase])
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/item/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data)
                setPurchase({...purchase, name: data.title})
            })
        console.log("mount")
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:3000/cart", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({cart})
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        console.log("cart mount")

    }, [cart])

    const handleImageChange = (event) => {
        let source = event.target.getAttribute('src')
        console.log(source)
        setImageSource(source)
    }

    const handleRadioSelect = (event) => {
        setPurchase({...purchase, option: event.target.value})
    }

    const handleQuantitySelect = (event) => {
        setPurchase({...purchase, quantity: event.target.value})
    }

    return <>
        <Navbar/>
        <div className="item-page-layout">
            <div id="main-container">
                <div className="item-images-container">
                    <div>
                        <img src={imageSource} alt="" width="300" height="300"/>
                        <ul className="image-list">
                            <li><img src={location.state.details.image} alt="" width="70" height="70"
                                                  className="list-image-item"
                                                  onClick={handleImageChange}/></li>
                            {item.images && item.images.map((image, index) => {
                                return <li key={index}><img src={image} alt="" width="70" height="70"
                                                                            className="list-image-item"
                                                                            onClick={handleImageChange}/></li>
                            })}

                        </ul>
                    </div>
                </div>
                <div className="item-description-container">
                    <h1 className="display-6">{location.state.details.title}</h1>
                    <div className="price-div">
                        <p id="item-price">{location.state.details.price}zł<span id="price-tag"><img src={priceTag} alt="" width="25" height="25"/></span></p>

                    </div>
                    <p id="item-description">{item.description}</p>
                    </div>
            <div className="item-form-container">
                    <form action="" onSubmit={handleAddItem}>
                        <div className="list-items">
                            {item.options && item.options.map((size, index) => {
                                return <li key={index} id="option-list-item">
                                    <label aria-label={size}>
                                        <input type="radio" required id="input-radio" name="option" onChange={handleRadioSelect}
                                               value={size}/>
                                        <span id="option">{size}</span>
                                    </label>
                                </li>
                            })}
                        </div>
                        <div className="quantity-add-item">
                            <div className="input-group">
                                <label htmlFor="quantity" className="input-group-text">Quantity:</label>
                                <input type="number" className="form-control" pattern="[0-9]*" min="1" step="1"
                                       id="quantity" name="quantity" aria-label="Input field for quantity"
                                       onChange={handleQuantitySelect} value={purchase.quantity}/>
                            </div>
                            <button id="buy-btn" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <CartMini/>
    </>
}