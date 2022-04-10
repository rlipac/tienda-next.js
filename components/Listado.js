import Guitarras from "./Guitarras";

import Style from '../styles/Listado.module.css'

const Listado = ( { guitarras }) => {
    
    return ( 
        <div className={Style.listado}>
            { guitarras.map(guitarra =>(
                <Guitarras
                    key={guitarra.urlGuitarra}
                    guitarra={guitarra}
                />
            ))}
        </div>
      
     );
}
 
export default Listado;