import Link from 'next/link'

const PageNoFound = () => {
    return ( <>
           <center>
           <h1>Pagina no encontrada</h1>
           <Link href={'/'}>Volver  al Inicio</Link>
           </center>
           
            
        </>
      
     );
}
 
export default PageNoFound;