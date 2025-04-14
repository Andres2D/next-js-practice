import { useRouter } from 'next/router';

export default function SelectedClientProjectPage() {
  
  const router = useRouter();

  console.log(router);
  
  return (
    <div>
      <h1>The project Page for a Specific Project for a Selected Client</h1>
    </div>
  )
}
