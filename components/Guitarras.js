import Image from "next/image";
import Link from 'next/link';

import Style from '../styles/Guitarras.module.css'

const Guitarras = ({guitarra}) => {
 
    const { descripcion, imagen, nombre, precio, urlGuitarra} = guitarra
    return (
       <div className={Style.guitarra}>
            
             <Image  layout="responsive" width={180} height={310} src={imagen[0].url} alt={` imaguen guitarra - ${nombre}`} />
           
             <div className={Style.contenido}>
                <h3>{ nombre }</h3>
                <p className={Style.descripcion}>{ descripcion }</p>
                <p className={ Style.precio }>S/. { precio }</p>
                <Link href={`/guitarras/${urlGuitarra}`}>
                   <p className={Style.enlace}>ver mas</p>
                </Link>
               
               
            </div>   
       </div> 
      

      );
}
 
export default Guitarras;