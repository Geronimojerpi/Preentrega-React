import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Details from './Details'

const DetailsContainer = () => {

    const [detail, setDetail] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, "items", detalleId)
        getDoc(queryDoc)
            .then(res => setDetail({ id: res.id, ...res.data() }))
    }, [detalleId]);

    return detail ? <Details detail={detail} /> : <h3 className="cargando">Cargando...</h3>
}

export default DetailsContainer