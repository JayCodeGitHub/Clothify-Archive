import { Background, OuterWrapper, Wrapper, Subtotal } from "./cart.styles";
import CartItem from "../cartItem/cartItem";
import Button from "../button/button.styles";
import { useCart } from "@/hooks/useCart";

interface CartProps {
  isCart: boolean;
  setIsCart: (a: boolean) => void;
}

export default function Cart({ isCart, setIsCart }: CartProps) {
  const { cart } = useCart();
  return (
    <OuterWrapper>
      <Background isCart={isCart} onClick={() => setIsCart(false)} />
      <Wrapper isCart={isCart}>
        {cart.map((item) => (
          <CartItem
            key={item.name}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        <Subtotal>Subtotal: 76$</Subtotal>
        <Button>Purchase</Button>
      </Wrapper>
    </OuterWrapper>
  );
}
