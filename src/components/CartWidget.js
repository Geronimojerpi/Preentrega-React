import { useCartContext } from "../context/CartContext";

const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <div className="contenedorcart">
            <div className="cont">{totalProducts() || ''}</div>
            <i className="fa-solid fa-cart-plus carrito"></i>
        </div>
    )
}

export default CartWidget;