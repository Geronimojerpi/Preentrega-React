import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { useState } from "react";
import ItemCount from "./ItemCount"

const Details = ({ detail }) => {

  const [goToCart, setGoToCart] = useState(false)
  const { addProduct } = useCartContext()


  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(detail, quantity)
  }

  return (

    <div className="contenedoritems">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={detail.img} className="card-img-top" alt={detail.title} />
        <div className="card-body">
          <h5 className="card-title titledtl"><b>{detail.title}</b></h5>
          <p className="card-text"><b>Precio: ${detail.precio}</b></p>
          {
            goToCart
              ? <Link to='/cart' className="finalizarcmp">¿Desea terminar su compra?</Link>
              : <ItemCount initial={3} stock={5} onAdd={onAdd} />

          }
        </div>
      </div>
    </div>
  )
}

export default Details


