import { Wrapper, StyledImage, Title, Price } from "./storeItem.styles";

export default function StoreItem() {
  return (
    <Wrapper href="/">
      <StyledImage
        src="/t-shirt.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
        blurDataURL="data:..."
        placeholder="blur"
      />
      <Title>T-Shirt</Title>
      <Price>12$</Price>
    </Wrapper>
  );
}
