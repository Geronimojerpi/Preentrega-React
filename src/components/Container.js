import { useEffect, useState } from "react";
import List from './List';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const Container = () => {
    const [state, setState] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, "items")

        if (categoriaId) {
            const queryFilter = query(queryCollection, where("categoria", "==", categoriaId))
            getDocs(queryFilter)
                .then(res => setState(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
        else {
            getDocs(queryCollection)
                .then(res => setState(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoriaId])

    return state.length ? <List items={state} /> : <h2 className="cargando">Cargando...</h2>
}

export default Container