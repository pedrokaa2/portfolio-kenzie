import styled from "styled-components";

export const BoxDiv = styled.div `
  width: 100vw;

  img {
    width: 100%;
  }
`;

export const BoxDivMain = styled.main `
  width: 100vw;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 80px;
    display: flex;
    flex-direction: column;
    margin: 5% 0px 5%;
    text-align: center;
  }

  figure {
    display: flex;
    justify-content: center;
  }

  img {
    width: 90%;
    margin: 5% 0px 5%;
  }

  @media (min-width: 500px) {
    div {
      flex-direction: row;
    }

    h1 {
      text-align: start;
      margin-left: 23px;
    }

    span:hover {
      color: var(--lightblue);
    }

    figure {
      justify-content: flex-end;
      margin-right: 23px;
    }

    img {
      width: 75%;
    }
  }
`;

export const BoxDivHeader = styled.header `
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 145px;
  }

  @media (min-width: 768px) {
    img {
      width: 200px;
    }
  }
`;

export const DivLink = styled.div `
  display: flex;

  a {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    margin-right: 14px;
    color: var(--lightblue);
  }

  a:nth-child(2n) {
    margin-right: 40px;
  }

  a:hover {
    color: var(--darkblue);
  }

  @media (min-width: 378px){
    a {
      font-size: 15px;
    }
  }

  @media (min-width: 768px){
    a {
      font-size: 18px;
      margin-right: 36px;
    }
  }
`

export const BoxFooter = styled.footer `
  display: flex;
  justify-content: center;

  button {
    width: 250px;
  }

  @media (min-width: 500px) {
    margin-top: 5%;

    button {
      width: 450px;
    }
  }

  @media (min-width: 1024px){
    button:hover {
      opacity: 70%;
    }
  }
`