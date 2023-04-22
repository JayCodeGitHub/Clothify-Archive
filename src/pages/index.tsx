import { Wrapper } from "@/styles/pages/home.styles";
import StoreItem from "@/components/storeItem/storeItem";
import { StoreItems } from "@/assets/storeItems";

export default function HomePage() {
  return (
    <Wrapper>
      {StoreItems.map(({ slug, name, img, price }) => (
        <StoreItem key={name} slug={slug} name={name} img={img} price={price} />
      ))}
    </Wrapper>
  );
}
