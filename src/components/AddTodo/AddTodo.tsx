import React, { useRef } from 'react';
import { useAppDispatch } from '../../services/hooks/hooks';
import { addTodo } from '../../services/reduxSlice/TodoSlice';
import Card from '../UI/Card';
import styles from './AddTodo.module.css';
import { useTranslation } from 'react-i18next';

const AddTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (
      event.code === 'Enter' &&
      (inputRef.current?.value.trim() as string).length > 0
    ) {
      dispatch(
        addTodo({
          id: String((Math.random() * 100).toFixed(0)),
          value: inputRef.current?.value as string,
          completed: false,
        })
      );
      inputRef.current!.value = '';
    }
  };
  const addTodoButtonHandler = () => {
    if ((inputRef.current?.value.trim() as string).length > 0) {
      dispatch(
        addTodo({
          id: String((Math.random() * 100).toFixed(0)),
          value: inputRef.current?.value as string,
          completed: false,
        })
      );
      inputRef.current!.value = '';
    }
  };

  return (
    <>
      <div className={styles.top_heading}>
        <h1>{t('title')}</h1>
      </div>
      <div className={styles.input_wrapper}>
        <Card className={styles.addTodo_card}>
          <input
            className={styles.input}
            type="text"
            ref={inputRef}
            onKeyDown={keyPressHandler}
            placeholder={t('input_text')}
          />
        </Card>
        <button className={styles.button} onClick={addTodoButtonHandler}>
          {t('add_button')}
        </button>
      </div>
    </>
  );
};

export default AddTodo;
