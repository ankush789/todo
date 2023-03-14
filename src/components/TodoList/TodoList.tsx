import React from 'react';
import { RootState } from '../../services/store/store';
import { useAppSelector } from '../../services/hooks/hooks';
import TodoItem from '../TodoItem/TodoItem';
import Todo from '../../interfaces/Todo';
import Card from '../UI/Card';
import styles from './TodoList.module.css';
import { useState } from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import notFound from '../../assets/empty.svg';
import { useTranslation } from 'react-i18next';

const TodoList = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState(0);
  const buttonList: Array<string> = i18n.t('filter_button_array', {
    returnObjects: true,
  });
  const todos = useAppSelector((state: RootState) => state.todos);
  let filteredTodo = todos;
  if (filteredTodo.length === 0) {
    return (
      <>
        {/* <Card className={styles.not_found}>
          <h3>Nothing found for the day!! </h3>
        </Card> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <img src={notFound} alt="Not Found" width="80%" />
        </div>
      </>
    );
  }

  if (filter === 0) {
    filteredTodo = todos;
  } else if (filter === 1) {
    filteredTodo = todos.filter((todo) => todo.completed === false);
  } else {
    filteredTodo = todos.filter((todo) => todo.completed === true);
  }
  return (
    <Card style={{ marginTop: '1rem' }}>
      <div className={styles.list_wrapper}>
        {filteredTodo &&
          filteredTodo.map((todo: Todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
      </div>
      <div className={styles.navigation}>
        <div className={styles.total_count}>
          {t('task_remaining', { count: filteredTodo.length })}
        </div>
        <ButtonGroup
          buttonList={buttonList}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </Card>
  );
};

export default TodoList;
