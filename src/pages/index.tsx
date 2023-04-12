import { Wrapper } from "@/styles/pages/home.styles";
import StoreItem from "@/components/storeItem/storeItem";
import { HomeItems } from "@/assets/homeItems";

export default function HomePage() {
  return (
    <Wrapper>
      {HomeItems.map(({ title, img, price }) => (
        <StoreItem title={title} img={img} price={price} key={title} />
      ))}
    </Wrapper>
  );
}
