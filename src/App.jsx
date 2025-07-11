import { useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import { ProductCard } from './components/ProducCard'
import { Agregarproductos } from './components/Agregarproducto'
import { Formulario } from './components/Formulario'

function App() {
  const [productos, setProductos] = useState([
  {title:'Producto 1', description: 'Descripcion 1', image: 'https://fastly.picsum.photos/id/683/200/300.jpg?hmac=LalV5DeTpQsFRVpqJKk0lZ_zRqag95TYBrqTW06L9yw'},
  {title:'Producto 2', description: 'Descripcion 2', image: 'https://fastly.picsum.photos/id/115/200/300.jpg?hmac=56FxuW0OCxDfO0xEEO_66UkxJMvFKomxr9pNW_uAU5A'},
  {title:'Producto 3', description: 'Descripcion 3', image: 'https://fastly.picsum.photos/id/784/200/300.jpg?hmac=LIWlcHgxQH79XHKNji8Jin_KakntjYyd9VXyckNYFbE'}
])

  return (
    <>
      <Header/>
      <Agregarproductos setProductos={setProductos}/>
      {productos.map((productos, index) => <ProductCard
      key={index}
      title = {productos.title}
      image = {productos.image}
      description={productos.description}/>)}
      <Formulario/>
      
      
    </>
  )
}

export default App
