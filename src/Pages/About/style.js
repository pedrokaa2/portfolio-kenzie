import styled from "styled-components";

export const BoxDiv = styled.div ` 
  width: 100vw;

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin-left: 10px;
  }
`

export const BoxDivCss = styled.div `
  display: flex;
  flex-direction: column;

  p {
    margin: 30px 30px;
    width: 250px;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-around;

    p {
      width: 400px;
      margin: auto 0;
      font-size: 20px;
    }
  }
`

export const DivVaziaCor = styled.div `
  background: var(--darkblue);
  width: 50px;
  height: 11px;
  margin-left: 30px;
  display: flex;
  align-items: center;
`

export const DivSpan = styled.div `
  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    margin-left: 10px;
    width: 90px;
    text-align: center;
  }
`