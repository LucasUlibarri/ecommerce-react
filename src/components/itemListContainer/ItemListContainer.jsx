import {useEffect, useState} from "react";
import ItemList from "./itemList";
//Aca tengo que importar la lista de productos

function ItemListContainer() {

    //Esta funcion trae los prod
    const [items,setItems] = useState([]);

    //Funcion para ejecutarse en el montaje
    //Revisar como es cuando consumo una API
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
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer