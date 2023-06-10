import {
  StyledWrapper,
  StyledImage,
  StyledName,
  StyledPrice,
} from "./storeItem.styles";

interface StoreItemProps {
  slug: string;
  name: string;
  img: string;
  price: number;
}

export default function StoreItem({ slug, name, img, price }: StoreItemProps) {
  return (
    <StyledWrapper href={slug}>
      <StyledImage
        src={img}
        alt="Picture of the item"
        width={666}
        height={1000}
        blurDataURL="data:..."
        placeholder="blur"
      />
      <StyledName>{name}</StyledName>
      <StyledPrice>{price}$</StyledPrice>
    </StyledWrapper>
  );
}
