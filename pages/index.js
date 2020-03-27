import Link from 'next/link';

export default function Index() {

return (
    <>
      Index Page. <p/>

      <Link href='/about'>
        <a> Api BATMAN Page <b>(With react state components)</b> </a>
      </Link> 
      
      <p />

      <Link href='/new'>
        <a> Api BATMAN Page <b>(With getinitialprops)</b> </a>
      </Link>
    </>
  )
}