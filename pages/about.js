import Link from 'next/link';
import api from '../services/api';

export default class About extends React.Component {

  state = {
    valores:[],
    contentType:'',
    url:'',
    method:'',
    baseURL: '',
    valores: []
  }

  componentDidMount() {
    this.handleShow();
  }

  handleShow = async () => {

    const response = await api.get('/?search=Alderaan');

    this.setState({
      status: response.status,
      contentType: response.headers['content-type'],
      url: response.config.url,
      method: response.config.method,
      baseURL: response.config.baseURL,
      valores: [response.data.results[0]]
    })

    console.log(this.state.valores[0]);
  }

  render(){    

    const {valores} = this.state;

    return (
      <>
        This is the about page.
        <p/>
        <Link href='/'>
          <a> Back </a>
        </Link>

        <form onLoad={this.handleShow}>
        <div>

          <h4>Headers</h4>
          <ul>
            <li>Status:<b> {this.state.status} </b></li>
            <li>Content:<b> {this.state.contentType}</b></li>
            <li>Url:<b> {this.state.url}</b></li>
            <li>Method:<b> {this.state.method}</b></li>
            <li>Url Base:<b> {this.state.baseURL}</b></li>
          </ul>

          <h4>Valores da requisição api -</h4>
          <ul>
            <li>
             Nome do planeta: <b>{valores.map(planets => planets.name )}</b>
            </li>

            <li>
             Terreno: <b>{valores.map(planets => planets.terrain )}</b>
            </li>

            <li>
             População: <b>{valores.map(planets => planets.population )}</b>
            </li>

            <li>
             Clima: <b>{valores.map(planets => planets.climate )}</b>
            </li>
            
          </ul>

        </div>
        </form>
        
      </>
    )
  }
}