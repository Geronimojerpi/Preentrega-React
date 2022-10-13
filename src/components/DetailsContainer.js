import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from './Details'

const DetailsContainer = ()=>{
    
    const [detail, setDetail] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const url = `./products/products.json/${id}`
        fetch(url)
        .then((data)=> data.json())
        .then((data)=> setDetail(data.data))
        .catch((err)=> console.log(err))
    }, [id]);

    return detail ? <Details detail={detail} /> : <h3>Cargando...</h3>
}

export default DetailsContainer