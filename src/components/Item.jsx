import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return(
        <div  className="col-md-4 my-3">
            <div className="card border border-0">
            <Link to={"/item/" + producto.idx} className="text-dark text-decoration-none">
            <img src={(producto.imagen)} alt={producto.titulo} className="card-img-top" />
                         <div className="card-body">
                            <h1>{producto.titulo}</h1>
                            <p className="card-text">{producto.descripcion}</p>
                            <p className="card-text"><b>${producto.precio}</b></p>         
                            </div>     
                            </Link>  
            </div>
        </div>
    )
 }
 export default Item;