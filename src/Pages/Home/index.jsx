import { Link } from 'react-router-dom'
import PedroLogo from '../../Assets/pedrodev 1.svg'
import LogosFront from '../../Assets/logosfront 1.svg'
import * as S from "./style";

const Home = () => {
  return (
    <S.BoxDiv>
      <S.BoxDivHeader>
        <figure>
          <img src={PedroLogo} alt="pedrologo"></img>
        </figure>
        <S.DivLink>
          <Link to="/sobre">sobre</Link>
          <Link to="/projetos">meus projetos</Link>
        </S.DivLink>
      </S.BoxDivHeader>
      <S.BoxDivMain>
        <h1>dev front end</h1>
        <figure>
          <img src={LogosFront} alt="logos front"></img>
        </figure>
        <a download="CurriculoPedro" href="https://cdn.discordapp.com/attachments/962409605818884146/988856988173750372/CurriculoPedro2Jun22.pdf">
          <button>download cv</button>
        </a>
      </S.BoxDivMain>
    </S.BoxDiv>
  )
}

export default Home