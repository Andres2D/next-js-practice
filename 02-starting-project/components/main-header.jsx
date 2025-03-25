import Link from 'next/link';

export default function MainHeader() {
  return (
    <header>
      <Link href="/">Home</Link>
      <br />
      <Link href="/news">News</Link>
    </header>
  )
}