import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [ carrito, setCarrito ] = useState([]) // se crear un stado global desde app.js


  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];// creo carrito en LocalSorage y lo parseo  a JSON si existe carrito lo inicio cono un array vacio
    setCarrito(carritoLS)
    
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));// creo carrito en LocalSorage y lo parseo  a JSON si existe carrito lo inicio cono un array vacio
  }, [carrito])
  

    const agregarCarrito = (producto)=>{
    
    if( carrito.some( (articulo)=> articulo._id === producto._id)){ // si es el mismo producto
      const carritoActualizado = carrito.map( (articulo)=>{//itera el articulo
        if(articulo._id === producto._id){// si elige el mismo articulo
          articulo.cantidad = producto.cantidad;// actualiza la cantidad
        }
        return articulo; // reotrna el articulo
      })

      setCarrito(carritoActualizado)// actualiza el carrito
      console.log('Producto duplicado....>')
    }else{
      setCarrito([...carrito, producto]);
    }
  

   
  };

  const actualizarCantidad =(producto)=>{
     
 
      const carritoActualizado2 = carrito.map( (articulo)=>{//itera el articulo
        if(articulo._id === producto._id){// si elige el mismo articulo
          articulo.cantidad = producto.cantidad;// actualiza la cantidad
         
        }
        return articulo; // reotrna el articulo
        
      })
      setCarrito(carritoActualizado2)
    
  
  

   }

  return <Component {...pageProps}
                    carrito={carrito}
                     agregarCarrito={agregarCarrito}
                     actualizarCantidad={actualizarCantidad}
          />
}

export default MyApp
