import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Clothify</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
