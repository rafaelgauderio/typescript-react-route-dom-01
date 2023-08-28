import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import HomeBody from './pages/Home/HomeBody'
import Promotion from './pages/Home/Promotion'
import Subscription from './pages/Home/Subscription'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<HomeBody></HomeBody>}></Route>
            <Route path="promotion" element={<Promotion></Promotion>}></Route>
            <Route path="subscription" element={<Subscription></Subscription>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
