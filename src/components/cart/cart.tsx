import {
  Background,
  OuterWrapper,
  Wrapper,
  CartItem,
  Subtotal,
  Button,
} from "./cart.styles";

interface CartProps {
  isCart: boolean;
  setIsCart: (a: boolean) => void;
}

export default function Cart({ isCart, setIsCart }: CartProps) {
  return (
    <OuterWrapper>
      <Background isCart={isCart} onClick={() => setIsCart(false)} />
      <Wrapper isCart={isCart}>
        <CartItem>
          <h1>Cart</h1>
        </CartItem>
        <Subtotal>Subtotal: 76$</Subtotal>
        <Button>Purchase</Button>
      </Wrapper>
    </OuterWrapper>
  );
}
