import Item from "./item"

function ItemList({items}){
    return(
        <div>
            {items.map((item) => (
                <Item
                    key={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    descripcion={item.descripcion}
                />
            ))}
        </div>
    )
}

export default ItemList