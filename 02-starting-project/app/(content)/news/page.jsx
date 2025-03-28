import { DUMMY_NEWS } from '../../../dummy-news';
import NewsList from '@/components/news-list';

export default function NewsPage() {
  return (
    <main>
      <NewsList 
        news={DUMMY_NEWS}
      />
    </main>
  )
}
