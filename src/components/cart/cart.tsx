import {
  StyledBackground,
  StyledOuterWrapper,
  StyledWrapper,
  StyledSubtotal,
  StyledButtonWrapper,
} from "./cart.styles";
import CartItem from "../cartItem/cartItem";
import Button from "../button/button.styles";
import { useCart } from "@/hooks/useCart";

interface CartProps {
  isCart: boolean;
  setIsCart: (a: boolean) => void;
}

export default function Cart({ isCart, setIsCart }: CartProps) {
  const { cart } = useCart();
  function subtotal() {
    let current = 0;
    cart.map((item) => (current += item.price * item.quantity));
    return current;
  }
  return (
    <StyledOuterWrapper>
      <StyledBackground isCart={isCart} onClick={() => setIsCart(false)} />
      <StyledWrapper isCart={isCart}>
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
        <StyledSubtotal>Subtotal: {subtotal()}$</StyledSubtotal>
        <StyledButtonWrapper href="/purchase" onClick={() => setIsCart(false)}>
          <Button>Purchase</Button>
        </StyledButtonWrapper>
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
