import Item from "./item"
import { useState } from "react"

const marcas = {
    VANS: 'Vans',
    ADIDAS: 'Adidas',
    CONVERSE: 'Converse'
}
function ItemList({items}){
    
    const [selectedBrand, setSelectedBrand] = useState('');
    
    const filteredItems = selectedBrand ? items.filter(item=>item.marca === selectedBrand) :items;

    return(
        <>
            
            <div>
                <button className="btn-filtros" onClick={() => setSelectedBrand(marcas.VANS)}>Vans</button>
                <button className="btn-filtros" onClick={() => setSelectedBrand(marcas.CONVERSE)}>Converse</button>
                <button className="btn-filtros" onClick={() => setSelectedBrand(marcas.ADIDAS)}>Adidas</button>
            </div>

            <div className="container">
                {filteredItems.map((item) => (
                        <Item key={item.id} {...item}/>
                    )
                )}
            </div>
        </>
    )
}

export default ItemList