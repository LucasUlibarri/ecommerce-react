import { useCart } from "../CartContext";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function DetalleProducto() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const db = getFirestore();

    useEffect(() => {
        const itemRef = doc(db, 'items', id);

        getDoc(itemRef).then(snapshot => {
            setData(snapshot.data());
        });
    }, [id]);

    if (!data) {
        return <h2>No pudimos encontrar tu producto...</h2>;
    }

    const handleIncrease = () => {
        if (quantity < data.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="containerDetalle">
            <img src={data.image} alt={data.title} />
            <div>
                <h2>{data.title}</h2>
                <p>{data.categoryId}</p>
                <h3>${data.price}</h3>
                <p>{data.description}</p>
                <div>
                    <button onClick={handleDecrease} disabled={quantity === 1}>
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={handleIncrease}
                        disabled={quantity === data.stock}
                    >
                        +
                    </button>
                </div>
                <button onClick={() => addToCart({...data, id}, quantity)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default DetalleProducto;
