import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(0);
    const [itemStock, setItemStock] = useState(stock);

    const agregarAlCarrito = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const quitarDelCarrito = () => {
        if (items > 0) {
            setItems(items - 1);
        }
    }

    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(0);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container-btn">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={quitarDelCarrito}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={agregarAlCarrito}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-light" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>        
    )
}

export default ItemCount;