import {
  Background,
  OuterWrapper,
  Wrapper,
  Subtotal,
  ButtonWrapper,
} from "./cart.styles";
import CartItem from "../cartItem/cartItem";
import Button from "../button/button.styles";
import { useCart } from "@/hooks/useCart";

interface CartProps {
  isCart: boolean;
  setIsCart: (a: boolean) => void;
}

export default function Cart({ isCart, setIsCart }: CartProps) {
  function subtotal() {
    let current = 0;
    cart.map((item) => (current += item.price * item.quantity));
    return current;
  }
  const { cart } = useCart();
  return (
    <OuterWrapper>
      <Background isCart={isCart} onClick={() => setIsCart(false)} />
      <Wrapper isCart={isCart}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        <Subtotal>Subtotal: {subtotal()}$</Subtotal>
        <ButtonWrapper href="/purchase" onClick={() => setIsCart(false)}>
          <Button>Purchase</Button>
        </ButtonWrapper>
      </Wrapper>
    </OuterWrapper>
  );
}
