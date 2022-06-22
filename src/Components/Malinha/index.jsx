import * as S from "./style";
import Vercel from '../../Assets/vercel 1.svg'
import Github from '../../Assets/github 1.svg'

const Malinha = () => {
  return (
    <S.DivBoxFather>
      <S.Wrapper>
        <S.DivBox>
          <S.Alca>
            <div className="perna-esquerda"></div>
            <div className="diagonal-esquerda"></div>
            <div className="meio"></div>
            <div className="diagonal-direita"></div>
            <div className="perna-direita"></div>
          </S.Alca>
          <S.Corpo>
            <div className="text-content">
              <span>Kenzie Hub</span>
              <h3 className="kenziehubh3">site para cadastro de alunos para botarem de quais módulos eles estão no curso, e também cadastrar suas tecnologias em cima do conhecimento das mesmas.</h3>
              <span className="tecnologias">javascript | react | css | html</span>
            </div>
            <div className="box-rodinhas">
              <div className="rodinha-esquerda">
                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-pedrokaa2">
                  <img src={Github} alt="github"/>
                </a>
              </div>
              <div className="rodinha-direita">
                <a href="https://kenzie-hub-pedrokaa2.vercel.app/">
                  <img src={Vercel} alt="vercel"/>
                </a>
              </div>
            </div>
          </S.Corpo>
          <S.Alca>
            <div className="perna-esquerda"></div>
            <div className="diagonal-esquerda"></div>
            <div className="meio"></div>
            <div className="diagonal-direita"></div>
            <div className="perna-direita"></div>
          </S.Alca>
          <S.Corpo>
            <div className="text-content">
              <span>boralá.</span>
              <h3 className="boralah3">site de eventos para empresas, clientes padrões podem visitar o site para ver os eventos cadastrados por estados e cidades. (projeto feito em grupo)</h3>
              <span className="tecnologias">javascript | react | css | html | json server</span>
            </div>
            <div className="box-rodinhas">
              <div className="rodinha-esquerda">
                <a href="https://github.com/pedrokaa2/capstone-m3-grupo3-vilson-nov21">
                  <img src={Github} alt="github"/>
                </a>
              </div>
              <div className="rodinha-direita">
                <a href="https://capstone-m3-grupo3-vilson-nov21.vercel.app/">
                  <img src={Vercel} alt="vercel"/>
                </a>
              </div>
            </div>
          </S.Corpo>
          <S.Alca>
            <div className="perna-esquerda"></div>
            <div className="diagonal-esquerda"></div>
            <div className="meio"></div>
            <div className="diagonal-direita"></div>
            <div className="perna-direita"></div>
          </S.Alca>
          <S.Corpo>
            <div className="text-content">
              <span>Burger Kenzie</span>
              <h3 className="hamburgueriah3">hamburgueria com acesso a carrinho e vários produtos, onde os clientes podem comprar.</h3>
              <span className="tecnologias">javascript | react | css | html</span>
            </div>
            <div className="box-rodinhas">
              <div className="rodinha-esquerda">
                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-pedrokaa2">
                  <img src={Github} alt="github"/>
                </a>
              </div>
              <div className="rodinha-direita">
                <a href="https://hamburgueria-da-kenzie-pedrokaa2-version.vercel.app/">
                  <img src={Vercel} alt="vercel"/>
                </a>
              </div>
            </div>
          </S.Corpo>
          <S.Alca>
            <div className="perna-esquerda"></div>
            <div className="diagonal-esquerda"></div>
            <div className="meio"></div>
            <div className="diagonal-direita"></div>
            <div className="perna-direita"></div>
          </S.Alca>
          <S.Corpo>
            <div className="text-content">
              <span>nuKenzie</span>
              <h3 className="nukenzieh3">site simulando um banco com entradas e despesas por usuários, dando o valor total.</h3>
              <span className="tecnologias">javascript | react | css | html</span>
            </div>
            <div className="box-rodinhas">
              <div className="rodinha-esquerda">
                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-pedrokaa2">
                  <img src={Github} alt="github"/>
                </a>
              </div>
              <div className="rodinha-direita">
                <a href="https://nu-kenzie-pedrokaa2.vercel.app/">
                  <img src={Vercel} alt="vercel"/>
                </a>
              </div>
            </div>
          </S.Corpo>
          <S.Alca>
            <div className="perna-esquerda"></div>
            <div className="diagonal-esquerda"></div>
            <div className="meio"></div>
            <div className="diagonal-direita"></div>
            <div className="perna-direita"></div>
          </S.Alca>
          <S.Corpo>
            <div className="text-content">
              <span>Diecast Mania</span>
              <h3 className="diecasth3">site onde vendem miniaturas de carros, mais precisamente da Nascar.</h3>
              <span className="tecnologias">javascript | react | css | html | contextapi</span>
            </div>
            <div className="box-rodinhas">
              <div className="rodinha-esquerda">
                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-pedrokaa2">
                  <img src={Github} alt="github"/>
                </a>
              </div>
              <div className="rodinha-direita">
                <a href="https://diecastmania-kenzieshop-contextapi-pedrokaa2.vercel.app/">
                  <img src={Vercel} alt="vercel"/>
                </a>
              </div>
            </div>
          </S.Corpo>
        </S.DivBox>
      </S.Wrapper>
    </S.DivBoxFather>
  );
};

export default Malinha;