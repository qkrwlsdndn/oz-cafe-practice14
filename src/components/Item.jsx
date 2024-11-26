import { useCart } from "./context/cartContext";

function Item({ item }) {
  const { cart, setCart } = useCart();

  const clickHandler = () => {
    const exists = cart.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      alert("이미 장바구니에 담긴 상품입니다.");
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <li className="item" onClick={clickHandler}>
      <img width={50} src={item.img} />
      <section>
        <div>{item.name}</div>
        <div>{item.price}원</div>
      </section>
    </li>
  );
}

export default Item;
