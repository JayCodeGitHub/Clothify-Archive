import { Wrapper, StyledImage, Title, Price } from "./storeItem.styles";

interface StoreItemProps {
  slug: string;
  title: string;
  img: string;
  price: string;
}

export default function StoreItem({ slug, title, img, price }: StoreItemProps) {
  return (
    <Wrapper href={slug}>
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
