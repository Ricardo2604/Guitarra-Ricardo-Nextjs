import { useEffect, useState } from "react"
import Image from "next/image"
import Layout from "./component/layout"
import styles from "../styles/carrito.module.css"

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {

    const [total, setTotal] = useState(0)
    //calculo de total
    useEffect(() =>{
        const calculoTotal = carrito.reduce((total, producto)=> total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    },[carrito])

  return (
    <Layout
            title={'Carrito de Compras'}
            description="Blog de musica, guitarra, tienda de musica, carrito de compras"
        >
            <main className="contenedor">
                <h1 className="heading">Carrito de Compras </h1>
            </main>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                <h2 className={styles.articulosTitle}>Artículos:</h2>
                    
                    {carrito.length === 0 ? 'Carrito Vacio' :(
                        carrito.map(producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                    <Image width={250} height={450} src={producto.imagen} alt={producto.nombre}/>
                                </div>

                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <p>Cantidad: </p>
                                        <select 
                                            className={styles.select} onChange={e => actualizarCantidad({
                                            id: producto.id,
                                            cantidad: e.target.value
                                            })}
                                            value={producto.cantidad}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>SubTotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                </div>
                                <button 
                                    className={styles.eliminar}
                                    type="button"
                                    onClick={()=>eliminarProducto(producto.id)}       
                                >X</button>
                            </div>
                        ))
                    ) }

                </div>

                <aside className={styles.resumen}>
                    <h3>Resumen del Pedido</h3>
                    <p>Total a Pagar: ${total} </p>
                </aside> 
            </div>

            

    </Layout>
  )
}
