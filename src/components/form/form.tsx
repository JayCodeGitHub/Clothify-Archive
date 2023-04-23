import {
  Wrapper,
  StyledInput,
  Headline,
  StyledButton,
  Paragraph,
} from "./form.styles";
import { useCart } from "@/hooks/useCart";

export default function Form() {
  const { cart } = useCart();
  function subtotal() {
    let current = 0;
    cart.map((item) => (current += item.price * item.quantity));
    return current;
  }
  return (
    <Wrapper>
      <Headline>Personal Data</Headline>
      <StyledInput type="text" id="email" name="email" placeholder="Email" />
      <br />
      <StyledInput type="text" id="name" name="name" placeholder="Name" />
      <br />
      <StyledInput
        type="text"
        id="lname"
        name="lname"
        placeholder="Last Name"
      />
      <br />
      <StyledInput
        type="text"
        id="address"
        name="address"
        placeholder="Address"
      />
      <Headline>Card</Headline>
      <StyledInput
        type="number"
        id="number"
        name="number"
        required
        placeholder="1234 1234 1234 1234"
      />
      <br />
      <StyledInput
        type="number"
        id="date"
        name="date"
        placeholder="MM/YY"
        max="9999"
      />
      <br />
      <StyledInput type="number" id="cvc" name="cvc" placeholder="CVC" />
      <br />
      <Paragraph>
        the content on this page is not intended to be an offer for sale.
      </Paragraph>
      <Paragraph>Subtotal: {subtotal()}$</Paragraph>
      <StyledButton>Order</StyledButton>
    </Wrapper>
  );
}
