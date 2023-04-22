import { Wrapper, StyledImage, Name, Price } from "./storeItem.styles";

interface StoreItemProps {
  slug: string;
  name: string;
  img: string;
  price: string;
}

export default function StoreItem({ slug, name, img, price }: StoreItemProps) {
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
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Wrapper>
  );
}
