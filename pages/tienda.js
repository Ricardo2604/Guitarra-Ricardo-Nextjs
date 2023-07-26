import Layout from "./component/layout"
import Guitarra from "./component/guitarra";
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {

    
    
    return (
        <Layout
            title={'Tienda Virtual'}
            description="Tienda Virtual, guitarra, tienda de guitarras">
            
            <main className="contenedor">
                <h1 className="heading">Bienvenido a la tienda virtual!</h1>

                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    
                    ))}              
                </div>
                
            </main>
            
        </Layout>
    )
}

/*export async function getStaticProps() {
    const apiUrl = process.env.API_URL;
    const respuesta = await fetch(`${apiUrl}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()
    
    return{
        props: {
            guitarras
        }
    }
}*/

export async function getServerSideProps() {
    const apiUrl = process.env.API_URL;
    const respuesta = await fetch(`${apiUrl}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()
    
    return{
        props: {
            guitarras
        }
    }
}
