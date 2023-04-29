import { StyledWrapper, StyledHeader } from "@/styles/pages/about.styles";
import { AboutItems } from "@/assets/aboutItems";
import { motion } from "framer-motion";

const MotionWrapper = motion(StyledWrapper);

export default function AboutPage() {
  return (
    <MotionWrapper
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
      exit={{ opacity: "0%" }}
    >
      <StyledHeader>
        <h1>About</h1>
      </StyledHeader>
      {AboutItems.map((item) => (
        <>
          <p>{item.paragraph}</p>
          <br />
          <br />
          <br />
          <br />
        </>
      ))}
    </MotionWrapper>
  );
}
