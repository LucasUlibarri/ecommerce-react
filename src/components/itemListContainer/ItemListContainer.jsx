import {useEffect, useState} from "react";
import ItemList from './ItemList'
import { collection, getDocs, getFirestore } from "firebase/firestore";

import "./styleItems.css"
function ItemListContainer() {
    const [items, setItems] = useState([]);

    const db = getFirestore();

    useEffect(() => {

        const refItems = collection(db, 'items');

        getDocs(refItems).then(snapshot => {
            
            const items = snapshot.docs.map(prod => ({
                id: prod.id,
                ...prod.data(),
            }));
            setItems(items)
        })
        .catch(error => {
            console.error("Error al obtener los items:", error);
          });
    }, []);  


    return(
        <>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer