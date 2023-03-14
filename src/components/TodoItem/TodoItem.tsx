import React, { useState } from 'react';
import { useAppDispatch } from '../../services/hooks/hooks';
import {
  changeTodoStatus,
  deleteTodo,
  updateTodo,
} from '../../services/reduxSlice/TodoSlice';
import Todo from '../../interfaces/Todo';
import styles from './TodoItem.module.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip } from '@mui/material';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const deleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const toggleHandler = (id: string) => {
    dispatch(changeTodoStatus(id));
  };
  return (
    <>
      <div
        className={styles.list_item}
        key={todo.id}
        onMouseEnter={() => setShowDeleteButton(true)}
        onMouseLeave={() => setShowDeleteButton(false)}
        style={
          todo.completed
            ? { textDecoration: 'line-through', color: '#777' }
            : {}
        }
      >
        <div className={styles.left}>
          <span
            onClick={() => {
              toggleHandler(todo.id);
            }}
          >
            {todo.completed ? (
              <CheckBoxIcon sx={{ cursor: 'pointer', color: '#820082' }} />
            ) : (
              <CheckBoxOutlineBlankIcon
                sx={{ cursor: 'pointer', color: '#820082' }}
              />
            )}
          </span>
          <Tooltip title={'Click to edit the todo'} arrow>
            <span
              className={styles.noFocus}
              onBlur={(e) => {
                dispatch(
                  updateTodo({
                    id: todo.id,
                    value: e.currentTarget.textContent as string,
                    completed: todo.completed,
                  })
                );
              }}
              contentEditable="true"
            >
              {todo.value}
            </span>
          </Tooltip>
        </div>
        {showDeleteButton && (
          <div
            className={styles.right}
            onClick={() => {
              deleteHandler(todo.id);
            }}
          >
            <CloseIcon sx={{ color: '#ff0000e3', cursor: 'pointer' }} />
          </div>
        )}
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default TodoItem;
