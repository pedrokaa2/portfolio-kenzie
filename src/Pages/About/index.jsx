import { Link } from 'react-router-dom'
import PedroLogo from '../../Assets/pedrodev 1.svg'
import MinhaFoto from '../../Assets/fotinha.svg'

const About = () => {
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
          <span>sobre mim</span>
        </div>
        <div>
          <p>Oie! Sou Pedro Yvo Lucas! Um Desenvolvedor Front-End formado na Kenzie Academy Brasil, UX/UI designer e Desevolvedor Back-End em formação, sou entusiasta de tecnologias e procuro estar aprendendo cada vez mais, estou ingressando nessa carreira afim de adquirir mais conhecimentos e procurando experiências e oportunidades nesse mercado!</p>
          <img src={MinhaFoto} alt="fotinha pedro"/>
        </div>
        <div>
          <div></div>
          <span>sobre mim</span>
        </div>
        <p>email: pedkaa@yahoo.com</p>
      </main>
    </div>
  )
}

export default About