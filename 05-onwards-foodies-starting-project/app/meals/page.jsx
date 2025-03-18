import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/share">Share</Link>
        <br />
        <Link href="/meals/soup">Soup</Link>
        <br />
        <Link href="/meals/steak">Steak</Link>
        <br />
        <Link href="/meals/noodles">Noodles</Link>
        <br />
        <Link href="/">Menu</Link>
      </p>
    </main>
  )
}
