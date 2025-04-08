import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'All posts',
//   description: 'Browse all uur posts!'
// };

export const generateMetadata = async(config) => {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `(${numberOfPosts}) Posts!`,
    description: 'Browse all our posts!'
  }
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
