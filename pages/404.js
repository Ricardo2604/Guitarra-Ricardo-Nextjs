import { useRouter } from 'next/router';
import Link from 'next/link'
import Layout from '../pages/component/layout'

export default function Pagina404() {
const router = useRouter()
const handleGoBack = () => {
  router.back()
}

  return (
    <div>
        <Layout
            title='Pagina no Encontrada'
        >
            <p className='error'>Pagina No Encontrada</p>

            <Link legacyBehavior href=''>
                <a className='error-enlace' onClick={handleGoBack}>Volver Atras</a> 
            </Link>
        
        </Layout>
    </div>
  )
}
