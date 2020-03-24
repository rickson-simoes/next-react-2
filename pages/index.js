import Link from 'next/link';

export default function Index() {

return (
    <>
      Index Page. <p/>

      <Link href='/about'>
        <a> About page </a>
      </Link>
    </>
  )
}