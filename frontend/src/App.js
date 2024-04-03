
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Payment from '.Pages/Payment';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Product from './Pages/Product';
import UserPage from './Pages/UserPage';
import Search from './Pages/Search';
import headphone_banner from './Components/Assets/headphone_banner.png';
import laptop_banner from './Components/Assets/laptop_banner.png';
import keyboard_banner from './Components/Assets/keyboard_banner.png';
import mouse_banner from './Components/Assets/mouse_banner.png';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/headphone' element={<ShopCategory banner={headphone_banner} category='headphone' />}></Route>
          <Route path='/laptop' element={<ShopCategory banner={laptop_banner} category='laptop' />}></Route>
          <Route path='/mouse' element={<ShopCategory banner={mouse_banner} category='mouse' />}></Route>
          <Route path='/keyboard' element={<ShopCategory banner={keyboard_banner} category='keyboard' />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/userpage' element={<UserPage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
