import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Front from './pages/Front'
import Sign from './pages/Sign'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Vplayer from './pages/Vplayer'
import Account from './pages/Account'
import Tvmovie from './pages/Tvmovie'
import Member from './pages/Member'
import Profiles from './pages/Profiles'
import Changeplan from './pages/Changeplan'
import Managepayment from './pages/Managepayment'
import Changepassword from './pages/Changepassword'
import Billingdetails from './pages/Billingdetails'
import Privateroutes from './PrivateRoutes'
import List from './pages/List'
import AddPro from './pages/AddPro'
import UnprivateRoutes from './UnprivateRoutes'
export default function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route element={<UnprivateRoutes />}>
    <Route path='/' element={<Front />} />
      <Route path='/signin' element={<Sign />} />
      <Route path='/signup' element={<Signup />} />
      </Route>
    
      <Route element={<Privateroutes/>}>
      <Route path='/home' element={<Home />} />
      <Route path='/acc' element={<Account />} />
      <Route path='/member' element={<Member />} />
      <Route path='/pro' element={<Profiles />} />
      <Route path='/play' element={<Vplayer />} />
      <Route path='/tv' element={<Tvmovie />} />
      <Route path='/cplan' element={<Changeplan />} />
      <Route path='/managepayment' element={<Managepayment/>}/>
      <Route path='/changepassword' element={<Changepassword/>}/>
      <Route path='/billingdetails' element={<Billingdetails/>}/>
      <Route path='/addpro' element={<AddPro />} />
      <Route path='/list' element={<List />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
