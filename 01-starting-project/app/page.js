import Link from 'next/link';
import Header from '@/components/header';

// @ refers to the root path with this configuration
// in jsconfig.json
// {
//   "compilerOptions": {
//     "paths": {
//       "@/*": ["./*"]
//     }
//   }
// }

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
