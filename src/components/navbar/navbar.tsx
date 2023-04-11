import Link from "next/link";
import Image from "next/image";
import { OuterWrapper, Wrapper, CartWrapper } from "./navbar.styles";

export default function NavBar() {
  return (
    <OuterWrapper>
      <Wrapper>
        <li>
          <Link href="/">Clothify</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </Wrapper>
      <CartWrapper>
        <Image
          priority
          height={22}
          width={22}
          src="/cart.svg"
          alt="Cart Iton"
        />
        <p>Cart</p>
      </CartWrapper>
    </OuterWrapper>
  );
}
