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
import { motion, AnimatePresence } from "framer-motion";

const MotionSubtotal = motion(StyledSubtotal);
const MotionButtonWrapper = motion(StyledButtonWrapper);

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
        <MotionSubtotal
          layout
          transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
        >
          Subtotal: {subtotal()}$
        </MotionSubtotal>
        <MotionButtonWrapper
          layout
          transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
          href="/purchase"
          onClick={() => setIsCart(false)}
        >
          <Button>Purchase</Button>
        </MotionButtonWrapper>
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
