import Layout from "./component/layout"
import Post from "./component/post";
import styles from '../styles/grid.module.css'

export default function Blog({posts}) {
    console.log(posts);
    return (
        <Layout
            title={'Blog'}
            description="Blog de musica, guitarra, tienda de musica"
        >
            <main className="contenedor">
                <h1 className="heading"> Blog </h1>
                <div className={styles.grid} >
                    {posts.map(post =>(
                        <Post
                        key={post.id}
                        post={post.attributes}                     
                        />
                    ))}
                </div>

            </main>
            
        </Layout>
    )
}

export async function getStaticProps() {
    const apiUrl = process.env.API_URL;
    const respuesta = await fetch(`${apiUrl}/posts?populate=imagen`)
    const {data: posts } = await respuesta.json()
    
    return{
        props: {
            posts
        }
    }
}