import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news"

export default function InterceptorImagePage({params}) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(item => item.slug == newsItemSlug);

  if(!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <div className="fullscreen-image">
        <img 
          src={`/images/news/${newsItem.image}`} 
          alt={newsItem.title} 
        />
      </div>
    </>
  )
}
