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
        <div>
            
            <div>
                <button className="btn-filtros" onClick={() => setSelectedBrand(marcas.VANS)}>Vans</button>
                <button className="btn-filtros" onClick={() => setSelectedBrand(marcas.CONVERSE)}>Converse</button>
                <button className="btn-filtros" onClick={() => setSelectedBrand(marcas.ADIDAS)}>Adidas</button>
            </div>

            {filteredItems.map((item) => (
                <Item key={item.id} {...item}/>
            )
            )}
        </div>
    )
}

export default ItemList