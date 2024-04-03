import Main from './pages/Main'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Questions from './pages/Questions'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/quiz' element={<Questions/>}/>
    </Routes>
    </>
  )
}

export default App
