import { Wrapper, StyledImage, Title, Price } from "./storeItem.styles";

interface StoreItemProps {
  title: string;
  img: string;
  price: string;
}

export default function StoreItem({ title, img, price }: StoreItemProps) {
  return (
    <Wrapper href="/">
      <StyledImage
        src={img}
        alt="Picture of the author"
        width={500}
        height={500}
        blurDataURL="data:..."
        placeholder="blur"
      />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Wrapper>
  );
}
