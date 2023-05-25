import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "./json/Lista.json";
import ItemList from "./ItemList";


const ItemListContainer = () => {  
   const [items, setItems]= useState([]);
   const {id}= useParams();
    useEffect(()=> {
        const promesa = new Promise((resolve)=>{
            setTimeout(()=> {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
            }, 2000);
        });
        promesa.then(data=>{
            setItems(data);
        });
    },[id]);
   
    return(
        <div className="inicio">
       
        <div className="row">
            <ItemList productos={items}/>
        </div>
    </div>
    )}

 export default ItemListContainer;