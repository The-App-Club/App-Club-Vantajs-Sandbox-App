import {css} from '@emotion/css';
import {createRoot} from 'react-dom/client';
import '@fontsource/inter';
import './styles/index.scss';

import {Bebop} from './components/Bebop';

const App = () => {
  return (
    <div
      className={css`
        width: 100%;
        max-width: 100%;
      `}
    >
      <Bebop />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
