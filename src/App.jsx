import Navbar from './components/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  )
}

export default App
