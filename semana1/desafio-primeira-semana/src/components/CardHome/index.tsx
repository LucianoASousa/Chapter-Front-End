import { Link } from 'react-router-dom';
import './style.css';

interface CardHomeProps {
  name: string;
  description: string;
  href: string;
}

export function CardHome({name, description, href}: CardHomeProps){
  return (
    <Link to={href} className="cardHome">
      <h2>{name}</h2>
      <p>{description}</p>
    </Link>
  )
}