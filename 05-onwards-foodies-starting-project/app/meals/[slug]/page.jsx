import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMeal } from '../../../lib/meals';
import styles from './page.module.css';

export const generateMetadata = async({ params }) => {
  const meal = getMeal(params.slug);

  if(!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary
  }
}

export default function Meal({params}) {
  const meal = getMeal(params.slug);

  if(!meal) {
    // will show the closest not found or error page
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_mail}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>
            {meal.summary}
          </p>
        </div>
      </header>
      <main>
        <p 
          className={styles.instructions} 
          dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}>  
        </p>
      </main>
    </>
  )
}
