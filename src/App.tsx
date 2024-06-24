import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/'
import Sobre from './pages/about/'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
            </ Routes>
        </BrowserRouter>
    )
}

export default App