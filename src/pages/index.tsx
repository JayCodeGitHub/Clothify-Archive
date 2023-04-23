import { Wrapper } from "@/styles/pages/home.styles";
import StoreItem from "@/components/storeItem/storeItem";
import { StoreItems } from "@/assets/storeItems";
import { motion } from "framer-motion";

const MotionWrapper = motion(Wrapper);

export default function HomePage() {
  return (
    <MotionWrapper
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
      exit={{ opacity: "0%" }}
    >
      {StoreItems.map(({ slug, name, img, price }) => (
        <StoreItem key={name} slug={slug} name={name} img={img} price={price} />
      ))}
    </MotionWrapper>
  );
}
