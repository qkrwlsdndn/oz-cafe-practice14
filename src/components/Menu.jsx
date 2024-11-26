import { useState } from "react";
import { useMenu } from "../Context/menuContext"; // menuContext 사용
import { useCart } from "../Context/cartContext"; // cartContext 사용
import Item from "./Item";
import OrderModal from "./OrderModal";

function Menu() {
  const { menu } = useMenu(); // menuContext에서 menu 상태 가져오기
  const { cart, setCart } = useCart(); // cartContext에서 cart 상태와 setCart 함수 가져오기
  const [modalOn, setModalOn] = useState(false); // 모달 상태 관리
  const [modalMenu, setModalMenu] = useState(null); // 모달에 표시할 메뉴 상태

  // menu 데이터가 없는 경우 처리
  if (!menu) {
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );
  }

  const categorys = Object.keys(menu); // menu 데이터의 카테고리 추출

  return (
    <>
      {categorys.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map((item) => (
              <Item
                key={item.id}
                item={item}
                clickHandler={() => {
                  setModalMenu(item); // 모달에 표시할 메뉴 설정
                  setModalOn(true); // 모달 활성화
                }}
              />
            ))}
          </ul>
        </section>
      ))}
      {modalOn && (
        <OrderModal
          modalMenu={modalMenu} // 선택된 메뉴 정보 전달
          setModalOn={setModalOn} // 모달 닫기 함수 전달
        />
      )}
    </>
  );
}

export default Menu;
