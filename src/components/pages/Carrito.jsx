import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

function Carrito() {
    const { cart } = useCart();

    return (
        <div>
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío. <Link to="/productos">Ver productos</Link></p>
            ) : (
                <ul>
            {cart.map((item) => (
                <li key={item.id}>
                    <img src={item.image} alt={item.title} width="50" />
                    {item.title} - Cantidad: {item.quantity} - ${item.price * item.quantity}
                </li>
            ))}


                </ul>
            )}
        </div>
    );
}

export default Carrito;
