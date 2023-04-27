import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/HomePage";
import Product from "./pages/ProductPage";
import Cart from "./pages/CartPage";
import PurchasesMade from "./pages/PurchasesMadePage"

export default function App() {
  return (
  <PagesContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/cadastro" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
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