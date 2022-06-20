import { Link } from 'react-router-dom'
import PedroLogo from '../../Assets/pedrodev 1.svg'
import LogosFront from '../../Assets/logosfront 1.svg'

const Home = () => {
  return (
    <div>
      <header>
        <figure>
          <img src={PedroLogo} alt="pedrologo"></img>
        </figure>
        <Link to="/sobre">sobre</Link>
        <Link to="/projetos">meus projetos</Link>
      </header>
      <main>
        <h1>dev front end</h1>
        <figure>
          <img src={LogosFront} alt="logos front"></img>
        </figure>
      </main>
    </div>
  )
}

export default Home