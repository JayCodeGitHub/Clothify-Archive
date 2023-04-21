import { Wrapper } from "@/styles/pages/home.styles";
import StoreItem from "@/components/storeItem/storeItem";
import { StoreItems } from "@/assets/storeItems";

export default function HomePage() {
  return (
    <Wrapper>
      {StoreItems.map(({ slug, title, img, price }) => (
        <StoreItem
          slug={slug}
          title={title}
          img={img}
          price={price}
          key={title}
        />
      ))}
    </Wrapper>
  );
}
