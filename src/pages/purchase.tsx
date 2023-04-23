import {
  Wrapper,
  CartSection,
  Title,
  FormSection,
} from "@/styles/pages/purchase.styles";
import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/cartItem/cartItem";
import Form from "@/components/form/form";

export default function PurchasePage() {
  const { cart } = useCart();
  return (
    <Wrapper>
      <CartSection>
        <Title>Your order</Title>
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
      </CartSection>
      <FormSection>
        <Title>Payment</Title>
        <Form />
      </FormSection>
    </Wrapper>
  );
}
