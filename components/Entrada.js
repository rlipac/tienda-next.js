import Moment from 'react-moment';
import Image from 'next/image'
import Link from 'next/link';

import Style from '../styles/Entrada.module.css'

const Entrada = ({ entrada }) => {

    const { id, titulo, imagen, resumen, contenido, url, udatedAt, published_at } = entrada

    return (
        <article >
            <div className={Style.contenido}>
                <h3>{titulo}</h3>
                <Image priority="true" layout="responsive" width={800} height={600} alt={` imagen de ${titulo}`} src={imagen.url} />
                <Moment format="D MMM YYYY" withTitle>
                    {published_at} 
                </Moment>
                <p className={Style.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}
                ><a className={Style.enlace}>  leer mas</a></Link>
            </div>
        </article>
    );
}

export default Entrada;