import axios from 'axios';
import Link from 'next/link';

export default function Content({valores}) {
  console.log(valores);

  return (
    <>
      <h3> Batman Content </h3>

      {valores.map(val => (
        <ul key={val.id}>
          <li>{val.name}</li>
          <li>{val.premiered}</li>
        </ul>
      ))}

      <Link href='/'>
        <a>Index Page</a>
      </Link>
        <p />
      <Link href='/about'>
        <a>About - API Page (react state components)</a>
      </Link>
      
    </>
  )
}

Content.getInitialProps = async () => { 
  const res = await axios('https://api.tvmaze.com/search/shows?q=batman');

  return {
   valores: res.data.map(f=> f.show)
  }

}