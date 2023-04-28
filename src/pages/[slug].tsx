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
import { useAlert } from "@/hooks/useAlert";
import { motion } from "framer-motion";

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

const MotionWrapper = motion(Wrapper);

export default function Item({ item }: any) {
  const [count, setCount] = useState(1);
  const { dispatchAlert } = useAlert();
  const { addItem } = useCart();
  const addToCart = () => {
    setCount(1);
    if (count > 0) {
      addItem(item, count);
      dispatchAlert(item.name);
    }
  };
  return (
    <MotionWrapper
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
      exit={{ opacity: "0%" }}
    >
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
        <p>{item.description}</p>
        <h2>{item.price}$</h2>
        <QuantityWrapper>
          Quantity:
          <IconWrapper
            aria-label="button with a minus icon to reduce the amount of product"
            onClick={() => setCount(count - 1)}
          >
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
          <IconWrapper
            aria-label="button with a plus icon to increase the amount of product"
            onClick={() => setCount(count + 1)}
          >
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
    </MotionWrapper>
  );
}
