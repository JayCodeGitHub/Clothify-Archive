import Link from "next/link";

export default function HomePage() {
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
      <h1>Clothify</h1>
    </main>
  );
}
