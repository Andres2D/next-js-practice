import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function LatestNewsPage() {
  
  const latestNews = getLatestNews();
  
  return (
    <>
      <h2>Lates News</h2>
      <NewsList 
        news={latestNews}
      />
    </>
  )
}
