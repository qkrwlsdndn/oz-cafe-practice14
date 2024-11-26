import { Link } from "react-router-dom";
import { useCart } from "./context/cartContext";

function Header() {
  const { cart } = useCart();

  return (
    <header>
      <h1>☕ 오즈 카페</h1>
      <nav>
        <Link to="/">메인</Link>
        <Link to="/cart">
          장바구니
          {cart.length > 0 && <span> ({cart.length})</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
