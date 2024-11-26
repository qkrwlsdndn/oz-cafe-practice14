import React, { createContext, useContext, useState } from "react";
import data from "../assets/data"; // 초기 데이터 로드

// Menu Context 생성
const MenuContext = createContext();

// Menu Provider 정의
export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(data.menu); // 메뉴 데이터 상태 관리

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

// 커스텀 훅으로 Menu Context 사용
export const useMenu = () => useContext(MenuContext);
