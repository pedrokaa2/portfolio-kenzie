import styled from "styled-components";

export const DivBoxFather = styled.div `
  display: flex;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  min-width: 256px;
  max-width: 462px;
  max-height: 462px;
`;

export const DivBox = styled.div `
  display: flex;
  flex-direction: column;
`

export const Alca = styled.div`
  display: flex;
  width: 50%;
  margin-top: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  .meio {
    position: absolute;
    top: -55px;
    left: 20px;
    width: 69%;
    height: 22px;
    background-color: var(--darkblue);
    border-radius: 10px;
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;

    @media (min-width: 295px) {
      width: 70%;
    }
    @media (min-width: 303px) {
      width: 71%;
    }
    @media (min-width: 313px) {
      width: 72%;
    }
    @media (min-width: 323px) {
      width: 73%;
    }
    @media (min-width: 335px) {
      width: 74%;
    }
    @media (min-width: 351px) {
      width: 75%;
    }
    @media (min-width: 365px) {
      width: 76%;
    }
    @media (min-width: 379px) {
      width: 77%;
    }
    @media (min-width: 399px) {
      width: 78%;
    }
    @media (min-width: 415px) {
      width: 79%;
    }
    @media (min-width: 428px) {
      width: 79%;
    }
    @media (min-width: 439px) {
      width: 80%;
    }
    @media (min-width: 453px) {
      width: 81%;
    }
    @media (min-width: 481px) {
      width: 82%;
    }
    @media (min-width: 505px) {
      width: 83%;
    }
  }

  .diagonal-esquerda {
    position: absolute;
    top: -50px;
    left: 8px;
    width: 29px;
    height: 33px;
    background-color: var(--darkblue);
    transform: rotate(50deg);
  }

  .diagonal-direita {
    position: absolute;
    top: -50px;
    right: 8px;
    width: 29px;
    height: 33px;
    background-color: var(--darkblue);
    transform: rotate(-50deg);
  }

  .perna-esquerda {
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 29px;
    height: 38px;
    background-color: var(--darkblue);
    border-top-left-radius: 1px;
  }

  .perna-direita {
    position: absolute;
    right: 0;
    bottom: -4px;
    width: 29px;
    height: 38px;
    background-color: var(--darkblue);
    border-top-right-radius: 1px;
  }
`;

export const Corpo = styled.div`
  width: 100%;
  height: 364px;
  margin-bottom: 100px;
  border-radius: 80px;
  background-color: var(--lightblue);
  position: relative;

  span, h3 {
    color: var(--almostWhite);
  }

  span {
    font-size: 36px;
  }

  h3 {
    font-size: 17px;
    width: 250px;
    margin: 20px 0;
    font-weight: 300;
    letter-spacing: 1.2px;
  }

  .tecnologias {
    font-size: 12px;
  }

  .box-rodinhas {
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    .rodinha-esquerda {
      position: absolute;
      bottom: -40px;
      left: 50%;
      margin-left: 40px;
      transform: translateX(-150%);
      width: 45px;
      height: 45px;
      background-color: var(--darkblue);
      border-radius: 100%;
      animation: spin infinite 2s;
    }

    .rodinha-direita {
      position: absolute;
      bottom: -40px;
      right: 50%;
      margin-right: 40px;
      transform: translateX(150%);
      width: 45px;
      height: 45px;
      background-color: var(--darkblue);
      border-radius: 100%;
      animation: spin infinite 2s;

      img {
        margin-top: 15px;
        width: 42px;
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (min-width: 417px) {
        .rodinha-esquerda {
            transform: translateX(-300%);
        }
        .rodinha-direita {
            transform: translateX(300%);
        }
    }
  }

  .text-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
`;
