import { useRouter } from "next/router";

import Link from "next/link";

import Image from 'next/image'

import Style from '../styles/Header.module.css'

const Header = ({guitarra}) => {

    const router = useRouter()
 
    return (
        <header className={Style.header}>
            <div className="contenedor">
                <div className={Style.barra}>
                <div>
                    <Link href="/">
                        <a>
                          <Image width={300} height={100} src="/img/logo.svg" alt="imagen de logo"/>
                        </a>
                   
                    </Link>
                   
                </div>
                <nav className={Style.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/carrito">
                        <a>
                            <Image layout="fixed" width={30} height={25}  src="/img/carrito.png"/>
                        </a>
                    </Link>
                </nav>
                </div>
               { guitarra && (
                   <div className={Style.modelo}>
                   <h2>{ guitarra.nombre }</h2>
                     <p >{ guitarra.descripcion }</p>
                     <p className={Style.precio}>S/. { guitarra.precio }</p>
                     <Link href={`/guitarras/${guitarra.urlGuitarra}`}>
                     <p className={Style.enlace}>ver mas</p>
                     </Link>
            </div>
               ) 
            }
            </div>

            { router.pathname === '/' && (
                <div className={Style.guitarra} >
                    
                    <Image  width={400} height={900} src="/img/header_guitarra.png" alt="guitarra_header" />
               </div>
                
            )}
        </header>
      );
}
 
export default Header;
