import Style from '../styles/Curso.module.css'

const Curso = ( {cursos }) => {
    const { titulo, imagen, contenido } = cursos
    return (
        <section>
             <div className={`contenedor ${Style.grid}`}>
                <div className={Style.contenido}>
                    <h2>{ titulo }</h2>
                    <p>{ contenido}</p>
                    <a className={Style.enlace} href="#">Saber mas</a>
                </div>
            </div>
            <style jsx> { `
                section{
                        padding: 7rem 0;
                        margin-top: 10rem;
                        background-image: linear-gradient(to right, rgb( 0 0 0 /.65), rgb(0 0 0 /.7)), url(${imagen.url}) ;
                        background-size:cover;
                        background-position:50%;
                }
            `}

            </style>
        </section> 
       
     );
}
 
export default Curso;