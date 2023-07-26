import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "../component/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"
import { formatearFecha } from "../../utils/helpers"

export default function Post({post}) {
    const { contenido, imagen, titulo, publishedAt } = post[0].attributes 

    const router = useRouter();
    const [isAtTop, setIsAtTop] = useState(true);

    const handleGoBack = () => {
        router.back();
      };

      const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      // Escucha el evento scroll para mostrar u ocultar el botón "Arriba" dependiendo de la posición de la página.
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  };

  // Agrega el evento de escucha al montar el componente.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} width={1000} height={400} alt={`imagen blog ${titulo}`}/>
        
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
                {/* Botón "Arriba" */}
                {!isAtTop && (
                    <button className={styles.arribaBtn} onClick={handleScrollToTop}>
                    Arriba
                    </button>
                )}
            </div>
             
        </article>

              
    
    </Layout>
  )
}

export async function getServerSideProps({query:{url}}){
    
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json()   
            
    return{
        props:{
            post            
        }}
}
