import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './services/store/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';
import './config/i18n';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
