import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Front from './pages/Front'
import Sign from './pages/Sign'
import Signup from './pages/Signup'
export default function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Front />} />
      <Route path='/signin' element={<Sign />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}
