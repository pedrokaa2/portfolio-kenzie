import styled from "styled-components";

export const BoxDiv = styled.div`
  width: 100vw;

  animation: start 1s;

    @keyframes start {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

  img {
    width: 100%;
  }
`;

export const BoxDivMain = styled.main`
  width: 100vw;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dev::before {
    content: "dev";
  }

  .front::before {
    content: "front";    
  }

  .end::before {
    content: "end";
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
    filter: drop-shadow(3px 7px 3px var(--darkblue));
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

    .dev {
      &::before {
        content: "dev";
      }
    }

    .dev:hover {
      color: #fc6600;
      animation: start 1s;

      &::before {
        display: none;
        height: 0px;
        width: 0px;
      }

      &::after {
        content: "html";
        max-width: initial;
        max-height: initial;
        margin-left: 0;
        overflow: hidden;
      }
    }

    .front {
      &::before {
        content: "front";
      }
    }

    .front:hover {
      color: #0080fe;
      animation: start 1s;
      min-width: 202.85px;

      &::before {
        display: none;
        height: 0px;
        width: 0px;
      }

      &::after {
        content: "css";
        max-width: initial;
        max-height: initial;
        margin-left: 0;
        overflow: hidden;
      }
    }

    .end {
      &::before {
        content: "end";
      }
    }

    .end:hover {
      color: #ffd000;
      animation: start 1s;

      &::before {
        display: none;
        height: 0px;
        width: 0px;
      }

      &::after {
        content: "js";
        max-width: initial;
        max-height: initial;
        margin-left: 0;
        overflow: hidden;
      }
    }

    @keyframes start {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
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

export const BoxDivHeader = styled.header`
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

export const DivLink = styled.div`
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

  @media (min-width: 378px) {
    a {
      font-size: 15px;
    }
  }

  @media (min-width: 768px) {
    a {
      font-size: 18px;
      margin-right: 36px;
      border-bottom: 3px solid var(--almostWhite);

      :hover {
        color: var(--darkblue);
        border-bottom: 3px solid var(--darkblue);
      }
    }
  }
`;

export const BoxFooter = styled.footer`
  display: flex;
  justify-content: center;

  button {
    width: 250px;
    animation: jump infinite 1s;
    animation-direction: alternate;

    @keyframes jump {
      0% {
        transform: translateY(5px);
      }
      35% {
        transform: translateY(-5px);
      }
      60% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  }

  @media (min-width: 500px) {
    margin-top: 5%;

    button {
      width: 450px;
      filter: drop-shadow(3px 7px 3px var(--darkblue));
    }
  }

  @media (min-width: 1024px) {
    button:hover {
      opacity: 70%;
    }
  }
`;
