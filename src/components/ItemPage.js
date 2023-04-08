import Navbar from "./Navbar/Navbar";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

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
        <div>{resp.id}</div>
        <div>{resp.price}</div>
        <div>{resp.title}</div>
    </>
}