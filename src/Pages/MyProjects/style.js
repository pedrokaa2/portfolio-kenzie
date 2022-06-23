import styled from "styled-components";

export const BoxDiv = styled.div ` 
  width: 100vw;
  display: flex;
  flex-direction: column;

  animation: start 1s;

    @keyframes start {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

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
  margin-left: 15%;
  align-self: center;
  width: 250px;

  span {
    margin-left: 10px;
    width: 150px;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-self: start;
  }
`