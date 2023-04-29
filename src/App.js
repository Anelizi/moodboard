import { BrowserRouter, Route, Routes, useActionData } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/HomePage";
import Product from "./pages/ProductPage";
import Cart from "./pages/CartPage";
import PurchasesMade from "./pages/PurchasesMadePage"
import { useState } from "react";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
import styled from "styled-components";

export default function App() {
  
  const [image, setImage]= useState("")
  const [product, setProduct]= useState("")
  const [description, setDescription]= useState("")
  const [price, setPrice]= useState(0)
  const [amount, setAmount]= useState(0)
  const ProductValue= {image: image, setImage: setImage, product: product, setProduct: setProduct, description: description, 
    setDescription: setDescription, price: price, setPrice: setPrice, amount: amount, setAmount: setAmount}
  
  const [total, setTotal]=useState(0)
  const [address, setAddress]= useState("")
  const [cart, setCart]= useState([])
  const [open, setOpen]= useState(false)
  const CartValue= {total: total, setTotal: setTotal, address: address, setAddress: setAddress,
     cart: cart, setCart: setCart, open: open, setOpen: setOpen, price: price,amount: amount}


  return (
  <PagesContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/cadastro" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/product/:product_name" element={<ProductContext.Provider value={ProductValue}><Product/></ProductContext.Provider>} />
        <Route path="/cart" element={<CartContext.Provider value={CartValue}><Cart/></CartContext.Provider>} />
        <Route path="/purchasesMade" element={<PurchasesMade/>} />
      </Routes>
    </BrowserRouter>
  </PagesContainer>
  );
}

const PagesContainer = styled.main`
  background-color: #ffffff;
  width: 100vw;
  max-height: 100vh;
`