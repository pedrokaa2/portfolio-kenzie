import styled from "styled-components";

export const BoxDiv = styled.div ` 
  width: 100vw;

  header {
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    align-self: center;
  }

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin-bottom: 30px;
  }
`

export const BoxMain = styled.main `
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    position: relative;
    
    .contatobox { 
      margin-right: 296px;
    }
  }
`

export const BoxDivCss = styled.div `
  display: flex;
  flex-direction: column;
  align-self: center;

  p {
    margin: 30px 0px;
    width: 250px;
    align-self: center;
  }

  img {
    width: 250px;
    align-self: center;
    margin-left: 0;
  }

  @media (min-width: 768px) {
    justify-content: space-around;

    p {
      width: 400px;
      margin: auto 0;
      font-size: 20px;
    }

    img {
      width: 300px;
    }

  }

`

export const DivImgP = styled.div `
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`

export const DivP = styled.div `
  @media (min-width: 768px) {
    margin: 30px 0px;
  }
`

export const DivVaziaCor = styled.div `
  background: var(--darkblue);
  width: 50px;
  height: 11px;
  align-self: center;
  display: flex;
  align-items: center;
`

export const DivSpan = styled.div `
  display: flex;
  margin-top: 20px;
  align-self: center;
  width: 250px;

  span {
    margin-left: 10px;
    width: 90px;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-self: start;
  }
`
