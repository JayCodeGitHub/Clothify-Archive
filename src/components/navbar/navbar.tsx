import Link from "next/link";
import { Wrapper } from "./navbar.styles";

export default function NavBar() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/">Clothify</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </Wrapper>
  );
}
