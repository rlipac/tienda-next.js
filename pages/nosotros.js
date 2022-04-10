import Layout from '../components/Layout'
import Image from 'next/image';

import Styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina="Nosotros"
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={Styles.contenido}>
                    <Image layout='responsive' width={580} height={450} src="/img/nosotros.jpg" alt="foto guitarra"/>
                    <div>
                        <p>
                        Proin tincidunt iaculis dui, eu auctor ligula. Aenean malesuada porta sodales. 
                        Aliquam lacinia nisi a urna fringilla semper. Mauris at justo non nisi feugiat lobortis eu imperdiet felis.
                         In condimentum placerat nisi, in pellentesque nibh cursus eget. Sed maximus congue maximus. Aliquam
                          luctus, purus pellentesque posuere cursus, augue massa porta augue, ac placerat ante massa id arcu.
                           Nulla vestibulum lacinia posuere.
                        </p>
                        <p>
                        Proin tincidunt iaculis dui, eu auctor ligula. Aenean malesuada porta sodales. Aliquam lacinia nisi a urna 
                        fringilla semper. Mauris at justo non nisi feugiat lobortis eu imperdiet felis. In condimentum placerat 
                        nisi, in pellentesque nibh cursus eget. Sed maximus congue maximus. Aliquam luctus, purus pellentesque
                         posuere cursus, augue massa porta augue, ac placerat ante massa id arcu. Nulla vestibulum lacinia posuere.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>


    );
}

export default Nosotros;
