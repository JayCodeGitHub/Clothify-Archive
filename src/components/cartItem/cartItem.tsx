import {
  Wrapper,
  StyledImage,
  Name,
  Price,
  QuantityWrapper,
  IconWrapper,
  Quantity,
  Description,
} from "./cartItem.styles";

interface CartItemProps {
  name: string;
  quantity: number;
  price: number;
}

export default function CartItem({ name, price, quantity }: CartItemProps) {
  return (
    <Wrapper>
      <StyledImage
        src="/Items/t-shirt.jpeg"
        alt="Item Image"
        width={500}
        height={500}
        blurDataURL="data:..."
        placeholder="blur"
      />
      <Description>
        <Name>{name}</Name>
        <Price>{price}$</Price>
        <QuantityWrapper>
          Quantity:
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </IconWrapper>
          <Quantity>{quantity}</Quantity>
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </IconWrapper>
        </QuantityWrapper>
      </Description>
    </Wrapper>
  );
}
