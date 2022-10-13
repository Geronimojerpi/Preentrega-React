import { useEffect, useState } from "react";
import List from './List';
import { useParams } from "react-router-dom";



const Container = () =>{
    const [state, setState] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const url = `./products/products.json?categories=${id}`
        fetch(url)
        .then((data)=> data.json())
        .then((data)=> setState(data.data))
        .catch((err)=> console.log(err))
    }, [id]);

    return state.length ? <List items={state}/> : <h2>Cargando...</h2> 
}

export default Container