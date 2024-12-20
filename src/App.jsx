import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Section from './Components/Section';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Shop from './Components/Shop';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import ProductDetails from './Contexts/ProductDetails';
import { CartProvider } from './Contexts/CartContexts';
import CheckOuts from './Components/CheckOuts';
import Checkout from './Components/Checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


function App() {
  return (
    <PayPalScriptProvider>
      <CartProvider>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/shop' element={<Shop/>}/>
              <Route path='/blog' element={<HomePage/>}/>
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/contact' element={<ContactUs/>}/>
              <Route path='/product/:id' element={<ProductDetails/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter> 
      </CartProvider>  
    </PayPalScriptProvider>
  );
}

export default App;
