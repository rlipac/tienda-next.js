import Head from 'next/head'
import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlogs from '../components/ListadoBlogs'

export default function Home( { guitarras, curso, entradas} ) {
 

  return (
    <Layout 
      pagina="Inicio"
      guitarra={guitarras[3]}
    >
        <main className='contenedor'>
            <h1 className='heading'>Nuestra Coleccion</h1>

            <Listado
              guitarras={ guitarras }
            />
            
        </main>
        <Curso
          cursos={curso}
        />
        <ListadoBlogs
          entradas={entradas}
        />
    </Layout>
     
  )
} 


//getServerSideProps, StaticProps // solo se ejecutan desde Pages no en componentes

export async function getServerSideProps(){
  // consultado 2 o mas apis al mismo tendo sin que la una espere a la otra
  const urlGuitarras = `${ process.env.API_URL}/guitarras`
  const urlCursos = `${ process.env.API_URL}/cursos`
  const urlBlogs =  `${ process.env.API_URL}/blogs?_limit=3&_sort=created_att:desc`
  // const respuesta = await fetch(url)
  // const guitarras = await respuesta.json()
 


const [resGuitarras, resCursos, resBlogs] = await Promise.all([
  fetch(urlGuitarras), // fecht(urlGuitarras => resguitarras)
  fetch(urlCursos), // fecht(urlCursos => resCursos)
  fetch(urlBlogs) // fecht(urlCursos => resCursos)
])

const [guitarras, curso, entradas]= await Promise.all([
  resGuitarras.json(), // resGuitarras => guitarras
  resCursos.json(), // resCursos => cursos
  resBlogs.json()
])


  return {
      props:{
          guitarras,
          curso,
          entradas
      } 

  }
}
