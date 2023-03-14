import React, { useState, Suspense } from 'react';
import styles from './App.module.css';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Language } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const languages = [
    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'Hindi',
      code: 'hi',
    },
  ];
  const [mode, setMode] = useState(true);
  const modeHandler = () => {
    setMode(!mode);
  };

  return (
    <Suspense fallback="loading">
      <div className="App" style={{ background: mode ? '#1a202c' : '#fff' }}>
        <div className={styles.mode}>
          {mode ? (
            <ModeNightIcon onClick={modeHandler} sx={{ color: '#fff' }} />
          ) : (
            <Brightness5Icon onClick={modeHandler} sx={{ color: '#000' }} />
          )}
        </div>
        <div className={styles.main}>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
