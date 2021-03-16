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

  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
  }
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

export const SectionWorkSuccess = styled.div`
  padding: 6.688rem 16rem;
  padding-bottom: calc(6.688rem + 92.5px);
  background-color: var(--alabaster);

  p {
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 3rem;
  line-height: 3.75rem;

  color: var(--mine-shaft);

  max-width: 823px;
  padding-bottom: 4rem;
  margin: 0 auto;
  }

  >div {
    display: flex;
    justify-content: space-between;


    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 11.563rem;
      height: 11.563rem;

      background-color: var(--white);
      box-shadow: 0px 13px 16px rgba(0, 0, 0, 0.1);
      border-radius: 2.5rem 0;

      font-weight: 700;
      font-size: 3.125rem;
      line-height: 3.75rem;

      span {
        font-size: 1.125rem;
        line-height: 1.875rem;
        color: var(--mine-shaft);
      }
    }

    >div {
      transition: transform 0.3s ease-out;
      &:hover {
        transform: scale(1.1);
      }
    }

    div:nth-child(2n) {
      transform: translateY(50%);
      transition: transform 0.3s ease-out;

      &:hover {
        transform: translateY(50%) scale(1.1);
      }
    }
  }
`;

export const SectionTestimonials = styled.div`
  padding: 6.688rem 16rem;

  >div {
    text-align: center;

    h2, h3 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 4.5rem;
      color: var(--dove-gray);
    }
    h3 {
      font-size: 3rem;
      line-height: 1.875rem;
      color: var(--mine-shaft);
    }
  }

  div.icons {
    display: flex;
    justify-content: flex-end;
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

  div.testimonials {
    display: flex;
    justify-content: space-between;

    margin-top: 6rem;
  }

  div.card {
    display: flex;
    padding: 2.375rem;
    max-width: 570px;
    cursor: pointer;
    transition: transform 0.25s;
    box-shadow: 7px 7px 30px 5px rgba(66, 96, 84, 0.15);
    border-radius: 4.375rem 0;

    &:hover {
      transform: scale(1.04);
    }

    & div:first-child {
      margin-left: -19.9%;
      /* transform: translateX(-65%); */
      img {
        border-radius: 2.188rem 0;
      }
    }

    div + div {
      position: relative;
      margin-left: 1.875rem;
      text-align: start;

      &::before {
        content: '';
        position: absolute;
        top: -8px;
        right: 0;

        width: 33px;
        height: 32px;
        background: url('/images/quotation-marks.svg');
      }
    }

    div p:first-child {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
      color: var(--mine-shaft);

      span {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.313rem;
      }
    }

    div p + p {
      margin-top: 0.5rem;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: var(--dove-gray);
    }
  }
`;

export const SectionLatestNews = styled.section`
  padding: 6.688rem 16rem;
  background-color: var(--alabaster);

  >div:nth-child(1) {
    text-align: center;

    h2, p {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 1.75rem;
    }
    h2 {
      font-size: 1.25rem;
      color: var(--dove-gray);
      text-transform: uppercase;
    }
    p {
      font-size: 3rem;
      color: var(--mine-shaft);
      margin-top: 1.5rem;
    }
  }

  >div + div {
    display: flex;
    justify-content: space-between;
    margin-top: 5.125rem;

    article {
      max-width: 600px;

      div img{
          border-radius: 6rem 0;
      }

      div + div {
        margin-top: 2.625rem;

        h3 {
          font-weight: 600;
          font-size: 1.8rem;
          line-height: 1.75rem;
          color: var(--mine-shaft);
        }

        p {
          margin-top: 1rem;
          margin-bottom: 2.813rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
          color: var(--dove-gray);
        }
      }
    }
  }
`;

export const SectionSignUp = styled.section`
  padding: 6.688rem 16rem;
  text-align: center;

  div h3 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 3rem;
    line-height: 1.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--mine-shaft);
  }
  div span {
    display: inline-block;
    margin: 2.5rem 0;
    width: 100%;
    max-width: 460px;
    border-top: 1px solid var(--silver);
  }
  div p {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--dove-gray);
    line-height: 1.75rem;
    max-width: 647px;
    margin: 0 auto;
  }
  div form {
    margin: 0 auto;
    margin-top: 1.875rem;
    max-width: 772px;
    max-height: 50px;
    text-align: center;
    display: flex;
    align-items: center;

    input[type=email] {
      padding: 0.8rem 1.75rem;
      width: 100%;
      height: 50px;
      max-width: 590px;
      border: none;
      border-radius: 1.25rem 0 0 0;
      background: var(--gallery);

      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 1.125rem;
      color: var(--dove-gray);
    }

    button {
      font-weight: 700;
      font-size: 1.125rem;
      text-align: center;
      text-transform: uppercase;

      height: 100%;
      max-height: 50px;
      max-width: 140px;
      padding: 0.8rem 1.75rem;
      border: none;
      border-radius: 0 0 1.25rem 0;
      color: var(--white);
      cursor: pointer;
      background-color: var(--viridian);
    }
  }
`;

export const SectionFooter = styled.footer`
  background: var(--alabaster);

  div.container {
    padding: 6.688rem 16rem;

    display: flex;
    justify-content: space-between;

    a {
      color: var(--dove-gray)
    }
  }

  div.container div.brand {
    max-width: 350px;

    p {
      margin-top: 1rem;
      color: var(--dove-gray);
      font-weight: 400;
      font-size: 1.125rem;
    }
  }

  div.container > div p {
    margin-bottom: 1.2rem;
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--mine-shaft);
  }

  div.container div ul li a {
    font-size: 1.125rem;
    line-height: 3rem;
    transition: color 0.2s ease-in;

    &:hover {
      color: var(--mine-shaft);
    }
  }

  div.container > div address p {
    color: var(--dove-gray);
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 3rem;
    font-style: normal;

    a {
      transition: color 0.2s ease-in;

      &:hover {
        color: var(--mine-shaft);
      }
    }
  }

  div.social ul {
    display: flex;

    li {
      width: 38px;
      height: 38px;
    }
    li a {
      display: inline-block;

      width: 100%;
      height: 100%;

      text-align: center;

      border-radius: 50%;
      background: var(--alto);

      transition: background 0.3s ease-in;

      &:hover {
        background: var(--viridian);
      }
    }

    li + li {
      margin-left: 0.5rem;
    }
  }

  div.copyright {
    padding: 1.125rem 0;

    font-size: 1.125rem;
    color: var(--dove-gray);
    text-align: center;

    border-top: 1px solid #C4C4C4;

    span {
      color: var(--viridian);
      cursor: pointer;
    }
  }
`;
