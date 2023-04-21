import { Wrapper, Header } from "@/styles/pages/about.styles";
import { AboutItems } from "@/assets/aboutItems";

export default function AboutPage() {
  return (
    <Wrapper>
      <Header>
        <h1>About</h1>
      </Header>
      {AboutItems.map((item) => (
        <>
          <p>{item.paragraph}</p>
          <br />
          <br />
          <br />
          <br />
        </>
      ))}
    </Wrapper>
  );
}
