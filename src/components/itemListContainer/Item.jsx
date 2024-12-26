import { Link } from "react-router-dom"
function Item({id,nombre,precio,imagen}){
    return(
        <Link to={`/productos/${id}`} className="card">
            <img src={imagen} className="img-producto"></img>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </Link>
    )
}

export default Item