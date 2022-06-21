import * as S from "./style";

const Malinha = () => {
  return (
    <S.Wrapper>
      <S.Alca>
        <div className="perna-esquerda"></div>
        <div className="diagonal-esquerda"></div>
        <div className="meio"></div>
        <div className="diagonal-direita"></div>
        <div className="perna-direita"></div>
      </S.Alca>
      <S.Corpo>
        <div className="text-content">
          <p>div do conteúdo</p>
        </div>
        <div className="box-rodinhas">
          <div className="rodinha-esquerda"></div>
          <div className="rodinha-direita"></div>
        </div>
      </S.Corpo>
    </S.Wrapper>
  );
};

export default Malinha;
