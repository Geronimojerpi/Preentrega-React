import { useCartContext } from "../context/CartContext"

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()
    return (
        <div className="card" style={{ width: 18 + "rem" }}>
            <img src={product.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"><b>{product.title}</b></h5>
                <p className="card-text"><b>Cantidad: {product.quantity}</b></p>
                <p className="card-text"><b>Precio: ${product.precio}</b></p>
                <p className="card-text"><b>Subtotal: ${product.quantity * product.precio}</b></p>
                <button onClick={() => removeProduct(product.id)} className="btneliminar">Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart