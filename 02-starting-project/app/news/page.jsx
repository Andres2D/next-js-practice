import Link from 'next/link';

export default function NewsPage() {
  return (
    <main>
      <p>News page works!</p>

      <ul>
        <li>
          <Link href="/news/asteroid">Asteroid</Link>
        </li>
        <li>
          <Link href="/news/quantum-computing">Quantum computing</Link>
        </li>
        <li>
          <Link href="/news/war">war</Link>
        </li>
      </ul>
    </main>
  )
}
