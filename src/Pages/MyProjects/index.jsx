import { Link } from "react-router-dom";
import PedroLogo from "../../Assets/pedrodev 1.svg";
import Malinha from "../../Components/Malinha";
import * as S from "./style";

const MyProjects = () => {
  return (
    <S.BoxDiv>
      <header>
        <Link to="/">
          <img src={PedroLogo} alt="pedrologo" />
        </Link>
      </header>
      <main>
        <S.DivSpan>
          <S.DivVaziaCor>
            <div></div>
          </S.DivVaziaCor>
          <span>minhas bagagens</span>
        </S.DivSpan>
        <div>
          <Malinha />
        </div>
      </main>
    </S.BoxDiv>
  );
};

export default MyProjects;