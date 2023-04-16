import { Background, OuterWrapper, Wrapper } from "./cart.styles";

interface CartProps {
  isCart: boolean;
  setIsCart: (a: boolean) => void;
}

export default function Cart({ isCart, setIsCart }: CartProps) {
  return (
    <>
      <OuterWrapper>
        <Background isCart={isCart} onClick={() => setIsCart(false)} />
        <Wrapper isCart={isCart}>
          <h1>Cart</h1>
        </Wrapper>
      </OuterWrapper>
    </>
  );
}
