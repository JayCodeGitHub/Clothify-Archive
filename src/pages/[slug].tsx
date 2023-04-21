import { StoreItems } from "@/assets/storeItems";

export async function getStaticPaths() {
  return {
    paths: StoreItems.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug;
  const item = StoreItems.filter((item) => item.slug == slug)[0];
  return {
    props: { item },
  };
}

export default function Item({ item }: any) {
  return (
    <main>
      <h1>{item.title}</h1>
    </main>
  );
}
