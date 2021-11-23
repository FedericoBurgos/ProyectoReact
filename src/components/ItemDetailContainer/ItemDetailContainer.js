import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

const [item,setItem] = useState()
const [loading,setLoading] = useState(false)
const { prodId } = useParams()

useEffect(()=>{

    setLoading(true)

    pedirDatos()
    .then(resp => {
        setItem( resp.find(prod =>prod.id === Number (prodId)) )
    })
    .finally(() => {
        setLoading(false)
    })


}, [])
    
       return(
           <div className="container my-5">
               {
                   loading
                    ? <h2>Item Detail Container</h2>
                    : <ItemDetail {...item} />
                }
           </div>
       )

}