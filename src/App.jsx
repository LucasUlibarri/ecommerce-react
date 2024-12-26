import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/pages/home'
import Layout from './components/pages/layout'
import Nosotros from './components/pages/Nosotros'
import Productos from './components/pages/Productos'
import Error from './components/pages/Error'
import DetalleProducto from './components/pages/DetalleProducto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='productos' element={<Productos/>}/>
              <Route path='productos/:id' element={<DetalleProducto/>}/>
              <Route path='nosotros' element={<Nosotros/>}/>
              <Route path='*' element={<Error/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
