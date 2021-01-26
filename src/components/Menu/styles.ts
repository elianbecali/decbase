import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 16rem;
  @media (max-width: 1830px) {
    padding: 1rem 6rem;
  }

  div a {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--dove-gray);
    padding: 0.4rem 0.8rem;
    transition: 0.2s ease-out;

    &:hover {
      color: var(--black);
    }

    &+ a {
      margin-left: 1.1rem;

      &:last-child {
        margin-left: 4rem;
        background-color: var(--eunry);
        color: var(--white);
        border-radius: 1rem 0;
      }
    }
  }

  div.menu {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 6.688rem 16rem;

  @media (max-width: 1830px) {
    padding: 5rem 6rem;
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
      width: 717px;
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
