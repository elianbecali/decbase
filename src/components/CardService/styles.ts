import styled from 'styled-components';

interface ArticleProps {
  isHighlight: Boolean;
}

export const Article = styled.article<ArticleProps>`
  display: flex;

  background-color: ${props => (props.isHighlight ? 'var(--eunry)' : 'var(--white)')};
  padding: 2rem 1.3rem 2.16rem 2.4rem;
  max-width: 425px;
  border-radius: 3.75rem 0;
  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.14);

  > div svg{
    margin-top: 0.6rem;
    margin-right: 0.8rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => (props.isHighlight ? 'var(--white)' : 'var(--mine-shaft)')};
  }
  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: ${props => (props.isHighlight ? 'var(--white)' : 'var(--dove-gray)')};
  }
`;
