import styled from 'styled-components';

interface ArticleProps {
  highlight: Boolean;
}

export const Article = styled.article<ArticleProps>`
  background-color: ${props => (props.highlight ? 'var(--eunry)' : 'var(--white)')};
  padding: 2rem 1.3rem 2.16rem 2.4rem;

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => (props.highlight ? 'var(--white)' : 'var(--mine-shaft)')};
  }
  p {
    font-weight: 400;
    font-size: 1.125rem;
  }
`;
