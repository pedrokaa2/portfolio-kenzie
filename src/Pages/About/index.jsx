import { Link } from 'react-router-dom'
import PedroLogo from '../../Assets/pedrodev 1.svg'
import MinhaFoto from '../../Assets/fotinha.svg'
import * as S from "./style";

const About = () => {
  return (
    <S.BoxDiv>
      <header>
        <Link to="/">
          <img src={PedroLogo} alt="pedrologo"/>
        </Link>
      </header>
      <main>
      <S.DivSpan>
          <S.DivVaziaCor>
            <div></div>
          </S.DivVaziaCor>
            <span>sobre mim</span>
        </S.DivSpan>
        <S.BoxDivCss>
          <p>Oie! Sou Pedro Yvo Lucas! Um Desenvolvedor Front-End formado na Kenzie Academy Brasil, UX/UI designer e Desevolvedor Back-End em formação, sou entusiasta de tecnologias e procuro estar aprendendo cada vez mais, estou ingressando nessa carreira afim de adquirir mais conhecimentos e procurando experiências e oportunidades nesse mercado!</p>
          <img src={MinhaFoto} alt="fotinha pedro"/>
        </S.BoxDivCss>
        <S.DivSpan>
          <S.DivVaziaCor>
            <div></div>
          </S.DivVaziaCor>
            <span>contato</span>
        </S.DivSpan>
        <S.BoxDivCss>
          <p>email: pedkaa@yahoo.com</p>
        </S.BoxDivCss>
      </main>
    </S.BoxDiv>
  )
}

export default About