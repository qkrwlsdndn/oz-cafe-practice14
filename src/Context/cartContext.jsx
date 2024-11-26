import React, { createContext, useContext, useState } from "react";

// Cart Context 생성
const CartContext = createContext();

// Cart Provider 정의
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // 장바구니 상태 관리

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 커스텀 훅으로 Cart Context 사용
export const useCart = () => useContext(CartContext);
