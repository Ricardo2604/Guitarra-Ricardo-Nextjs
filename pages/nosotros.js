import Image from "next/image"
import Layout from "./component/layout"
import styles from  "../styles/nosotros.module.css"

export default function Nosotros() {
    return (
        <Layout
            title={'Sobre Nosotros'}
            description="Sobre Nosotros, guitarra, tienda de musica">
            
            <main className="contenedor">
                <h2 className="heading">nosotros</h2>

                <div className={styles.contenido} >
                    <Image src='/img/nosotros.jpg' width={700} height={500}  alt='Imagen sobre nosotros'/>
                    <div>
                        <p>
                            "En nuestra apasionada y vibrante empresa Guitarra-Ricardo, 
                            hemos estado en sintonía con la música y la comunidad de guitarristas durante más de una década. 
                            Nuestra pasión por las seis cuerdas es contagiosa, 
                            y nuestro compromiso con la excelencia musical es incomparable. 
                            Nuestro amplio catálogo de guitarras cuidadosamente seleccionadas ofrece una sinfonía de opciones, 
                            permitiéndoles encontrar su sonido ideal. Pero no termina aquí.
                        </p> 
                            
                        <p>
                            Nuestros renombrados cursos de guitarra son el compás que guía a los músicos en su viaje musical. 
                            Nuestro equipo experto está siempre afinado para brindar recomendaciones personalizadas, 
                            ajustes y consejos para que encuentren el instrumento perfecto. 
                            Únanse a nuestra comunidad de amantes de la guitarra y descubran el compás de la melodía que marcará la diferencia en su viaje musical.
                            ¡La sinfonía de las seis cuerdas les aguarda!"
                        </p>
                    </div>
                </div>
            </main>
            
        </Layout>
    )
}
