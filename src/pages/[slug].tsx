import { useState } from "react";
import { StoreItems } from "@/assets/storeItems";
import {
  Wrapper,
  StyledImage,
  QuantityWrapper,
  IconWrapper,
  Quantity,
  DescriptionWrapper,
} from "@/styles/pages/item.styles";
import Button from "@/components/button/button.styles";
import { useCart } from "@/hooks/useCart";

export async function getStaticPaths() {
  return {
    paths: StoreItems.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug;
  const item = StoreItems.filter((item) => item.slug == slug)[0];
  return {
    props: { item },
  };
}

export default function Item({ item }: any) {
  const [count, setCount] = useState(1);
  const { addItem, cart } = useCart();
  const addToCart = () => {
    addItem(item, count);
    setCount(1);
  };
  console.log(cart);
  return (
    <Wrapper>
      <StyledImage
        src={item.img}
        alt="Picture of the author"
        width={500}
        height={500}
        blurDataURL="data:..."
        placeholder="blur"
      />
      <DescriptionWrapper>
        <h1>{item.name}</h1>
        <h2>{item.description}</h2>
        <h3>{item.price}</h3>
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
        <Button onClick={addToCart}>Add to cart</Button>
      </DescriptionWrapper>
    </Wrapper>
  );
}
