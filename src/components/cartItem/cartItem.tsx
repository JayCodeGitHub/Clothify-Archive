import {
  StyledWrapper,
  StyledImage,
  StyledName,
  StyledPrice,
  StyledQuantityWrapper,
  StyledIconWrapper,
  StyledQuantity,
  StyledDescription,
} from "./cartItem.styles";
import { useCart } from "@/hooks/useCart";
import { motion } from "framer-motion";

const MotionWrapper = motion(StyledWrapper);

interface CartItemProps {
  secondary?: boolean;
  id: number;
  img: string;
  name: string;
  quantity: number;
  price: number;
}

export default function CartItem({
  secondary,
  id,
  img,
  name,
  price,
  quantity,
}: CartItemProps) {
  const { quantityIncrementation, quantityDecrementation, removeItem } =
    useCart();
  return (
    <>
      {secondary ? (
        <StyledWrapper>
          <StyledImage
            src={img}
            alt="Item Image"
            width={666}
            height={1000}
            blurDataURL="data:..."
            placeholder="blur"
          />
          <StyledDescription>
            <StyledName>{name}</StyledName>
            <StyledPrice>{price}$</StyledPrice>
            <StyledQuantityWrapper>
              Quantity:
              <StyledIconWrapper
                aria-label="button with a minus icon to reduce the amount of product"
                onClick={() => quantityDecrementation(id, 1)}
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
              </StyledIconWrapper>
              <StyledQuantity>{quantity}</StyledQuantity>
              <StyledIconWrapper
                aria-label="button with a plus icon to increase the amount of product"
                onClick={() => quantityIncrementation(id, 1)}
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
              </StyledIconWrapper>
            </StyledQuantityWrapper>
          </StyledDescription>
        </StyledWrapper>
      ) : (
        <MotionWrapper
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
          exit={{ opacity: "0%" }}
          layoutId={id}
        >
          <StyledImage
            src={img}
            alt="Item Image"
            width={666}
            height={1000}
            blurDataURL="data:..."
            placeholder="blur"
          />
          <StyledDescription>
            <StyledName>{name}</StyledName>
            <StyledPrice>{price}$</StyledPrice>
            <StyledQuantityWrapper>
              Quantity:
              <StyledIconWrapper
                aria-label="button with a minus icon to reduce the amount of product"
                onClick={() => quantityDecrementation(id, 1)}
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
              </StyledIconWrapper>
              <StyledQuantity>{quantity}</StyledQuantity>
              <StyledIconWrapper
                aria-label="button with a plus icon to increase the amount of product"
                onClick={() => quantityIncrementation(id, 1)}
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
              </StyledIconWrapper>
            </StyledQuantityWrapper>
          </StyledDescription>
        </MotionWrapper>
      )}
    </>
  );
}
