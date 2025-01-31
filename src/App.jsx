import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Layout from './components/pages/Layout'
import Nosotros from './components/pages/Nosotros'
import Productos from './components/pages/Productos'
import Error from './components/pages/Error'
import DetalleProducto from './components/pages/DetalleProducto'
import Carrito from "./components/pages/Carrito";
import { CartProvider } from "./components/CartContext";


function App() {

  return (
    <>
    <CartProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='productos' element={<Productos/>}/>
                <Route path='productos/:id' element={<DetalleProducto/>}/>
                <Route path='nosotros' element={<Nosotros/>}/>
                <Route path='carrito' element={<Carrito/>}/>
                <Route path='*' element={<Error/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
