import { IconType } from 'react-icons';

import { Article } from './styles';

interface CardServiceProps {
  title: String;
  description: String;
  Icon: IconType;
  highlight: Boolean;
}

function CardService({ title, description, Icon, highlight }: CardServiceProps) {
  return (
    <Article highlight={highlight}>
      <div>
        <Icon color="#000"/>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Article>
  );
}

export default CardService;
