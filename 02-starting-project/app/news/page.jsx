import Link from 'next/link';
import { DUMMY_NEWS } from '../../dummy-news';

export default function NewsPage() {
  return (
    <main>
      <ul className='news-list'>
        {
          DUMMY_NEWS.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/news/${item.slug}`}>
                  <img src={`/images/news/${item.image}`} alt={item.title} />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
