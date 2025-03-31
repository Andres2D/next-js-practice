import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default async function LatestNewsPage() {
  
  const latestNews = await getLatestNews();
  
  return (
    <>
      <h2>Lates News</h2>
      <NewsList 
        news={latestNews}
      />
    </>
  )
}
