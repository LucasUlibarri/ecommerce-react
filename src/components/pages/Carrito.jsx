import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import FormularioCompra from "../FormularioCompra";

function Carrito() {
    const { cart, removeFromCart, finalizePurchase } = useCart();

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleFinalizePurchase = () => {
        finalizePurchase();
        alert("Compra finalizada. ¡Gracias por tu compra!");
    };

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
                            <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}

            {cart.length > 0 && (
                <>
                    <FormularioCompra cart={cart} /> {}
                    <button onClick={handleFinalizePurchase}>Finalizar Compra</button>
                </>
            )}
        </div>
    );
}

export default Carrito;