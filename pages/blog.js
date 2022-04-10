import { useEffect } from 'react';
import Entrada from '../components/Entrada';

import Layout from '../components/Layout'

import Style from '../styles/Blog.module.css'

const Blog = ({ entradas }) => {
    const ruta = `${ process.env.API_URL_PUBLIC}/blogs`
    console.log('-------->  ',ruta)
      
    return (
        <Layout
            pagina="Blog"
        >
            <main className='contenedor'>
                <h2 className='heading'>Blogs</h2>
                <div className={Style.blog}>
                    {entradas.map(entrada => (
                        <Entrada
                            key={ entrada.id }
                            entrada={entrada}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    const url = `${ process.env.API_URL}/blogs?_sort=created_att:desc` // _sort=created_att:desc muestra las ultimas entradas creadas
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    console.log(entradas);

    return {
        props: {
            entradas
        }
    }
}

export default Blog;
