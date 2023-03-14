import React from 'react';
import styles from './Card.module.css';

interface CardProps<T> {
  className?: T;
  style?: T;
}
const Card = <T extends {}>(props: React.PropsWithChildren<CardProps<T>>) => {
  return (
    <div className={`${styles.card} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};
export default Card;
