import Link from "next/link"
import footerCss from '/styles/footer.module.css'


export default function Footer() {
  return (
    <footer className={footerCss.footer}>
      <div className={`contenido ${footerCss.contenido}`}>
        <nav className={footerCss.navegacion} >
              <Link href='/'>
                Inicio                
              </Link>

              <Link href='/nosotros'>
                Nosotros
              </Link>

              <Link href='/tienda'>
                Tienda
              </Link>

              <Link href='/blog'>
                Blog
              </Link>
        </nav>

        <p className={footerCss.copyright}>Todos los Derechos Reservados. { new Date().getFullYear()} </p>
      </div>
    </footer>
  )
}
