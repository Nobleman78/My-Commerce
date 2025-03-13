import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Placeorder from './Pages/Placeorder'
import Order from './Pages/Order'
import Collection from './Pages/Collection'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'

function App() {


  return (
    <div className='px-4 sm:px-[5w] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Searchbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/place-order' element={<Placeorder/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/collection' element={<Collection/>}/>
      </Routes>

    <Footer/>
    </div>
  )
}

export default App
