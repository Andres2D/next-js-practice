'use client'

export default function Error({error}) {
  // console.log(error);
  return (
    <main className='error'>
      <h1>An error ocurred!</h1>
      <p>Failed to fetch meals data. Try again later.</p>
    </main>
  )
}
