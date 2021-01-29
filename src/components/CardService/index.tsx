import { IconType } from 'react-icons';

import { Article } from './styles';

interface CardServiceProps {
  title: String;
  description: String;
  Icon: IconType;
  isHighlight: Boolean;
}

function CardService({ title, description, Icon, isHighlight }: CardServiceProps) {
  return (
    <Article isHighlight={isHighlight}>
      <div>
        <Icon color={isHighlight ? '#FFF' : '#000'} size={40}/>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Article>
  );
}

export default CardService;
