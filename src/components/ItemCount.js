import { useState } from "react";
export const ItemCount = ({initial, stock, onAdd}) =>{

const [count, setCount] = useState(1)

const resta = () =>{
    setCount(count - 1)
}

const suma = () =>{
    setCount(count + 1)
}


return(

    <div className="contador">
        <button className="buttonsr" disabled={count <= 1} onClick={resta}>-</button>
        <span><b>{count}</b></span>
        <button className="buttonsr" disabled={count >= stock} onClick={suma}>+</button>
        <div>
            <button className="btncart" disabled={stock <= 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
)

}


export default ItemCount