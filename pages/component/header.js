import Image from "next/image"
import Link from "next/link"
import {useRouter} from 'next/router'
import headerCss from '/styles/header.module.css'

export default function Header() {
  const router = useRouter();
  


  

  return (
    <header className={headerCss.header}>
        <div className={`contenedor ${headerCss.barra}`}>
            <Link href={'/'}>
             
                <Image src='/img/logo.svg' width={300} height={40} alt="imagen logotipo" priority={true}/>
              
            </Link>
            
            <nav className={headerCss.navegacion}>
              <Link legacyBehavior href='/'>
                <a className={ router.pathname === '/' ? headerCss.active : '' }>Inicio</a>                
              </Link>

              <Link legacyBehavior href='/nosotros'>
                <a className={router.pathname === '/nosotros' ? headerCss.active : ''}>Nosotros</a>
              </Link>

              <Link legacyBehavior href='/tienda'>
                <a className={router.pathname === '/tienda' ? headerCss.active : ''}>Tienda</a>
              </Link>

              <Link legacyBehavior href='/blog'>
                <a className={router.pathname === '/blog' ? headerCss.active : ''}>Blog</a>
              </Link>

              <Link legacyBehavior href='/carrito'>
                <a>
                  <Image width={30} height={25} src="/img/carrito.png" alt="carrito de compras"/>
                </a>
              </Link>
            </nav>
                      
        </div >
    </header>
  )
}
