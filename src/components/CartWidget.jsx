import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const { cart } = useCart();
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);


    return (
        <Link to="/carrito" style={{ textDecoration: "none", color: "black", position: "relative" }}>
            Carrito
            {totalQuantity > 0 && (
                <span style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px 10px",
                    fontSize: "12px"
                }}>
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
}

export default CartWidget;
