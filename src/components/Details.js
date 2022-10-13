import { Link } from "react-router-dom"

const Details = ({ detail }) => {
  return (

    <div className="contenedoritems">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={detail.img} className="card-img-top" alt={detail.title}/>
        <div className="card-body">
          <h5 className="card-title">{detail.title}</h5>
          <p className="card-text">{detail.precio}</p>
          <Link to={"/"} className="btn btn-primary">Comprar</Link>
        </div>
      </div>
    </div>
  )
}

export default Details