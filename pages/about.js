import Link from 'next/link';

export default function About() {
  return (
    <>
      This is the about page.
      <p/>
      <Link href='/'>
        <a> Back </a>
      </Link>
    </>
  )
}