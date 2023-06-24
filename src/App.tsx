import { ShowSongs } from './components/ShowSongs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CreateSongs } from './components/CreateSongs'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowSongs/>}/>
          <Route path='/new-song' element={<CreateSongs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
