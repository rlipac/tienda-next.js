import { useState } from 'react'

import Image from "next/image";
import Link from 'next/link';
import Layout from '../../components/Layout'

import Style from '../../styles/Guitarras.module.css'

const Producto = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad ] = useState(1)
  // console.log(guitarra[0].imagen[0].url, 'miguitarra')

  const { descripcion, imagen, nombre, precio, urlGuitarra, _id} = guitarra[0]
 
  const handleSubmit = e => {
    e.preventDefault()
    console.log('producto Agregado', cantidad)
    if(cantidad < 1){
      alert('cantidad es invalida');
      return
    }
    const guitarraSeleccionada = {
      _id,
      imagen: imagen[0].url,
      nombre,
      precio: parseFloat(precio),
      descripcion,
      cantidad: parseInt(cantidad)
    }
    agregarCarrito(guitarraSeleccionada)

  }
  // sumar y restar catidad
  const restarCantidad=()=>{
    if(cantidad > 1){ // restamos del useSate cantidad
      setCantidad( cantidad - 1);
    }
    
  } 
  const SumarCantidad=()=>{
    if( cantidad < 6){
      setCantidad( cantidad + 1);
    }
   
} 

  return (  
   <Layout
    pagina={urlGuitarra}
    cantidad={cantidad}
    setCantidad={setCantidad}
   >
       <div className={Style.guitarra}>
            
            <Image  layout="responsive" width={180} height={330} src={imagen[0].url} alt={` imaguen guitarra - ${nombre}`} />
            <div className={Style.contenido}>
               <h3>{ nombre }</h3>
               <p className={Style.descripcion}>{ descripcion }</p>
               <p className={ Style.precio }>S/. { precio }</p>
              <form className={Style.formulario}
                onSubmit={handleSubmit}
              >
                 <label htmlFor="cantidad">Cantidad: </label>
                <div>
                <button onClick={restarCantidad} >━</button>
                <input type="number" min="1" max="2 0"  name="cantidad" id="cantidad"
                       value={cantidad} onChange={(e)=> setCantidad(parseInt(e.target.value))}
                       readOnly="true"
                 />
                 <button onClick={SumarCantidad} >+</button>
                </div>
               
               
                
                <input type="submit" value="comprar" /> 
               
               
              </form>

               <Link href={`/tienda`}>
                  <p className={Style.enlace}>volver</p>
               </Link>
           </div>   
      </div> 
   </Layout> 
   
  );
}
 
export async function getServerSideProps({ query: { urlGuitarra}}){

  const url = `${process.env.API_URL}/guitarras?urlGuitarra=${urlGuitarra}`
  const response = await fetch(url)
  const guitarra = await response.json()

  return {
    props:{
     
        guitarra

    }
  }
}

export default Producto