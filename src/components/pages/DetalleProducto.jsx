import { productos } from "../../data/productos";
import { useParams } from "react-router-dom";
function DetalleProducto(){
    const {id} = useParams();
    const producto = productos.find(prod=>prod.id===parseInt(id))

    if(!producto){
        return <h2>No pudimos encontrar tu producto...</h2>
    }

    return(
        <div className="containerDetalle">
            <img src={producto.imagen}/>
            <div>
                <h2>{producto.nombre}</h2>
                <p>{producto.marca}</p>
                <h3>${producto.precio}</h3>
                <p>{producto.descripcion}</p>
            </div>
        </div>
    )   
}

export default DetalleProducto