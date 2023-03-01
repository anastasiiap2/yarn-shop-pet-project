import {useState, useEffect} from "react";

export default function ItemsList(){
    const [items, setItems] = useState([]);

        useEffect(() => {
            fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setItems(data);
                })
                .catch(error => console.log(error))
        }, [])

    return <>
        {items.map((item) => <li key={item.index}>{item.title}</li>)} //test -> works. Create Product component analog and render it here
    </>

}
