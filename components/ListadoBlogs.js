import Entrada from './Entrada'
import Style from '../styles/Blog.module.css'

const ListadoBlogs = ({ entradas } ) => {
    return ( 

        <div className="contenedor">
            <h2 className='heading'>Blogs</h2>
                <div className={Style.blog}>
                    {entradas.map(entrada => (
                        <Entrada
                            key={ entrada.id }
                            entrada={entrada}
                        />
                    ))}
                </div>
        </div>
     );
}
 
export default ListadoBlogs;