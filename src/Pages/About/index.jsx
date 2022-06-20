import { Link } from 'react-router-dom'
import PedroLogo from '../../Assets/pedrodev 1.svg'
import MinhaFoto from '../../Assets/fotinha.svg'

const About = () => {
  return (
    <div>
      <header>
        <Link>
          <img src={PedroLogo} alt="pedrologo"/>
        </Link>
      </header>
      <main>
        <span>sobre mim</span>
        <div>
          <p>Oie! Sou Pedro Yvo Lucas! Um Desenvolvedor Front-End formado na Kenzie Academy Brasil, UX/UI designer e Desevolvedor Back-End em formação, sou entusiasta de tecnologias e procuro estar aprendendo cada vez mais, estou ingressando nessa carreira afim de adquirir mais conhecimentos e procurando experiências e oportunidades nesse mercado!</p>
          <img src={MinhaFoto} alt="fotinha pedro"/>
        </div>
        <span>contato</span>
        <p>email: pedkaa@yahoo.com</p>
      </main>
    </div>
  )
}

export default About