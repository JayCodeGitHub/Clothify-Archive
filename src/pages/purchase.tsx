import {
  StyledWrapper,
  StyledCartSection,
  StyledTitle,
  StyledFormSection,
} from "@/styles/pages/purchase.styles";
import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/cartItem/cartItem";
import Form from "@/components/form/form";

export default function PurchasePage() {
  const { cart } = useCart();
  return (
    <StyledWrapper>
      <StyledCartSection>
        <StyledTitle>Your order</StyledTitle>
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
      </StyledCartSection>
      <StyledFormSection>
        <Form />
      </StyledFormSection>
    </StyledWrapper>
  );
}
