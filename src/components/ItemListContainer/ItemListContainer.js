import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
  const [loading,setloading] = useState(false)
  const [productos,setProductos] = useState([])

  console.log(productos)

  useEffect(() => {
      setLoading(true)
      pedirDatos()
          .then( (resp) => {
              console.log(resp)
          })
          .catch( (error) => {
              console.log(error)
          })
          .finally(() => {
              setLoading(false)
         })
      
  },[])

  return (
     <>
  {
      loading
      ? <h2>Cargando...</h2>
      : <ItemList productos={productos}/>
      
      }
      </>
)
}