import { Link } from "react-router-dom"
function Item({id,title,price,image}){
    return(
        <Link to={`/productos/${id}`} className="card">
            <img src={image} alt={title} className="img-producto"></img>
            <h2>{title}</h2>
            <p>${price}</p>
        </Link>
    )
}

export default Item