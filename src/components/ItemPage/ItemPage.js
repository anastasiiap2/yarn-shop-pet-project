import Navbar from "../Navbar/Navbar";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./itemPage.sass";
export default function ItemPage(){
    const [resp, setResp] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/items/${params.id}.json`)
            .then(response => response.json())
            .then(data => {
                setResp(data)
                console.log(resp)
            })
    }, [])

    return <>
        <Navbar />
        <div className="item-page-layout">
            <div id="main-lay">
            <div id="main-container">
                <div className="item-image grid-element">
                    <div className="image-list">
                        <ul className="list-group">
                            <li className="list-group-item"><img src={resp.image1} alt="" width="100" height="100"/></li>
                            {/*<li className="list-group-item"><img src={resp.image2} alt="" width="100" height="100"/></li>*/}
                        </ul>
                    </div>
                    <img src={resp.mainImage} alt=""/>
                </div>
                <div className="item-description grid-element">
                    <h1>{resp.title}</h1>
                    <p>{resp.price}</p>
                </div>
            </div>
            </div>
                <div className="description-container"></div>
        </div>
    </>
}