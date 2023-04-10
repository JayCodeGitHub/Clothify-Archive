import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/">Clothify</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
      <h1>About</h1>
    </main>
  );
}
