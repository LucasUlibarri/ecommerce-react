import {useEffect, useState} from "react";
import ItemList from "./itemList";
import { productos } from "../../data/productos";
import "./styleItems.css"

function ItemListContainer() {

    const [items,setItems] = useState([]);

    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            },2000)
        })

        fetchProductos.then((data) => {
            setItems(data)
        })
    },[])
    
    

    return(
        <>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer