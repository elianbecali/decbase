import styled from 'styled-components';

export const HeaderPage = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 6.688rem 16rem;

  @media (max-width: 1830px) {
    padding: 5rem 6rem;
  }
  @media (max-width: 1430px) {
    padding: 2.5rem;

    div.content {
      max-width: 570px;
    }

    div + div:after {
      display: none;
    }
  }

  div.content {
    max-width: 620px;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: var(--dove-gray);
      font-weight: 600;
      font-size: 1.25rem;
      text-transform: uppercase;
    }

    h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 4.5rem;
      line-height: 4.875rem;

      margin: 0.8rem 0 0.9rem 0;
    }

    p {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.8rem;
      color: var(--dove-gray);
    }

    a {
      font-weight: 700;
      font-size: 1.125rem;
      text-align: center;
      text-transform: uppercase;
      margin-top: 2.8rem;

      max-width: 140px;
      padding: 0.8rem 1.75rem;
      border: none;
      border-radius: 1.25rem 0;
      color: var(--white);
      background-color: var(--viridian);
    }
  }

  div + div {
    width: 100%;
    max-width: 750px;
    position: relative;

    img {
      width: 100%;
      max-height: 626px;
      max-width: 717px;
      border-radius: 8.75rem 0;
    }


    &::after {
      position: absolute;
      content: '';
      top: 7.7%;
      left: 8%;
      height: 99%;
      width: 100%;
      max-height: 626px;
      max-width: 717px;
      border: 2px solid var(--limed-oak);
      border-radius: 8.75rem 0;
      z-index: -1;
    }
  }
`;
