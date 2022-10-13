import { useState } from "react";

const ItemCount = ({initial, stock, onAdd})=>{
    const [cantidad, setCantidad] = useState(initial)

    const agregar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const restar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }
    return(
        <div>
            {stock ? (
            <>
                <div >
                    <button id="boton" onClick={agregar}>+</button>
                    <input type="number" value={stock ? cantidad : 0}></input>
                    <button id="btn" onClick={restar}>-</button>
                </div>
            </>
            )
            :  ""}
        </div>
    )
}

export default ItemCount