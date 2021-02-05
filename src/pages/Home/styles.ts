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

export const ButtonCall = styled.a`
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
`;

export const SectionService = styled.section`
  padding: 6.688rem 16rem;

  > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  > div + div {
    margin-top: 3rem;
  }

  > div h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1rem;
    letter-spacing: -0.01rem;
    text-transform: uppercase;
    color: var(--dove-gray);

    span {
      font-weight: 500;
      font-size: 3rem;
      line-height: 4.875rem;
      letter-spacing: normal;
      text-transform: capitalize;
      color: var(--mine-shaft);
      display: block;
    }
  }

  div.icons {
    display: flex;
    align-items: flex-end;
  }

  div.icons span + span {
    margin-left: 1.125rem;
  }

  div.icons span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.9rem;
    box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &.marker {
      background-color: var(--viridian);
    }
  }

  > div article + article {
    margin-left: 0.8rem;
  }

  @media (max-width: 1830px) {
    padding: 5rem 6rem;
  }
  @media (max-width: 1430px) {
    padding: 2.5rem;
  }
  @media (max-width: 1380px) {
    > div + div {
      justify-content: center;
    }
    article {
      margin-top: 1rem;
    }
  }

`;

export const SectionAboutUs = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6.688rem 16rem;
  padding-top: 0;

  >:first-child {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      bottom: 10%;
      right: 4%;
      height: 99%;
      width: 100%;
      max-height: 681px;
      max-width: 743px;
      border: 2px solid var(--limed-oak);
      border-radius: 8.75rem 0;
      z-index: -1;
    }
  }

  div img {
    border-radius: 8.75rem 0;
  }

  > div + div {
    max-width: 544px;

    h2, h3 {
      font-family: 'Poppins';
      font-weight: 500;
    }

    h2 {
      font-size: 1.25rem;
      line-height: 1.875rem;
      color: var(--dove-gray);
    }

    h3 {
      font-size: 3rem;
      line-height: 3.563rem;
      color: var(--mine-shaft);
      margin-bottom: 1.375rem;
      margin-top: 0.375rem;
    }

    p {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.875rem;
      color: var(--dove-gray);
      margin-bottom: 1.75rem;
    }
  }

`;

export const SectionCompany = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 6.688rem 16rem;
  align-items: center;

  >div p {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.125rem;
    letter-spacing: 0.04rem;
    line-height: 4.063rem;
    color: var(--mine-shaft);

    margin-bottom: 2.3rem;
    padding-right: 2rem;

    span {
      display: block;
      font-weight: 700;
      font-size: 18rem;
      line-height: 1.75rem;
      letter-spacing: -0.01rem;

      margin-bottom: 1.5rem;
    }
  }

  div + div {
    position: relative;

    img,
    &::after {
      border-radius: 8.75rem 0;
    }

    &::after {
      position: absolute;
      content: '';
      bottom: -3%;
      right: -3.5%;
      height: 99%;
      width: 100%;
      max-height: 681px;
      max-width: 743px;
      border: 2px solid var(--limed-oak);
      z-index: -1;
    }
  }
`;
