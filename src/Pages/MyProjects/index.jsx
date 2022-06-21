import { Link } from "react-router-dom"
import PedroLogo from '../../Assets/pedrodev 1.svg'
import Malinha from "../../Components/Malinha"

const MyProjects = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={PedroLogo} alt="pedrologo"/>
        </Link>
      </header>
      <main>
        <div>
          <div></div>
          <span>meus projetos</span>
        </div>
        <div>
          <Malinha/>
          <Malinha/>
        </div>
      </main>
    </div>
  )
}

export default MyProjects