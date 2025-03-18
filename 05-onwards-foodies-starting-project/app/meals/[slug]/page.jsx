import Link from "next/link";

export default function Meal({params}) {
  
  return (
    <main>
      <h1>Meal</h1>
      <h2>{params.slug}!!!</h2>
      <br />
      <p>
        <Link href="/meals">Meals</Link>
        <br />
        <Link href="/">Menu</Link>
      </p>
    </main>
  )
}
