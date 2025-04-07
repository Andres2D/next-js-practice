import Messages from '@/components/messages';

export default async function MessagesPage() {


  // No cache configuration option 1
  // const response = await fetch('http://localhost:8080/messages', {
  //   cache: 'no-store' 
  // });

  // Keep cache for 5 seconds before removing it again
  const response = await fetch('http://localhost:8080/messages', {
    next: {
      revalidate: 5
    }
  });

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
