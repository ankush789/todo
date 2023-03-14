import React from 'react';
import styles from './ButtonGroup.module.css';
interface props {
  buttonList: Array<string>;
  filter: number;
  setFilter: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonGroup: React.FC<props> = ({ buttonList, filter, setFilter }) => {
  console.log(filter);
  return (
    <div className={styles.button_wrapper}>
      {buttonList.map((buttonItem, index) => (
        <button
          onClick={() => setFilter(index)}
          className={filter === index ? styles.active : ''}
        >
          {buttonItem}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
