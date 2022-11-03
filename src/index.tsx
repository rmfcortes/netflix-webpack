import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home';
import './index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <main className='main__container'>
      <Home />
    </main>
  </StrictMode>
);
