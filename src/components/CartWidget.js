import { useCartContext } from "../context/CartContext";

const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <div className="contenedorcart">
            <div className="cont">{totalProducts() || <div className="agregados">Productos agregados</div>} </div>
            <i className="fa-solid fa-cart-plus carrito"></i>
        </div>
        
    )
}

export default CartWidget;