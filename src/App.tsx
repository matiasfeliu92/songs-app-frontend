import { ShowSongs } from './components/ShowSongs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowSongs/>}/>
          <Route path='/new-song' element={<h1>CREAR NUEVA CANCION</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
