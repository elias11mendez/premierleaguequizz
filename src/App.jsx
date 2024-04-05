import Main from './pages/Main'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Selection from './pages/Selection'
import Liverpool from './components/Liverpool'
import Arsenal from './components/Arsenal'
import Chelsea from './components/Chelsea'
import Tot from './components/Tot'
import United from './components/United'
import Mancity from './components/Mancity'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Selection' element={<Selection/>}/>

      <Route path='/mancity' element={<Mancity/>}/>
      <Route path='/liverpool' element={<Liverpool/>}/>
      <Route path='/arsenal' element={<Arsenal/>}/>
      <Route path='/chelsea' element={<Chelsea/>}/>
      <Route path='/tot' element={<Tot/>}/>
      <Route path='/United' element={<United/>}/>

    </Routes>
    </>
  )
}

export default App
