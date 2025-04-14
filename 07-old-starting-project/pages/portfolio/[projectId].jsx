import { useRouter } from 'next/router';

export default function PortfolioProjectPage(params) {
  
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>The Portfolio Project Page: {router.query.projectId}</h1>
    </div>
  )
}
