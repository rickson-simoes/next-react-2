import Link from 'next/link';
import axios from 'axios';

export default class About extends React.Component {

  state = {
    valores: [],
  }  

  componentDidMount() {
    this.handleShow();
  }

  handleShow = async () => {
    const res = await axios('https://api.tvmaze.com/search/shows?q=batman');

    this.setState({
      valores: res.data.map( f=> f.show)
    })
  }

  render(){
    const {valores} = this.state;

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
      <Link href='/new'>
        <a>New - API Page (getInitialProps)</a>
      </Link>      
    </>
    )
  }
}