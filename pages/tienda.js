import Layout from '../components/Layout'
import Listado from '../components/Listado';

const Tienda = ({ guitarras }) => {
   
    return (  
        <Layout
        pagina="Tienda Virtual"
        >
              <main>
                  <h2 className='heading'>Nuestra Coleccion</h2>
                  <Listado
                    guitarras={guitarras}
                  />
              </main>
        </Layout>
            
       
    );
}

//getServerSideProps, StaticProps // solo se ejecutan desde Pages no en componentes

export async function getServerSideProps(){
    const url = `${ process.env.API_URL}/guitarras`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()
    console.log(guitarras);

    return {
        props:{
            guitarras
        } 

    }
}
 
export default Tienda;
