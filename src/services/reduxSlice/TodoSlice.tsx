import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../../interfaces/Todo';
import TodoState from '../../interfaces/TodoState';

const initialState: TodoState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.unshift(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const indexTodo = state.findIndex((t) => t.id === action.payload.id);
      state[indexTodo] = { ...state[indexTodo], value: action.payload.value };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((t) => t.id !== action.payload.toString());
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      const indexTodo = state.findIndex((t) => t.id === action.payload);
      state[indexTodo].completed = !state[indexTodo].completed;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, changeTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
