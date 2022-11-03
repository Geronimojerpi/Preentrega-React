import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="elm">
                <p>No hay elementos en el carrito</p>
                <Link to={"/"} className="linkinicio">Volver al inicio</Link>
            </div>
        );
    }

    return (

        <>
            <div className="contenedoritems">
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }

            </div>

            <p className="preciofinal">
                Total de la compra: ${totalPrice()}
            </p>
        </>
    )
}

export default Cart