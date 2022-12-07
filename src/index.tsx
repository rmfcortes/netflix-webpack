import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import './index.scss'
import { router } from './router';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={ store }>
        <main className='main__container'>
          <RouterProvider router={router} />
        </main>
    </Provider>
  </StrictMode>
);
