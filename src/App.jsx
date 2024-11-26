import React from "react";
import { CartProvider } from "./context/cartContext";
import { MenuProvider } from "./context/menuContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MenuProvider>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </CartProvider>
    </MenuProvider>
  );
}

export default App;
