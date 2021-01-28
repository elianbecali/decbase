import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 16rem;
  @media (max-width: 1830px) {
    padding: 1rem 6rem;
  }
  @media (max-width: 1430px) {
    padding: 1rem 2.5rem;
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
