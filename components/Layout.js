
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
//import Footer from "next/foter";


const Layout = ({children, pagina, guitarra, cantidad, setCantidad }) => {
    return (
        <div>
           
            <Head>
                <title>Tienda - { pagina}</title>
                <meta name="description" content="tienda online de venta de articulos" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
            </Head>
            <Header
                guitarra={guitarra}
            />
            {children}
            <Footer/>
        </div>
         
         
      
     );
}

export default Layout;