import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Front from './pages/Front'
import Sign from './pages/Sign'
export default function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Front />} />
      <Route path='/signin' element={<Sign />} />
    </Routes>
    </BrowserRouter>
  )
}
