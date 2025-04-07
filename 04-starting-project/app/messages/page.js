// import { unstable_noStore } from 'next/cache';
import Messages from '@/components/messages';

// Configure cache handling with reserved variable name
// export const revalidate = 5;

// Another way to configure cache with reserved var name
// export const dynamic = 'force-dynamic'; // cache: 'no-store'

export default async function MessagesPage() {

  // No cache configuration option 1
  // const response = await fetch('http://localhost:8080/messages', {
  //   cache: 'no-store' 
  // });

  // Keep cache for 5 seconds before removing it again
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {
  //     revalidate: 5
  //   }
  // });

  // Call function to no store cache in this component
  // unstable_noStore();

  const response = await fetch('http://localhost:8080/messages', {
    next: {
      tags: ['msg']
    }
  });

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
