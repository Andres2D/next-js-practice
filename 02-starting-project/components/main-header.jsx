import Link from 'next/link';

export default function MainHeader() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <br />
      <Link href="/news">News</Link>
    </nav>
  )
}