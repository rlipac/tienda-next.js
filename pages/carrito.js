import { noSSR } from "next/dynamic";
import Image from "next/image";

import Layout from '../components/Layout'
import Style from '../styles/Carrito.module.css'

const Carrito = ({ carrito, actualizarCantidad}) => {


  
    
 
    return (
        <Layout pagina={"Carrito de Compras"}>
         
            <h1 className="heading">Carrito</h1>
            <main className={`${Style.contenido} contenedor`}>
         
                
                <div className={Style.tabla}>
                { carrito.map(car =>( 
                        <div className={Style.producto}  key={car._id}>
                            
                            <div className={Style.imagen}>
                                <Image  layout="responsive" width={70} height={150} src={car.imagen} alt={` imaguen guitarra - ${car.nombre}`} />
                            </div>
                            <div className={Style.descripcion}>
                                <h4 >{car.nombre }</h4>
                                <p>{car.descripcion}</p>
                                <p>Precio unitario S/. {car.precio} </p>
                              
                                <div>
                                    <label>Cantidad: </label>
                                   
                                    <input
                                       value={ car.cantidad }
                                       type="number"
                                       onChange={(e)=> actualizarCantidad({
                                           cantidad: e.target.value,
                                           id:car._id
                                       })}
                                      
                                     />
                                       
                                       
                                      
                                </div>
                                <p>SubTotal:  <small>{car.cantidad * car.precio}</small>  </p>
                            </div>     
                        </div>
                        
                      ))}      
                </div>
            
              
                <div className={Style.resumen}>
                    <h2>Resumen</h2>
                </div>
            </main>
        </Layout>

    );
}

export default Carrito;