import Moment from 'react-moment';

import Image from 'next/image'
import Link from 'next/link';

import Style from '../../styles/Entrada.module.css'
import Layout from '../../components/Layout';



const EntradaBlogId = ({ entrada }) => {
//url esta unido con titulo como identificador uid
  const { id, titulo, imagen, resumen, contenido, udatedAt, published_at, url } = entrada[0]// indice 0 de entrada

  return (
   
    <Layout
      pagina={titulo}
    >
    <h3 className="heading">{titulo}</h3>
      <article>
      <Image priority="tru" layout="responsive" width={800} height={600} alt={` imagen de ${titulo}`} src={imagen.url} />
        <div className={Style.contenido}>
          <Moment format="D MMM YYYY" withTitle>
                    {published_at} 
          </Moment>
          <p className={Style.texto}>{contenido}</p>
          <Link href={`/blog`}
          ><a className={Style.enlace}> ver as blogs </a></Link>
        </div>

      </article>
    </Layout>


  );
}

export async function getStaticPaths() { // crea una lista de las rutas de cada blog
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  const paths = entradas.map(entrada => ({ // recorre el objeto paths
    params: { url: entrada.url } // convierte el id de number a string
  }))

  return { // deveulve las rutas
    paths,
    fallback: false // (propiedades (false,true, blocking), false para porcas rutas, true cuando hay muchisimas rutas, y blocking como server props)
  }

}

export async function getStaticProps({ params: { url } }) { // toma la ruta del blog a buscar y lo sirve en el coponete EntradaID

  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
  const respuesta = await fetch(urlBlog)
  const entrada = await respuesta.json()
  console.log('==>   .... ', url)
  console.log(entrada);

  return {
    props: {
      entrada
    }
  }
}



// export async function getServerSideProps( { query: {id}}){
//   console.log('...---.... ',id)
//   const url = `${ process.env.API_URL}/blogs/${id}`
//   const respuesta = await fetch(url)
//   const entrada = await respuesta.json()
//   console.log('==>   .... ',url)
//   console.log(entrada);

//   return {
//       props: {
//           entrada
//       }
//   }
// }

export default EntradaBlogId;