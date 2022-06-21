import styled from "styled-components";

export const BoxDiv = styled.div `
  width: 100vw;

  img {
    width: 100%;
  }
`;

export const BoxDivMain = styled.main `
  width: 100vw;
  margin-left: 40px;

  h1 {
    font-size: 80px;
    width: 200px;
  }

  img {
    width: 230px;
  }
`;

export const BoxDivHeader = styled.header `
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 145px;
  }
`;

export const DivLink = styled.div `
  a {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-right: 30px;
    color: var(--lightblue);
  }
`