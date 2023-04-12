import { Wrapper } from "@/styles/pages/home.styles";
import StoreItem from "@/components/storeItem/storeItem";

export default function HomePage() {
  return (
    <Wrapper>
      <StoreItem title="T-Shirt" img="/items/t-shirt.jpeg" price="12$" />
      <StoreItem title="Red Hat" img="/items/hat.jpeg" price="20$" />
      <StoreItem title="Jacket" img="/items/jacket.jpeg" price="45$" />
      <StoreItem
        title="Jean Jacket"
        img="/items/jean-jacket.jpeg"
        price="40$"
      />
      <StoreItem title="Sweatshirt" img="/items/sweatshirt.jpeg" price="30$" />
      <StoreItem title="Trousers" img="/items/trousers.jpeg" price="20$" />
    </Wrapper>
  );
}
