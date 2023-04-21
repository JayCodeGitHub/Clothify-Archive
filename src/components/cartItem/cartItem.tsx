import { useState } from "react";
import {
  Wrapper,
  StyledImage,
  Title,
  Price,
  QuantityWrapper,
  IconWrapper,
  Quantity,
  Description,
} from "./cartItem.styles";

export default function CartItem() {
  const [count, setCount] = useState(1);
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
        <Title>T-Shirt</Title>
        <Price>12$</Price>
        <QuantityWrapper>
          Quantity:
          <IconWrapper onClick={() => setCount(count - 1)}>
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
          <Quantity>{count}</Quantity>
          <IconWrapper onClick={() => setCount(count + 1)}>
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
